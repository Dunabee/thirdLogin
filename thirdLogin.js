(function($) {
    var loginSdk = 'baseLogin'.toLowerCase();

    $.extend({
        getNameInputValue: function() {
            return $(`input[data-${loginSdk}="nameInput"]`).val()
        },
        getPwdInputValue: function() {
            return $(`input[data-${loginSdk}="pwdInput"]`).val()
        },
        getCodeInputValue: function() {
            return $(`input[data-${loginSdk}="codeInput"]`).val()
        }
    });

    $.fn.thirdLogin = function(options) {
        var defaults = {
            sendMsg: function() {}
        };
        var settings = $.extend(defaults, options);
        settings.sendMsg()

        let html = '<div class="loginContainer">\
        <div class="loginHeader">登录 </div>\
        <div class="loginForm">\
            <div class="loginFormInner">\
                <!-- 密码登录 -->\
                <div class="" data-login-sdk="baseLogin">\
                    <div class="imgContent" data-smslogin="wechatLogin"><img src="wxLogin.png"></div>\
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
                        <div class="loginInfoOthers">\
                            <div class="register"><a data-baselogin="reg">激活账号</a></div>\
                            <div class="forgotPwd"><a data-baselogin="forgotPwd">忘记密码</a></div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn" data-smsloginreg="loginBtn">登录</div>\
                    </div>\
                </div>\
                <!-- 短信登录 -->\
                <div class="dn" data-login-sdk="smsLogin">\
                    <div class="imgContent" data-smslogin="wechatLogin"><img src="wxLogin.png"></div>\
                    <div class="loginTab">\
                        <a href="javascript:;" data-smslogin="baseLogin">密码登录</a>\
                        <a href="javascript:;" class="selected">短信登录</a>\
                    </div>\
                    <div class="loginInfo">\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-smslogin="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-smslogin="codeInput" class="inputBox" type="text" placeholder="请输入验证码" maxlength="11"></div>\
                            <div class="verificationCode">获取验证码</div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn" data-smsloginreg="loginBtn">登录</div>\
                    </div>\
                </div>\
                <!-- 二维码登录 -->\
                <div class="dn" data-login-sdk="wechatLogin">\
                    <div class="imgContent" data-wechatlogin="baseLogin"><img src="baseLogin.png"></div>\
                </div>\
                <!-- 注册 -->\
                <div class="dn" data-login-sdk="register">\
                    <div class="loginTitle">\
                        <div><i data-register="back">返回</i></div>\
                        <div><span>激活账号</span></div>\
                    </div>\
                    <div class="loginInfo">\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-register="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-register="codeInput" class="inputBox" type="text" placeholder="请输入验证码" maxlength="11"></div>\
                            <div class="verificationCode">获取验证码</div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn">激活</div>\
                    </div>\
                </div>\
                <!-- 忘记密码 -->\
                <div class="dn" data-login-sdk="changePwd">\
                    <div class="loginTitle">\
                        <div><i data-changePwd="back">返回</i></div>\
                        <div><span>修改密码</span></div>\
                    </div>\
                    <div class="loginInfo">\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-changepwd="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-changepwd="codeInput" class="inputBox" type="text" placeholder="请输入验证码" maxlength="11"></div>\
                            <div class="verificationCode">获取验证码</div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-changepwd="pwdInput" class="inputBox" type="password" placeholder="请输入新的密码" maxlength="11"></div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn">确认修改</div>\
                    </div>\
                </div>\
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
        // 短信
        this.find('[data-baselogin="smsLogin"]')
            .on("click", function() {
                loginSdk = 'smsLogin'.toLowerCase()
                that.find('div[data-login-sdk="smsLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        // 密码登录
        this.find('[data-smslogin="baseLogin"]')
            .on("click", function() {
                loginSdk = 'baseLogin'.toLowerCase()
                that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        // 注册
        this.find('[data-baselogin="reg"]')
            .on("click", function() {
                loginSdk = 'register'.toLowerCase()
                that.find('div[data-login-sdk="register"]').removeClass('dn').siblings().addClass('dn')
            });
        // 修改密码
        this.find('[data-baselogin="forgotPwd"]')
            .on("click", function() {
                loginSdk = 'forgotPwd'.toLowerCase()
                that.find('div[data-login-sdk="changePwd"]').removeClass('dn').siblings().addClass('dn')
            });
        // WX
        this.find('[data-baselogin="wechatLogin"]')
            .on("click", function() {
                loginSdk = ''.toLowerCase()
                that.find('div[data-login-sdk="wechatLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        this.find('[data-smslogin="wechatLogin"]')
            .on("click", function() {
                loginSdk = ''.toLowerCase()
                that.find('div[data-login-sdk="wechatLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        this.find('[data-wechatlogin="baseLogin"]')
            .on("click", function() {
                that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        // 返回密码登录
        this.find('[data-register="back"]')
            .on("click", function() {
                loginSdk = 'smsLogin'.toLowerCase()
                that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        // 返回密码登录
        this.find('[data-changePwd="back"]')
            .on("click", function() {
                loginSdk = 'smsLogin'.toLowerCase()
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

        this.find('[data-smsloginreg="loginBtn"]')
            .on("click", function() {
                console.log($.getNameInputValue())
                console.log($.getCodeInputValue())
                console.log($.getPwdInputValue())
            });
        return this;
    };
})(jQuery);



function changeType(that, clickItem, showItem) {
    that.find(`[${clickItem}]`)
        .on("click", function() {
            that.find(`div[${showItem}]`).removeClass('dn').siblings().addClass('dn')
        });
}