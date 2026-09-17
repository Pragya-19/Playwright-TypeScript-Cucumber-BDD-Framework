import{Page,Locator} from '@playwright/test';

export class CheckoutPage{
    readonly page:Page;
    readonly firstNameInput:Locator;
    readonly lastNameInput:Locator;
    readonly postalCodeInput:Locator;
    readonly continueButton:Locator;
    readonly finishButton:Locator;
    readonly summaryTotalLabel:Locator;
    readonly completeHeader: Locator;

constructor(page:Page)
{
    this.page = page;
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('[data-test="complete-header"]');
    this.summaryTotalLabel=page.locator('.summary_total_label');

}

async fillFirstName(first:string):Promise<void>{
    await this.firstNameInput.fill('firstName');
}

async fillLastName(last:string):Promise<void>{
    await this.lastNameInput.fill('lastName');
}

async fillPostalCode(zip:string):Promise<void>{
    await this.postalCodeInput.fill('postalCode');
}

async clickContinue():Promise<void>{
    await this.continueButton.click();
}

async clickFinish():Promise<void>{
    await this.finishButton.click();
}

async getConfirmationText():Promise<string |null>{
    return await this.completeHeader.textContent();
}

}