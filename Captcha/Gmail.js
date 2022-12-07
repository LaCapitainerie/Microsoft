const puppeteer = require('puppeteer');

async function makeMail(browser){

    console.log('making a new mail..')

    const pageGMAIL = await browser.newPage();
    await pageGMAIL.goto('https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp');

    await pageGMAIL.waitForSelector('#firstName');
    await pageGMAIL.type('#firstName', 'prenomtest');
    await pageGMAIL.type('#lastName', 'nomtest');
    let emailr = (Math.random() + 1).toString(36).substring(2);
    await pageGMAIL.type('#username', emailr);
    await pageGMAIL.type('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', 'SuperStrongP@ssw0rd');
    await pageGMAIL.type('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input', 'SuperStrongP@ssw0rd');
    await pageGMAIL.click('#accountDetailsNext > div > button > span');

    await pageGMAIL.waitForSelector('#phoneNumberId');
    await pageGMAIL.type('#phoneNumberId', '0623000147');
    await pageGMAIL.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.qhFLie > div > div > button');

    await pageGMAIL.waitForSelector('#day');
    await pageGMAIL.evaluate( () => document.getElementById(".VfPpkd-fmcmS-wGMbrd").value = "")
    
    await pageGMAIL.type('#day', '1');
    await pageGMAIL.select("select#month", "1");
    await pageGMAIL.type('#year', '2000');
    await pageGMAIL.select("select#gender", "1");
    
    await pageGMAIL.waitForSelector('#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div > div > div.ci67pc > div > span > div:nth-child(1) > div > div.enBDyd > div');
    await pageGMAIL.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.WEQkZc > div > form > span > section > div > div > div > div > div.ci67pc > div > span > div:nth-child(1) > div > div.enBDyd > div');
    await pageGMAIL.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div > div > div > button');

    await pageGMAIL.waitForSelector('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3.F8PBrb > div > div > div:nth-child(2) > div > div > button');
    await pageGMAIL.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3.F8PBrb > div > div > div:nth-child(2) > div > div > button');
    
    await pageGMAIL.waitForSelector('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.qhFLie > div > div > button');
    await pageGMAIL.click('#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div.qhFLie > div > div > button');

    await pageGMAIL.waitForSelector('#\:3k\.contentEl > div > div.aiW.aiK > div:nth-child(2) > label > input');
    await pageGMAIL.click('#\:3k\.contentEl > div > div.aiW.aiK > div:nth-child(2) > label > input');

    await pageGMAIL.waitForSelector('#\:3k\.contentEl > div > div.aiW.aiM > div:nth-child(2) > label > input');
    await pageGMAIL.click('#\:3k\.contentEl > div > div.aiW.aiM > div:nth-child(2) > label > input');
    
    return {"email": emailr, "password": "SuperStrongP@ssw0rd"};
};

module.exports = { makeMail };