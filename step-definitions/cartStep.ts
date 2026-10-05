// Cucumber is provided by the test runner at runtime.
// @ts-ignore - allow projects that do not ship Cucumber's type declarations.
import {Given, When, Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
// @ts-ignore - the test runner provides the shared page fixture at runtime.
import {page} from '../support/hooks';
import { CartPage } from '../pages/cartPage';

let cartPage:CartPage;

When('User clicks on the shopping cart icon', async () => {
    cartPage = new CartPage(page);
    await cartPage.goToCart();
});

Then('User should navigate to the shopping cart item review page', async () => {
    await expect(page).toHaveURL(/.*cart.html/);
});

Then('the cart list must display both selected items', async () => {
    const itemsVisible = await cartPage.verifyCartItems();
    expect(itemsVisible).toBeTruthy();
});

When('User clicks on the Checkout button', async () =>  {
    await cartPage.clickCheckout();


});
