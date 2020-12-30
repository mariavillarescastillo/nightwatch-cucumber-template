const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');
const TXT = require('../../constants/pageTexts');
const LOGIN_PAGE = client.page.users.loginPage();

var userEmail;

Given(/^a registered user$/, () => {
    return userEmail=client.globals.accounts.registeredUser;
});

Given(/^an unregistered user$/, () => {
    return userEmail=client.globals.accounts.unregisteredUser;
});

When(/^the user tries to log in$/, () => {
    return LOGIN_PAGE
        .waitForPageLoaded()
        .navigate()
        .waitForLoginPage()
        .assert.title(TXT.LOGIN_PAGE_TITLE)
        .waitForEmailIntroduction(userEmail);
});

Then(/^the password is required$/, () => {
    return LOGIN_PAGE
        .waitForPageLoaded()
        .waitForPasswordInput()
        .waitForPasswordRequired();
});

Then(/^an error message is shown$/, () => {
    return LOGIN_PAGE
        .waitForPageLoaded()
        .waitForErrorMessage();
});
