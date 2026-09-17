import{Page,Locator} from '@playwright/test';

export class LoginPage{
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly LoginButton:Locator;
    readonly errorMessage:Locator;

    constructor(page:Page)
    {
        this.page= page;
        this.usernameInput=page.locator('[data-test="username"]');
        this.passwordInput=page.locator('[data-test="password"]');
        this.LoginButton=page.locator('[data-test="login-button"]');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigate(){
         await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUsername(user:string)
    {
        await this.usernameInput.fill(user);
    }

    async enterPassword(pass:string)
    {
        await this.passwordInput.fill(pass);
    }

    async clickLogin()
    {
        await this.LoginButton.click();
    }

}
