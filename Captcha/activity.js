const puppeteer = require('puppeteer');

const chromeOptions = {
    headless:false,
    defaultViewport: null,
    slowMo: 20,
    args: ['--profile-directory="Profile 1"'],
    userDataDir:"C:/Users/hugoa/AppData/Local/Google/Chrome/User Data"  
  };

async function activity(browser, data){

    const pageCards = await browser.newPage();
    await pageCards.goto('https://rewards.microsoft.com');

    if (await pageCards.$("#raf-signin-link-id") !== null) {
        console.log('found');
        await pageCards.click('#raf-signin-link-id');
        await signup(pageCards, data);
    };



    const number_cards = await pageCards.evaluate(() => {
        return (Array.from(document.querySelectorAll('#more-activities > div > mee-card '))).length + 1
    });

    for(var i = 2;i<number_cards;++i){
        await pageCards.click(`#more-activities > div > mee-card:nth-child(${i})`);
        var actual_page = (await browser.pages()).reverse()[0];
        console.log(JSON.stringify(actual_page));

        if (actual_page.$("#rqStartQuiz") !== null) {
            console.log('Starting quiz..');
            await actual_page.waitForSelector('#rqStartQuiz');
            await actual_page.click('#rqStartQuiz');

            await actual_page.waitForSelector('#rqAnswerOption0');

            var réponses = await actual_page.evaluate(() => {
                return (Array.from(document.querySelectorAll('#rqAnswerOption0 > div.b_hide > div.cico.bt_clkImg > img[alt~="Image de réponse correcte"]'))).length;
            });

            for(var j = 0; j < réponses;++j){
                await actual_page.click(`#rqAnswerOption${j}`);
            };
        };
    };
    

    return true;

};

module.exports = { activity };