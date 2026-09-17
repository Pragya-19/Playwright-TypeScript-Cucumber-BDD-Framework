// Cucumber is provided at runtime by the test runner; this suppresses the
// editor error when its type declarations are unavailable in the workspace.
// @ts-ignore
import {Given, When,Then} from '@cucumber/cucumber';
import {expect} from '@playwright/test';
// The shared page fixture is provided by the test runner; its module may be
// unavailable to the editor when the workspace type declarations are missing.
// @ts-ignore
import {page} from '../support/hooks';
import {InventoryPage} from '../pages/InventoryPage';

let inventoryPage:InventoryPage
  
  
Then('User should be redirected to the products inventory page',{timeout:20000},async()=>{
    inventoryPage = new InventoryPage(page);
    await expect(page).toHaveURL(/.*inventory.html/);
});

Then('The page header should display {string}',async(headerText:string)=>{
    await expect(inventoryPage.pageTitle).toHaveText(headerText);

});

When('User clicks the Add to Cart button for the backpack',async()=>{
    await inventoryPage.addBackpackToCart();
});

When('User clicks the Add to Cart button for the bike light',async()=>{
    await inventoryPage.addBikeLightToCart();

});
Then('The shopping cart badge counter should show {string}',async(count:string)=>{
    await expect(page.locator('.shopping_cart_badge')).toHaveText(count);
});