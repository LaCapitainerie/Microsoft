const puppeteer = require('puppeteer');
const { signup } = require('./signup');
const { activity } = require('./activity');


async function reward(browser, data) {
    console.log('Parsing all website..')
    const pageRewards = await browser.newPage();
    await pageRewards.goto('https://rewards.microsoft.com');

    if (await pageRewards.$("#raf-signin-link-id") !== null) {
        console.log('found');
        await pageRewards.click('#raf-signin-link-id');
        signup(pageRewards, data)
    };

    /*
    var letter = 'abcdefghijklmnopqrstuvwxyz';
    for(i=0;i<10;i++){
        var page = await browser.newPage();
        await page.goto('https://www.bing.com/news/search?q='+letter[i]);
        await page.waitForSelector('#rh_meter');
        page.close()
    };

    await pageRewards.click("#daily-sets > mee-card-group:nth-child(7) > div > mee-card.ng-scope.ng-isolate-scope.c-card.f-double > div > card-content");
    await pageRewards.click("#daily-sets > mee-card-group:nth-child(7) > div > mee-card:nth-child(2) > div > card-content");
    */
    
    await pageRewards.click("#daily-sets > mee-card-group:nth-child(7) > div > mee-card:nth-child(3) > div > card-content ");
    var lastpage = (await browser.pages()).reverse()[0];
    var url = await lastpage.evaluate(() => window.location.href)
    var pageSelect = await browser.newPage();
    pageSelect.goto(url)
    
    //await pageSelect.waitForSelector("#btoption0");
    //await pageSelect.click("#btoption0")
    
    return true;
};

module.exports = { reward };