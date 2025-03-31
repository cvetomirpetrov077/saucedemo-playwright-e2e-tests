import { Locator, Page } from "@playwright/test";

export class BackPackPage {
    readonly page: Page;
    readonly backToProductsButton: Locator;
    readonly backPackDescription: Locator;
    readonly addBackPackToCart: Locator;
    readonly removeBackPackFromCart: Locator;


    constructor(page: Page) {
        this.page = page;
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
        this.backPackDescription = page.locator('[data-test="inventory-item-desc"]');
        this.addBackPackToCart = page.locator('[data-test="add-to-cart"]'); 
        this.removeBackPackFromCart = page.locator('data-test="remove"');
    }
}
