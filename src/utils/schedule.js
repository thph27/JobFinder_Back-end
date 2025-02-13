const schedule = require('node-schedule');
import e from "express";
import db from "../models/index";
import getStringMailTemplate from "./mailTemplate";
const { Op } = require("sequelize");
const nodemailer = require('nodemailer');
let rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, 1, 2, 3, 4, 5, 6]
rule.hour = 8
rule.minute = 0
rule.second = 0
rule.tz = 'Asia/Vientiane'
let myRuleSecond = '*/10 * * * * *' // 10 is 10s

let sendmail = async (mailTemplate, userMail) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD,
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_APP,
        to: userMail,
        subject: 'Gợi ý việc làm cho bạn',
        html: mailTemplate
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        }
    });
}

let getTemplateMail = async (infoUser) => {
    try {
        const timeStampOfMonthAgo = 2592000000
        let listpost = await db.Post.findAll({
            limit: 5,
            where: {
                timePost: {
                    [Op.gte] : new Date().getTime() - timeStampOfMonthAgo,
                },
                statusCode: 'PS1',
            },
            include: [
                {
                    model: db.DetailPost, as: 'postDetailData', 
                    attributes: {
                        exclude: ['statusCode']
                    },
                    include: [
                        { model: db.Allcode, as: 'jobTypePostData', attributes: ['value', 'code'] },
                        { model: db.Allcode, as: 'workTypePostData', attributes: ['value', 'code'] },
                        { model: db.Allcode, as: 'salaryTypePostData', attributes: ['value', 'code'] },
                        { model: db.Allcode, as: 'jobLevelPostData', attributes: ['value', 'code'] },
                        { model: db.Allcode, as: 'genderPostData', attributes: ['value', 'code'] },
                        { model: db.Allcode, as: 'provincePostData', attributes: ['value', 'code'] },
                        { model: db.Allcode, as: 'expTypePostData', attributes: ['value', 'code'] }
                    ],
                },
            ],
            order: db.sequelize.literal('rand()'),
            raw: true,
            nest: true,
        })
        if (listpost && listpost.length > 0) {
            for (let post of listpost) {
                let user = await db.User.findOne({
                    where: { id: post.userId },
                    attributes: {
                        exclude: ['userId']
                    }
                })
                let company = await db.Company.findOne({
                    where: { id: user.companyId }
                })
                post.companyData = company
            }
            return getStringMailTemplate(listpost, infoUser)
        }
        else {
            return 0
        }


    } catch (error) {
        console.log(error)
        return 0
    }
}

const sendJobMail = () => {
    schedule.scheduleJob(rule, async function () {
        console.log('Bắt đầu chạy schedule job lúc:', new Date().toLocaleString())
        try {
            let listUserGetMail = await db.UserSetting.findAll({
                where: {
                    isTakeMail: 1
                },
                include: [
                    {
                        model: db.User, as: 'userSettingData',
                        attributes: ['id', 'firstName', 'lastName', 'image', 'email']
                    }
                ],
                raw: true,
                nest: true
            })
            console.log('Số user nhận mail:', listUserGetMail.length)
            for (let user of listUserGetMail) {
                let mailTemplate = await getTemplateMail(user)
                if (mailTemplate !== 0) {
                    sendmail(mailTemplate, user.userSettingData.email)
                }
            }
        } catch (error) {
            console.log(error)
        }
        console.log('đã gửi')
    });

}

const updateFreeViewCv = () => {
    schedule.scheduleJob(rule, async function () {
        try {
            await db.Company.update(
                {
                    allowCvFree: 5
                },
                {
                    where: {
                        id: {
                            [Op.ne]: null
                        }
                    },
                    silent: true
                },
            )
        }
        catch (err) {
            console.log(err)
        }
    });
}


module.exports = {
    sendJobMail,
    updateFreeViewCv
}