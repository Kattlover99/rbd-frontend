export default (data: { firstName: string; emailAddress: string }) => {
  return `
   <meta itemprop="name" content="Shawn you've received a new lead" />
<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
    <tr>
        <td align="center" valign="top" bgcolor="#ffffff" style="background-color: #ffffff">
            <br />
            <!-- 600px container (white background) -->
            <img class="logo" width="140px" height="auto" src="https://retirementby.design/images/rbd-logo-black.png" alt="Retirement By Design" />

            <table border="0" width="600" cellpadding="0" cellspacing="0" class="container" style="width: 600px; max-width: 600px; border-radius: 3px">
                <tr>
                    <td class="container-padding header" align="left" style="
              padding-top: 40px;
              padding-bottom: 40px;
              padding-left: 40px;
              padding-right: 40px;
            ">
                        <div class="header-text" style="text-align: center">
                            <p mc:edit="subject" style="
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 24px;
                  line-height: 28px;
                  color: #444444;
                  margin-top: 0px;
                  margin-bottom: 1.25em;
                ">
                               Shawn, you've received a new book download
                            </p>
                            <p mc:edit="tagline" style="
                  font-family: Helvetica, Arial, sans-serif;
                  font-size: 18px;
                  line-height: 20px;
                  font-weight: 500;
                  color: #888888;
                  margin-top: 8px;
                  margin-bottom: 0px;
                ">
                                Book download from
                                <span style="color: #000; font-weight: bold">${
                                  data.firstName
                                }</span>
   
                            </p>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="container-padding content" align="left" style="
              padding-left: 40px;
              padding-right: 40px;
              padding-top: 40px;
              padding-bottom: 40px;
              background-color: #ffffff;
            ">
                        <div mc:edit="body" class="body-text" style="
                font-family: Helvetica, Arial, sans-serif;
                font-size: 14px;
                line-height: 20px;
                text-align: left;
                color: #333333;
              ">
                            <table style="width: 100%; cell-padding: 0; cell-spacing: 0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <p style="
                          font-size: 18px;
                          font-weight: bold;
                          margin-bottom: 12px;
                        ">
                                                Contact Information
                                            </p>
                                        </td>
                                    </tr>

                                    <tr style="border-bottom: 1px solid #ccc">
                                        <td style="border-bottom: 1px solid rgb(233, 233, 233)">
                                            <p style="font-size: 16px; color: #999; margin-bottom: 5px">
                                                Name
                                            </p>
                                        </td>
                                        <td style="border-bottom: 1px solid rgb(233, 233, 233)">
                                            <p style="font-size: 16px; margin-bottom: 5px">
                                                ${`${data.firstName}`}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid #ccc">
                                        <td style="border-bottom: 1px solid rgb(233, 233, 233)">
                                            <p style="font-size: 16px; color: #999; margin-bottom: 5px">
                                                Email
                                            </p>
                                        </td>
                                        <td style="border-bottom: 1px solid rgb(233, 233, 233)">
                                            <p style="font-size: 16px; margin-bottom: 5px">
                                                ${data.emailAddress}
                                            </p>
                                        </td>
                                    </tr>


                              
                                </tbody>
                            </table>

                            <table style="table-layout: fixed; width: 100%"></table>

                            <table style="table-layout: fixed; width: 100%">
                                <tbody></tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
   `;
};
