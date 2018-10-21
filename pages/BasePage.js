/* global browser */

var BasePage = function () {

    this.navigationToUrl = (url) => {
        return browser.get(url);
    };

    this.getPageTitle = () => {
        return browser.getTitle();
    };
};
module.exports = new BasePage();