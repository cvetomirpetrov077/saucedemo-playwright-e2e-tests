import { Locator, Page } from "@playwright/test";

export class ShoppingCartPage {
    readonly page: Page;
    readonly yourCartTitle: Locator;
    readonly backpackAddedInCart :Locator
    readonly allCartItems: Locator;
    readonly cartList: Locator;
    readonly removeBackPackButton: Locator;
    readonly removeBikeLightButton: Locator;
    readonly removeShirtButton: Locator;
    readonly continueShopping: Locator;
    readonly checkoutButton: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.yourCartTitle = page.getByText("Your Cart");
        this.backpackAddedInCart = page.getByText("Sauce Labs Backpack");
        this.removeBackPackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.removeBikeLightButton = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.removeShirtButton = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.allCartItems = page.locator('[data-test="inventory-item"]');
        this.cartList = page.locator('[data-test="cart-list"]');
        this.continueShopping = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async checkout(){
        await this.checkoutButton.click();        
    }

    async removeProductFromCart(product: Locator){
       await product.click();    
    }

    async navigateBackToShop(){
        await this.continueShopping.click();
    }




}    