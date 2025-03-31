import { Locator, Page } from "@playwright/test";

export class CheckoutPage {
    readonly page: Page;
    readonly paymentInfo: Locator;
    readonly paymentInfoValue: Locator;
    readonly shippingInformation: Locator;
    readonly shippingInformationValue: Locator;
    readonly total:Locator;
    readonly subTotal: Locator;
    readonly tax: Locator;
    readonly finalTotal: Locator;
    readonly cancelButton: Locator;
    readonly finishButton: Locator;
    readonly paymentInfoContatiner: Locator;


    constructor(page: Page) {
        this.page = page;
        this.paymentInfo = page.locator('[data-test="payment-info-label"]');
        this.paymentInfoValue = page.locator('[data-test="payment-info-value"]');
        this.shippingInformation = page.locator('[data-test="shipping-info-label"]');
        this.shippingInformationValue = page.locator('[data-test="shipping-info-value"]');
        this.total = page.locator('[data-test="total-info-label"]');
        this.subTotal = page.locator('[data-test="subtotal-label"]');
        this.tax = page.locator('[data-test="tax-label"]');
        this.finalTotal = page.locator('[data-test="total-label"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async finishPayment(){
        await this.finishButton.click();
    }

}    