const getHead = () => {
  return `<!doctype html>
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
    <title>
    </title>
    <!--[if !mso]><!-->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--<![endif]-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
  
      body {
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        border-collapse: collapse;
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
        -ms-interpolation-mode: bicubic;
      }
  
      p {
        display: block;
        margin: 13px 0;
      }
    </style>
    <!--[if mso]>
          <noscript>
          <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
          </xml>
          </noscript>
          <![endif]-->
    <!--[if lte mso 11]>
          <style type="text/css">
            .mj-outlook-group-fix { width:100% !important; }
          </style>
          <![endif]-->
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
    </style>
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (min-width:480px) {
        .mj-column-per-100 {
          width: 100% !important;
          max-width: 100%;
        }
  
        .mj-column-px-40 {
          width: 40px !important;
          max-width: 40px;
        }
  
        .mj-column-per-80 {
          width: 80% !important;
          max-width: 80%;
        }
  
        .mj-column-per-20 {
          width: 20% !important;
          max-width: 20%;
        }
      }
    </style>
    <style media="screen and (min-width:480px)">
      .moz-text-html .mj-column-per-100 {
        width: 100% !important;
        max-width: 100%;
      }
  
      .moz-text-html .mj-column-px-40 {
        width: 40px !important;
        max-width: 40px;
      }
  
      .moz-text-html .mj-column-per-80 {
        width: 80% !important;
        max-width: 80%;
      }
  
      .moz-text-html .mj-column-per-20 {
        width: 20% !important;
        max-width: 20%;
      }
    </style>
    <style type="text/css">
      @media only screen and (max-width:480px) {
        table.mj-full-width-mobile {
          width: 100% !important;
        }
  
        td.mj-full-width-mobile {
          width: auto !important;
        }
      }
    </style>
  </head>
  `
}

const getHeadMailTemplate = (userInfo) => {
  return `
  <body style="word-spacing:normal;">
    <div style="">
      <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:600px;" width="600" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
      <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:600px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:25px 25px;text-align:center;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
                <div style="margin:0px auto;max-width:550px;">
                  <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                    <tbody>
                      <tr>
                        <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
                          <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:550px;" ><![endif]-->
                          <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                            <!--[if mso | IE]><table border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td style="vertical-align:top;width:550px;" ><![endif]-->
                            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:0px 0px;word-break:break-word;">
                                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                          <tr>
                                            <td style="width:100px;">
                                              <img height="auto" src="https://res.cloudinary.com/thph27/image/upload/v1735269592/rnrrhs4qvuw0glje4lnz.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="100" />
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:20px 0px 10px;word-break:break-word;">
                                      <div style="font-family:SF Pro Display, Arial, sans-serif;font-size:24px;font-weight:500;line-height:1.4;text-align:center;color:#000000;">
                                        <p style="margin: 0;">Xin chào ${userInfo.userSettingData.firstName} ${userInfo.userSettingData.lastName}!</p>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" style="font-size:0px;padding:10px 0px 20px;word-break:break-word;">
                                      <div style="font-family:SF Pro Display, Arial, sans-serif;font-size:20px;font-weight:700;line-height:1.4;text-align:center;color:#000000;">
                                        <p style="margin: 0;"> Danh sách công việc hàng đầu khác dành cho bạn </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <!--[if mso | IE]></td></tr></table><![endif]-->
                          </div>
                          <!--[if mso | IE]></td></tr></table><![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>`
}

