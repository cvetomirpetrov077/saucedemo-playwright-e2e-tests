import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly productstitle: Locator;
    readonly sidebarMenu: Locator;
    readonly logoutButton: Locator;
    readonly aboutButton: Locator;
    readonly backPack: Locator;    
    readonly backPackAddToCart:Locator;
    readonly bikeLightAddtoCart: Locator;
    readonly shirtAddToCart: Locator;
    readonly jacketAddToCart: Locator;
    readonly backPackRemovefromCart:Locator;
    readonly bikeLightRemoveFromCart: Locator;
    readonly shirtRemoveFromCart: Locator;
    readonly jacketRemoveFromCart: Locator;
    readonly shoppingCartButton: Locator;
    readonly firstItemName: Locator;
    readonly sortProductsButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productstitle = page.locator('[data-test="title"]');
        this.sidebarMenu = page.locator('#react-burger-menu-btn');
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]');
        this.aboutButton = page.locator('[data-test="about-sidebar-link"]');
        this.backPack = page.locator('[data-test="item-4-title-link"]');
        this.backPackAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightAddtoCart = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.shirtAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.jacketAddToCart = page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]')
        this.backPackRemovefromCart = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.bikeLightRemoveFromCart = page.locator('[data-test="remove-sauce-labs-bike-light"]');
        this.jacketRemoveFromCart = page.locator('[data-test="remove-sauce-labs-fleece-jacket"]');
        this.shirtRemoveFromCart = page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        this.firstItemName = page.locator('.inventory_list .inventory_item:first-child .inventory_item_name');
        this.sortProductsButton = page.locator('[data-test="product-sort-container"]');
        this.shoppingCartButton = page.locator('[data-test="shopping-cart-link"]');
    } 

    async logout(){
       await this.sidebarMenu.click();
       await this.logoutButton.click();
    }

    async openProduct(product: Locator){
       await product.click();
    }

    async addProductToCart(product:Locator) {
        await product.click();
    }

    async sortProducts(option: string){
        await this.sortProductsButton.selectOption(option);
    }
 

}