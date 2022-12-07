const puppeteer = require('puppeteer');

const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const {authenticate} = require('@google-cloud/local-auth');
const {google} = require('googleapis');


const { captcha } = require('./Captcha');
const { reward } = require('./rewards');
const { makeMail } = require('./Gmail');
const { activity } = require('./activity');

const chromeOptions = {
  headless:false,
  defaultViewport: null,
  slowMo: 20,
  args: ['--profile-directory="Profile 1"'],
  userDataDir:"C:/Users/hugoa/AppData/Local/Google/Chrome/User Data"  
};
(async function main() {
  //await new Promise(r => setTimeout(r, 2000));

  

  console.log('Parsing a new mail..')
  /*
    Parsing d'un mail sur tempmail
  */
  const browser = await puppeteer.launch(chromeOptions);
  //data = await makeMail(browser);
  data = {"email": "hantreassian@gmail.com", "password": "SuperStrongP@ssw0rd"};
  await reward(browser, data);
  
  //await activity(browser, data);


  /*
  const pageMail = await browser.newPage();
  await pageMail.goto('https://temp-mail.org/fr/', {waitUntil: 'load', timeout: 60000});
  // attente que le mail charge
  await pageMail.waitForSelector('.emailbox-input.opentip', {waitUntil: 'load', timeout: 60000})
  let element = await pageMail.$('.emailbox-input.opentip')
  var mail = await element.evaluate(el => el.value);
  do{
    mail = await element.evaluate(el => el.value);
  }while(mail.includes('Chargement'));
  console.log(mail)
  */
  
  // Renseignement des données du compte
  
  /*
  // Pseudo
  await pageSignup.waitForSelector('#MemberName');
  await pageSignup.type('#MemberName', mail);
  await pageSignup.click('input[id=iSignupAction]');
  // Mot de passe
  await pageSignup.waitForSelector('#PasswordInput');
  await pageSignup.type('#PasswordInput', 'SuperStrongP@ssw0rd');
  await pageSignup.click('input[id=iSignupAction]');
  // Prénom et Nom
  await pageSignup.waitForSelector('#FirstName');
  await pageSignup.type('#FirstName', 'prenomtest');
  await pageSignup.type('#LastName', 'nomtest');
  await pageSignup.click('input[id=iSignupAction]');
  // Date de naissance
  await pageSignup.waitForSelector('#BirthDay');
  await pageSignup.select("select#BirthDay", "1");
  await pageSignup.select("select#BirthMonth", "1");
  await pageSignup.type('#BirthYear', '2000');
  await pageSignup.click('input[id=iSignupAction]');

  
  // Récuperation du code de sécurité
  
  await pageMail.waitForSelector("#tm-body > main > div:nth-child(1) > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-8 > div.tm-content > div > div.inboxWarpMain > div > div.inbox-dataList > ul > li:nth-child(2) > div.col-box.hidden-xs-sm > span > a");
  let mailhref = await pageMail.$('#tm-body > main > div:nth-child(1) > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-8 > div.tm-content > div > div.inboxWarpMain > div > div.inbox-dataList > ul > li:nth-child(2) > div.col-box.hidden-xs-sm > span > a');
  var href = await mailhref.evaluate(el => el.href);
  console.log(href);
  
  const pageMailcode = await browser.newPage();
  await pageMailcode.goto(href);

  
  await pageMail.waitForSelector("#tm-body > main > div:nth-child(1) > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-8 > div.tm-content > div > div.inboxWarpMain > div > div.inbox-data-content > div.inbox-data-content-intro > table > tbody > tr:nth-child(4) > td > span");
  let coderef = await pageMail.$("#tm-body > main > div:nth-child(1) > div > div.col-sm-12.col-md-12.col-lg-12.col-xl-8 > div.tm-content > div > div.inboxWarpMain > div > div.inbox-data-content > div.inbox-data-content-intro > table > tbody > tr:nth-child(4) > td > span");
  var code = await coderef.evaluate(el => el.textContent);
  


  await pageSignup.waitForSelector('#VerificationCode');
  await pageSignup.type('#VerificationCode', code);
  await pageSignup.click('#home_children_button');

  await pageSignup.waitForSelector('#idSIButton9');
  await pageSignup.click('#idSIButton9');

  await website(browser);
  */
  
})();