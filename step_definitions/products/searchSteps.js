const { client } = require('nightwatch-api');
const { When, Then } = require('cucumber');
const SEARCH_PAGE = client.page.products.searchPage();

When(/^the user searches for a (.*?)$/, (searchText) => {
    return SEARCH_PAGE
        .waitForPageLoaded()
        .navigate()
        .waitForProductSearch(searchText);
});

Then(/^the first product of the list is selectable$/, () => {
    return SEARCH_PAGE
        .waitForPageLoaded()
        .waitForFirstProductSelection();
});