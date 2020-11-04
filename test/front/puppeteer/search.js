

'use strict';

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://masterlab.ink');

    // Type into search box.
    await page.type('#user_login', 'master');
    await page.type('#user_password', '123456');

    // Wait for suggest overlay to appear and click "show all results".
    const submit_btn = '#login_submit_btn';
    await page.waitForSelector(submit_btn);
    await page.click(submit_btn);


    // extra-item-num
    const resultsSelectorSpan = '.extra-item-num';
    await page.waitForSelector(resultsSelectorSpan);
    // Extract the results from the page.
    const spans = await page.evaluate((resultsSelectorSpan) => {
        const anchors = Array.from(document.querySelectorAll(resultsSelectorSpan));
        return anchors.map((anchor) => {
            const title = anchor.textContent.split('|')[0].trim();
            return `${title} - ${anchor.className}`;
        });
    }, resultsSelectorSpan);
    console.log(spans.join('\n'));

    await page.goto('http://masterlab.ink/default/example');

    // Wait for the results page to load and display the results.
    const resultsSelector = 'a.commit-row-message';
    await page.waitForSelector(resultsSelector);
    // Extract the results from the page.
    const links = await page.evaluate((resultsSelector) => {
        const anchors = Array.from(document.querySelectorAll(resultsSelector));
        return anchors.map((anchor) => {
            const title = anchor.textContent.split('|')[0].trim();
            return `${title} - ${anchor.href}`;
        });
    }, resultsSelector);
    console.log(links.join('\n'));

    await browser.close();
})();