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
    },
};
