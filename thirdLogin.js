/**
 * 获取用户名   $.getNameInputValue()
 * 获取密码     $.getPwdInputValue()
 * 获取验证码   $.getCodeInputValue()
 */
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
            onload: function() {},
            sendMsg: function(argu) {},
            register: function() {},
            loginByPhone: function() {},
            loginByPwd: function() {},
            changePwd: function() {},
        };
        var settings = $.extend(defaults, options);

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
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-baselogin="codeInput" class="inputBox" type="text" placeholder="验证码"></div>\
                            <div class="imgCode" data-baselogin="getCode"><img id="imgSignCode" src=""></div>\
                        </div>\
                        <div class="loginInfoOthers">\
                            <div class="register"><a data-baselogin="reg">激活账号</a></div>\
                            <div class="forgotPwd"><a data-baselogin="forgotPwd">忘记密码</a></div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn" data-baselogin="loginBtn">登录</div>\
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
                            <div class="dn infoError" data-smslogin="nameErr">手机号错误</div>\
                            <div class="loginAccount"><input data-smslogin="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-smslogin="codeInput" class="inputBox" type="text" placeholder="请输入验证码" maxlength="11"></div>\
                            <div class="verificationCode" data-smslogin="getCode">获取验证码</div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn" data-smslogin="loginBtn">登录</div>\
                    </div>\
                </div>\
                <!-- 二维码登录 -->\
                <div class="dn" data-login-sdk="wechatLogin">\
                    <div class="imgContent" data-wechatlogin="baseLogin"><img src="baseLogin.png"></div>\
                    <div class="loginTitle">\
                        <div><span>微信扫码登录</span></div>\
                    </div>\
                    <div class="loginInfo">\
                        <div class="wxQRCode"><img id="imgWxCode" src=""/></div>\
                    </div>\
                </div>\
                <!-- 注册 -->\
                <div class="dn" data-login-sdk="register">\
                    <div class="loginTitle">\
                        <div><i data-register="back">返回</i></div>\
                        <div><span>激活账号</span></div>\
                    </div>\
                    <div class="loginInfo">\
                        <div class="loginInfoItem">\
                            <div class="dn infoError" data-register="nameErr">手机号错误</div>\
                            <div class="loginAccount"><input data-register="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-register="codeInput" class="inputBox" type="text" placeholder="请输入验证码" maxlength="11"></div>\
                            <div class="verificationCode" data-register="getCode">获取验证码</div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn" data-register="registerBtn">激活</div>\
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
                            <div class="dn infoError" data-changepwd="nameErr">手机号错误</div>\
                            <div class="loginAccount"><input data-changepwd="nameInput" class="inputBox" type="text" placeholder="请输入手机号" maxlength="11"></div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-changepwd="codeInput" class="inputBox" type="text" placeholder="请输入验证码" maxlength="11"></div>\
                            <div class="verificationCode" data-changepwd="getCode">获取验证码</div>\
                        </div>\
                        <div class="loginInfoItem">\
                            <div class="loginAccount"><input data-changepwd="pwdInput" class="inputBox" type="password" placeholder="请输入新的密码" maxlength="11"></div>\
                        </div>\
                    </div>\
                    <div class="loginBtn">\
                        <div class="btn" data-changepwd="changeBtn">确认修改</div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>';
        this.html(html);
        settings.onload();

        let that = this;
        init(that);
        // 切换登录方式
        // 短信
        this.find('[data-baselogin="smsLogin"]')
            .on("click", function() {
                loginSdk = 'smsLogin'.toLowerCase()
                that.find('div[data-login-sdk="smsLogin"]').removeClass('dn').siblings().addClass('dn')
                init(that);
            });
        // 密码登录
        this.find('[data-smslogin="baseLogin"]')
            .on("click", function() {
                loginSdk = 'baseLogin'.toLowerCase().toString()
                that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
                init(that);
            });
        // 注册
        this.find('[data-baselogin="reg"]')
            .on("click", function() {
                loginSdk = 'register'.toLowerCase()
                that.find('div[data-login-sdk="register"]').removeClass('dn').siblings().addClass('dn')
                init(that);
            });
        // 修改密码
        this.find('[data-baselogin="forgotPwd"]')
            .on("click", function() {
                loginSdk = 'changePwd'.toLowerCase()
                that.find('div[data-login-sdk="changePwd"]').removeClass('dn').siblings().addClass('dn')
                init(that);
            });
        // WX
        this.find('[data-baselogin="wechatLogin"],[data-smslogin="wechatLogin"]')
            .on("click", function() {
                loginSdk = ''.toLowerCase()
                that.find('div[data-login-sdk="wechatLogin"]').removeClass('dn').siblings().addClass('dn')
            });
        this.find('[data-wechatlogin="baseLogin"]')
            .on("click", function() {
                loginSdk = 'baseLogin'.toLowerCase()
                that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
                init(that);
            });
        // 返回密码登录
        this.find('[data-register="back"],[data-changePwd="back"]')
            .on("click", function() {
                loginSdk = 'baseLogin'.toLowerCase()
                that.find('div[data-login-sdk="baseLogin"]').removeClass('dn').siblings().addClass('dn')
                init(that);
            });

        // 发送验证码
        this.find('[data-smslogin="getCode"],[data-register="getCode"],[data-changepwd="getCode"]')
            .one("click", function() {
                var argu = arguments.callee;
                settings.sendMsg.call(this, argu)
            });
        // 注册
        this.find('[data-register="registerBtn"]')
            .on("click", function() {
                settings.register()
            });
        // 登录
        this.find('[data-smslogin="loginBtn"]')
            .on("click", function() {
                settings.loginByPhone()
            });
        this.find('[data-baselogin="loginBtn"]')
            .on("click", function() {
                settings.loginByPwd()
            });
        // 修改密码
        this.find('[data-changepwd="changeBtn"]')
            .on("click", function() {
                settings.changePwd()
            });

        this.find('#imgSignCode,#imgWxCode')
            .on("click", function() {
                settings.onload()
            });

        return this;
    };

    function verifyPhone(that) {
        that.find(`[data-${loginSdk}="nameInput"]`)
            .focus(function() {
                that.find(`[data-${loginSdk}="nameErr"]`).addClass('dn')
            })
            .blur(function() {
                let account = that.find(`[data-${loginSdk}="nameInput"]`).val()
                if (account.length != 11) {
                    that.find(`[data-${loginSdk}="nameErr"]`).removeClass('dn')
                }
            })
    }

    function init(that) {
        verifyPhone(that)
    }
})(jQuery);