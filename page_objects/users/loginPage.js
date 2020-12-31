const loginCmds = {
    waitForPageLoaded: function(){
        return this
            .waitForElementVisible('body', this.api.globals.timeouts.medium);
    },
    waitForLoginPage: function(){
        return this
            .click('@loginButton');
    },
    waitForEmailIntroduction: function(userEmail = this.api.globals.accounts.unregisteredUser){
        return this
            .setValue('@email', `${userEmail}`)
            .click('@continueButton');
    },
    waitForPasswordInput: function(){
        return this
        .waitForElementVisible('@passwordInput', this.api.globals.timeouts.short);
    },
    waitForPasswordRequired: function(){
        return this
        .click('@signInButton')
        .waitForElementVisible('@passwordAlertMessage', this.api.globals.timeouts.short);
    },
    waitForErrorMessage: function(){
        return this
        .waitForElementVisible('@userErrorMessage', this.api.globals.timeouts.short);
    },
};

module.exports = {
    url() {
        return `${this.api.globals.urls.home}`;
    },
    commands: [loginCmds],
    elements: {
        loginButton: {
            selector: '#nav-link-accountList-nav-line-1',
        },
        email: {
            selector: '#ap_email',
        },
        continueButton: {
            selector: '#continue',
        },
        passwordInput: {
            selector: '#ap_password',
        },
        signInButton: {
            selector: '#signInSubmit',
        },
        passwordAlertMessage: {
            selector: '//div[contains(text(),"Introduce tu contraseña")]',
            locateStrategy: 'xpath',
        },
        userErrorMessage: {
            selector: '//h4[contains(text(),"Ha surgido un problema")]',
            locateStrategy: 'xpath',
        },
    },
};
