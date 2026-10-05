import { Page,Locator } from "@playwright/test";
export class CartPage{
    readonly page:Page;
    readonly cartItems: Locator;
    readonly removeButton:Locator;
    readonly continueShoppingButton:Locator;
    readonly checkoutButton:Locator;
    readonly cartIcon: Locator;


    constructor(page:Page)
    {
        this.page = page;
        this.cartItems = page.locator('.cart_item');
        this.removeButton = page.locator('.btn_small.cart_button');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

        async clickCheckout()
    {
        await this.checkoutButton.click();
    }

    async clickContinueShooping()
    {
        await this.continueShoppingButton.click();
    }

    async goToCart():Promise<void>{
        await this.cartIcon.click();
    }

    async verifyCartItems():Promise<boolean>
    {
       const itemsVisible = await cartPage.verifyCartItems();
       expect(itemsVisible).toBeTruthy();
    }
}
