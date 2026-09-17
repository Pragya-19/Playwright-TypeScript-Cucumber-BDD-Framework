import {Given, When} from '@cucumber/cucumber'
import {expect} from '@playwright/test';
import {page} from '../support/hooks.js';
import {LoginPage} from '../pages/LoginPage';

let loginPage:LoginPage;

Given ('User opens the Swag Labs login page',async ()=>{
    loginPage = new LoginPage(page);
    await loginPage.navigate();
});

Given ('The system is ready for authentication', async()=>{
    await expect(page).toHaveTitle('Swag Labs')

});
When ('User inputs a valid username {string}',async(username:string)=>{
    await loginPage.enterUsername(username);

});
When ('User inputs a valid password {string}',async (password:string)=>{
    await loginPage.enterPassword(password);
});
When ('User clicks on the Login button',async()=>{
    await loginPage.clickLogin();

});