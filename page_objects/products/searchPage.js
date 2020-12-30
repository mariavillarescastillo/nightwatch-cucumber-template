const searchCmds = {
    waitForPageLoaded: function(){
        return this
            .waitForElementVisible('body', this.api.globals.timeouts.medium);
    },
    waitForProductSearch: function(searchText){
        return this
            .setValue('@searchTextBox', searchText)
            .click('@searchButton');
    },
    waitForFirstProductSelection: function(){
        return this
            .click('@firstProductLink');
    },
};

module.exports = {
    url() {
        return `${this.api.globals.urls.home}`;
    },
    commands: [searchCmds],
    elements: {
        searchTextBox: {
            selector: '#twotabsearchtextbox',
        },
        searchButton: {
            selector: '#nav-search-submit-button',
        },
        firstProductLink: {
            selector: '(//a[@class="a-link-normal a-text-normal"])[1]',
            locateStrategy: 'xpath',
        },
    },
};
