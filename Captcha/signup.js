const puppeteer = require('puppeteer');

async function signup(page, data){
    await page.type("#i0116", data["email"]);
    await page.type("#i0118", data["password"]);
    if(await page.$('#idSIButton9', {timeout: 3000})){
        await page.click("#idSIButton9");
    };
    await page.waitForSelector('#balanceToolTipDiv > p > mee-rewards-counter-animation > span');
    return true;
};

module.exports = { signup };