const getPostTemplate = (postInfo) => {
  return `<!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550" bgcolor="#ffffff" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <a href=${process.env.URL_REACT+`/detail-job/`+postInfo.id} style="text-decoration: none; color: inherit;"/>
  <div style="background:#ffffff;background-color:#ffffff;margin:0px auto;max-width:550px; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 15px; padding: 15px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:10px 20px;text-align:center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:102px;" ><![endif]-->
            <div class="mj-column-per-20 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                <tbody>
                  <tr>
                    <td align="left" style="font-size:0px;padding:35px 0px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                        <tbody>
                          <tr>
                            <td style="width:102px;">
                              <img height="60" src=${postInfo.companyData.thumbnail} style="border:0;display:block;outline:none;text-decoration:none;height:60px;width:100%;font-size:13px; object-fit: contain;" width="102" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:408px;" ><![endif]-->
            <div class="mj-column-per-80 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                <tbody>
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Arial, sans-serif;font-size:16px;font-style:normal;line-height:1.5;text-align:left;color:#000000;">
                        <div>
                          <h3 style="color: #2557a7; margin: 0 0 10px 0; font-size: 18px;">${postInfo.postDetailData.name}</h3>
                          <h4 style="color: #505050; margin: 0 0 15px 0; font-size: 16px;">${postInfo.companyData.name}</h4>
                          <div style="margin-bottom: 8px; color: #666;">
                            <strong>Địa điểm:</strong> ${postInfo.postDetailData.provincePostData.value}
                          </div>
                          <div style="margin-bottom: 8px; color: #666;">
                            <strong>Hình thức làm việc:</strong> ${postInfo.postDetailData.workTypePostData.value}
                          </div>
                          <div style="margin-bottom: 8px; color: #666;">
                            <strong>Mức lương:</strong> ${postInfo.postDetailData.salaryTypePostData.value}
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  </div></a>`
}

const getTailMailTemplate = () => {
  return ` <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div style="margin:0px auto;max-width:550px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:550px;" ><![endif]-->
            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                <tbody>
                  <tr>
                    <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;line-height:100%;">
                        <tr>
                          <td align="center" bgcolor="red" role="presentation" style="border:none;border-radius:8px;cursor:pointer;mso-padding-alt:10px 25px;background:red;" valign="middle">
                            <a href=${process.env.URL_REACT+'/job'} 
                               style="display:inline-block;
                                      background:red;
                                      color:white;
                                      font-family:SF Pro Display, Arial, sans-serif;
                                      font-size:16px;
                                      font-weight:600;
                                      line-height:120%;
                                      margin:0;
                                      text-decoration:none;
                                      text-transform:none;
                                      padding:15px 30px;
                                      mso-padding-alt:0px;
                                      border-radius:8px;
                                      transition: all 0.3s ease;
                                      box-shadow: 0 2px 4px rgba(0,0,0,0.2);"
                               onmouseover="this.style.background='#cc0000';this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 8px rgba(0,0,0,0.3)'"
                               onmouseout="this.style.background='red';this.style.transform='translateY(0)';this.style.boxShadow='0 2px 4px rgba(0,0,0,0.2)'"
                               target="_blank"> 
                               Xem thêm công việc 
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--[if mso | IE]></td></tr></table></td></tr><tr><td class="" width="600px" ><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:550px;" width="550" bgcolor="#f4f4f4" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
  <div style="background:#f4f4f4;background-color:#f4f4f4;margin:0px auto;max-width:550px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f4f4;background-color:#f4f4f4;width:100%;">
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;">
            <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:550px;" ><![endif]-->
            <div class="mj-column-per-100 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                <tbody>
                  <tr>
                    <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                      <div style="font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:13px;line-height:1;text-align:left;color:#000000;">
                        <div style="text-align: center">
                          <h3>Quản lý nhận thông báo từ <a href=${process.env.URL_REACT +'/login'} style="color: #2557a7; text-decoration: none;">Job Finder</a></h3>
                          <div style="margin-top: 10px , margin-bottom: 20px">
                            <img src="https://res.cloudinary.com/thph27/image/upload/v1735269592/rnrrhs4qvuw0glje4lnz.png"></img>
                          </div>
                          <div style="margin-top: 30px">
                            <div style="
                            margin-top: 30px;
                            text-align: center;
                          ">
                              <span style="
                              width: 100%;
                              display: inline-block;
                            ">Job Finder © 2024</span>
                              <span style="margin-top: 10px">Tìm kiếm việc làm phù hợp và thực hiện những điều bạn yêu thích.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--[if mso | IE]></td></tr></table></td></tr></table><![endif]-->
</td>
</tr>
</tbody>
</table>
</div>
<!--[if mso | IE]></td></tr></table><![endif]-->
</div>
</body>

</html>`
}

const getStringMailTemplate = (listPostInfo,userInfo) => {
  let allPostTemplate = ''
  listPostInfo.forEach(item => {
    allPostTemplate += getPostTemplate(item)
  })
  return getHead() + getHeadMailTemplate(userInfo) + allPostTemplate + getTailMailTemplate()
}

module.exports = getStringMailTemplate
