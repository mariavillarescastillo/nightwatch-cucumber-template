const loginCmds = {
    waitForPageLoaded: function(){
        return this
            .waitForElementVisible('body', this.api.globals.timeouts.medium);
    },
    waitForLoginPage: function(){
        return this
            .click('@loginButton');
    },
    waitForEmailIntroduction: function(){
        return this
            .setValue('@email', this.api.globals.accounts.unregisteredUser)
            .click('@continueButton');
    },
    waitForErrorMessage: function(){
        return this
        .waitForElementVisible('@errorMessage', this.api.globals.timeouts.short);
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
        errorMessage: {
            selector: '//h4[contains(text(),"Ha surgido un problema")]',
            locateStrategy: 'xpath',
        },
    },
};
