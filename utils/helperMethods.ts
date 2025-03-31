import { Page } from '@playwright/test';

export class HelperMethods {
    readonly page: Page;
    readonly addBackPackButtonHome;
    readonly addBackPackButtonProductPage;
    readonly addProductToCartButton;
    readonly removeProductFromCartButton;
    readonly cartButton;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('[data-test="shopping-cart-link"]');
        this.addProductToCartButton = page.locator('[data-test="add-to-cart"]');
        this.removeProductFromCartButton = page.locator('[data-test="remove"]');

    }

    async addProductToCartFromProductPage() {
       await this.addProductToCartButton.click()
    }

    async removeProductFromCartFromProductPage(){
       await this.removeProductFromCartButton.click()
    }

    async navigateToCart() {
       await this.cartButton.click();
    }


}    