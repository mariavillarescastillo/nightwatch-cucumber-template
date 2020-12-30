const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');
const TXT = require('../../constants/pageTexts');
const LOGIN_PAGE = client.page.users.loginPage();

When(/^an unregistered user tries to log in$/, () => {
    return LOGIN_PAGE
        .waitForPageLoaded()
        .navigate()
        .waitForLoginPage()
        .assert.title(TXT.LOGIN_PAGE_TITLE)
        .waitForEmailIntroduction();
});

Then(/^an error message is shown$/, () => {
    return LOGIN_PAGE
        .waitForPageLoaded()
        .waitForErrorMessage();
});
/*
Then(/^the password is required$/, () => {
    // TO DO
});
*/