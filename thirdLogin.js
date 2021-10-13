$.fn.thirdLogin = function(options) {
    // var defaults = {
    //     'currentPage': 1,
    //     'totalPage': 5,
    //     'pageSize': 10,
    //     'url': ""
    // };
    // var settings = $.extend(defaults, options);

    let html = '<div class="loginContainer">\
    <div class="loginHeader">登录 </div>\
    <div class="loginForm">\
        <div class="loginFormInner">\
            <div class="" data-login-sdk="baseLogin">\
                <div class="loginTab">\
                    <a href="javascript:;" class="selected">密码登录</a>\
                    <a href="javascript:;" data-baselogin="smsLogin">短信登录</a>\
                </div>\
                <div class="loginInfo">\
                    <div class="loginInfoItem">\
                        <div class="dn infoError" data-baselogin="nameErr">手机号错误</div>\
                        <div class="loginAccount"><input data-baselogin="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                    </div>\
                    <div class="loginInfoItem">\
                        <div class="loginAccount"><input data-baselogin="pwdInput" class="inputBox" type="password" placeholder="请输入密码" maxlength="11"></div>\
                    </div>\
                </div>\
                <div class="loginBtn">\
                    <div class="btn disabled" data-smsloginreg="loginBtn">登录 </div>\
                </div>\
            </div>\
            <div class="dn" data-login-sdk="smsLogin">\
                <div class="loginTab">\
                    <a href="javascript:;" data-smslogin="baseLogin">密码登录</a>\
                    <a href="javascript:;" class="selected">短信登录</a>\
                </div>\
                <div class="loginInfo">\
                    <div class="loginInfoItem">\
                        <div class="loginAccount"><input class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                    </div>\
                    <div class="loginInfoItem">\
                        <div class="loginAccount"><input class="inputBox" type="password" placeholder="请输入验证码" maxlength="11"></div>\
                    </div>\
                </div>\
                <div class="loginBtn">\
                    <div class="btn disabled" data-smsloginreg="loginBtn">登录 </div>\
                </div>\
            </div>\
            <div class="dn" data-login-sdk="wechatLogin">wechatLogin</div>\
        </div>\
    </div>\
</div>';
    // html += '<div class="loginContainer">'
    // html += '   <div class="loginHeader">登录';
    // html += '   </div>';

    // html += '   <div class="loginForm">';
    // html += '       <div class="loginFormInner">';

    // html += '           <div class="" data-login-sdk="baseLogin">';
    // html += '               <div class="loginTab">';
    // html += '                   <a href="javascript:;" class="selected">密码登录</a>';
    // html += '                   <a href="javascript:;" data-baselogin="smsLogin">短信登录</a>';
    // html += '               </div>密码登录';
    // html += '               <div class="">';
    // html += '                   <div>';
    // html += '               </div>';
    // html += '           </div>';

    // html += '           <div class="dn" data-login-sdk="smsLogin">';
    // html += '               <div class="loginTab">';
    // html += '                   <a href="javascript:;" data-smslogin="baseLogin">密码登录</a>';
    // html += '                   <a href="javascript:;" class="selected">短信登录</a>';
    // html += '               </div>短信登录';
    // html += '           </div>';

    // html += '           <div class="dn" data-login-sdk="wechatLogin">wechatLogin</div>';

    // html += '       </div>';
    // html += '   </div>';

    // html += '';
    // html += '</div>'
    this.html(html);

    let that = this;
    // 切换登录方式
    this.find('[data-baselogin="smsLogin"]')
        .on("click", function() {
            that.find('div[data-login-sdk="smsLogin"]').removeClass('dn').siblings().addClass('dn')
        });
    this.find('[data-smslogin="baseLogin"]')
        .on("click", function() {
            that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
        });
    // 验证手机号
    this.find('[data-baselogin="nameInput"]')
        .focus(function() {
            that.find('[data-baselogin="nameErr"]').addClass('dn')
        })
        .blur(function() {
            let account = that.find('[data-baselogin="nameInput"]').val()
            if (account.length != 11) {
                that.find('[data-baselogin="nameErr"]').removeClass('dn')
            }
        })

    //注册事件
    this.find(".pagination")
        .on("click", function(e) {
            window.location.href = settings.url + '?pageSize=10&currentPage=' + $(e.target).attr("value");
        })
        .on("mouseenter", function() {
            $(this).css("background-color", "#e2ecff");
        })
        .on("mouseleave", function() {
            $(this).css("background-color", "white");
        });
    return this;
};