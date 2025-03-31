import { Locator, Page } from "@playwright/test";

export class PaymentConfirmationPage {
    readonly page: Page;
    readonly successMessage: Locator;
    readonly backToProdcuts: Locator;


    constructor(page: Page) {
        this.page = page;
        this.successMessage = page.locator('[data-test="complete-header"]');
        this.backToProdcuts = page.locator('[data-test="back-to-products"]');
    }

    async navigateBackToProducts(){
        await this.backToProdcuts.click();
    }


}    