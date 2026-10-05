// @ts-ignore The Cucumber package is resolved at runtime by the test runner.
import { BeforeAll, AfterAll, Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';


let browser:Browser;
let context:BrowserContext;
export let page:Page;

BeforeAll(async function () {
    const isCI = process.env.CI === 'true';

    browser = await chromium.launch({
        headless: isCI,
        slowMo: isCI ? 0 : 1000
    });

});
Before(async function (){
    context = await browser.newContext();
    page = await context.newPage();

});

After(async function(scenario){
    if(scenario.result?.status === Status.FAILED){
        const screenshot = await page.screenshot({path:`test-results/screenshorts/${scenario.pickle.name}.png`,type:'png'});
        this.attach(screenshot,'image/png');
    }
    await page.close();
    
    await context.close();
});

AfterAll(async function(){
    await browser.close();
})
