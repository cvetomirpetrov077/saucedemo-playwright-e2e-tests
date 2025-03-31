import { Locator, Page } from "@playwright/test";

export class PaymentDetailsPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly cancelButton: Locator;
    readonly continueButton: Locator;
    readonly paymentError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]');
        this.lastName = page.locator('[data-test="lastName"]');
        this.zipCode = page.locator('[data-test="postalCode"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.paymentError =  page.locator('[data-test="error"]');
    }

    async completePayment(firstName: string, lastName: string, zipCode: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continueButton.click();
    }

    async invalidPayment(firstName:string, lastName: string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.continueButton.click();
    }

    async cancelPayment(){
        await this.cancelButton.click();
    }


}
