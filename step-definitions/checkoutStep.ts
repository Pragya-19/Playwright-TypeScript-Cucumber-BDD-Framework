
// @ts-ignore - Cucumber is provided by the test runner at runtime.
import { Given, When, Then } from '@cucumber/cucumber';
import {expect} from '@playwright/test';
// @ts-ignore - The shared Playwright page is provided by the test runner at runtime.
import {page} from '../support/hooks';
import { CheckoutPage } from '../pages/CheckoutPage';

let checkoutPage:CheckoutPage;


When('User fills in first name {string}',async (firstName:string) =>  {
    checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillFirstName(firstName);

});
When('User fills in last name {string}',async (lastName:string)=>{
    await checkoutPage.fillLastName(lastName);

});
When('User fills in postal code {string}', async  (postalCode: string) =>{
    await checkoutPage.fillPostalCode(postalCode);
});
When('User clicks the Continue button', async()=>{
    await checkoutPage.clickContinue();
});

Then('User should see the checkout overview verification screen', async () =>  {
    await expect(page).toHaveURL(/.*checkout-step-two.html/);
});
When('User clicks on the Finish button', async () =>  {
    await checkoutPage.clickFinish();

});

Then('The order confirmation text {string} should be visible',async(successMessage:string)=>{

    const confirmationText  = await checkoutPage.getConfirmationText();
    expect(confirmationText).toBe(successMessage);
});