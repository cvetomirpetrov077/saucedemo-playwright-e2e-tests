import { test, expect } from '../utils/testSetup';  
import { baseUrl } from '../utils/utils';

test.beforeEach(async ({ page, loginPage }) => {
    await page.goto(baseUrl); 
    await loginPage.submitValidLogin();
  });

test.describe('Shopping tests', () => {       
 
    test('Verify items in the menu', async ({ homePage }) => {
        await homePage.sidebarMenu.click();
        await expect (homePage.logoutButton).toBeVisible();
        await expect (homePage.aboutButton).toBeVisible();
    });

    test('Verify items sorting is working', async ({ homePage }) => {
        await homePage.sortProducts('Name (A to Z)');
        await expect(homePage.firstItemName).toHaveText('Sauce Labs Backpack');
    });

    test('Verify add to cart is working directly from the homepage', async ({ homePage, shoppingCartPage }) => {
        await homePage.addProductToCart(homePage.backPackAddToCart);
        await expect (shoppingCartPage.backpackAddedInCart).toBeVisible();
    });

    test('Verify specific product page can be oppened', async ({ homePage, backPackPage}) => {
        await homePage.openProduct(homePage.backPack);
        await expect(backPackPage.backToProductsButton).toBeVisible();
        await expect(backPackPage.backPackDescription).toBeVisible();
    });

    test('Verify product can be added to cart from the products page', async ({ homePage, helperMethods, shoppingCartPage}) => {
        await homePage.openProduct(homePage.backPack);
        await helperMethods.addProductToCartFromProductPage();
        await helperMethods.navigateToCart();
        await expect(shoppingCartPage.backpackAddedInCart).toBeVisible();
    });

    test('Verify multiple products can be added to the cart', async ({ homePage, helperMethods, shoppingCartPage}) => {
        await homePage.addProductToCart(homePage.backPackAddToCart);
        await homePage.addProductToCart(homePage.shirtAddToCart);
        await homePage.addProductToCart(homePage.bikeLightAddtoCart);
        await homePage.addProductToCart(homePage.jacketAddToCart);
        await helperMethods.navigateToCart();
        await expect(shoppingCartPage.allCartItems).toHaveCount(4);
    });
     
    test('Verify removing products from cart is working', async ({ homePage, helperMethods, shoppingCartPage}) => {
        await homePage.addProductToCart(homePage.backPackAddToCart);
        await homePage.addProductToCart(homePage.shirtAddToCart);
        await helperMethods.navigateToCart();
        await shoppingCartPage.removeProductFromCart(shoppingCartPage.removeBackPackButton);
        await expect(shoppingCartPage.allCartItems).toHaveCount(1);
    }); 

    test('Verify continue shopping, and adding more products is working', async ({ homePage, helperMethods, shoppingCartPage}) => {
       await homePage.addProductToCart(homePage.backPackAddToCart);
       await homePage.addProductToCart(homePage.shirtAddToCart);
       await helperMethods.navigateToCart();
       await shoppingCartPage.navigateBackToShop();
       await homePage.addProductToCart(homePage.jacketAddToCart);
       await helperMethods.navigateToCart();
       await expect(shoppingCartPage.allCartItems).toHaveCount(3);
    });

    test('Verify cart items are still in cart after logout', async ({ homePage, loginPage, helperMethods, shoppingCartPage}) => {
        await homePage.addProductToCart(homePage.backPackAddToCart);
        await homePage.addProductToCart(homePage.shirtAddToCart);
        await homePage.logout();
        await loginPage.submitValidLogin();
        await helperMethods.navigateToCart();
        await expect(shoppingCartPage.allCartItems).toHaveCount(2);
     }); 

    test('Validate that all the information is present on the checkout page', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage, checkoutPage})=>{
       await homePage.addProductToCart(homePage.jacketAddToCart);
       await helperMethods.navigateToCart();
       await shoppingCartPage.checkout();
       await paymentDetailsPage.completePayment('test','user','12345');
       await expect(checkoutPage.paymentInfo).toBeVisible();
       await expect(checkoutPage.shippingInformation).toBeVisible(); 
       await expect(checkoutPage.total).toBeVisible();
       await expect(checkoutPage.subTotal).toBeVisible();
   });

    test('Validate price is adding up correctly on the checkout page', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage, checkoutPage})=>{
      await homePage.addProductToCart(homePage.jacketAddToCart);
      await homePage.addProductToCart(homePage.backPackAddToCart);
      await homePage.addProductToCart(homePage.bikeLightAddtoCart);
      await helperMethods.navigateToCart();
      await shoppingCartPage.checkout();
      await paymentDetailsPage.completePayment('test','user','12345');
      await expect(checkoutPage.finalTotal).toHaveText('Total: $97.17');
   });

    test('Validate user can complete an order', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage, checkoutPage, paymentConfirmationPage })=>{
       await homePage.addProductToCart(homePage.jacketAddToCart);
       await helperMethods.navigateToCart();
       await shoppingCartPage.checkout();
       await paymentDetailsPage.completePayment('test','test','12345');
       await checkoutPage.finishPayment();
       await expect (paymentConfirmationPage.successMessage).toHaveText('Thank you for your order!');
    });

    test('Validate that the cart is empty after a succesfull order', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage, checkoutPage, paymentConfirmationPage })=>{
        await homePage.addProductToCart(homePage.jacketAddToCart);
        await helperMethods.navigateToCart();
        await shoppingCartPage.checkout();
        await paymentDetailsPage.completePayment('test','test','12345');
        await checkoutPage.finishPayment();
        await paymentConfirmationPage.navigateBackToProducts();
        await helperMethods.navigateToCart();
        await expect(shoppingCartPage.cartList.locator('div')).toHaveCount(2);
        
     });

    test('Validate payment validation is active', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage })=>{
        await homePage.addProductToCart(homePage.jacketAddToCart);
        await helperMethods.navigateToCart();
        await shoppingCartPage.checkout();
        await paymentDetailsPage.invalidPayment('test','test');
        await expect(paymentDetailsPage.paymentError).toBeVisible();
     });
   
    test('Verify an order can be cancelled on payment', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage })=>{
        await homePage.addProductToCart(homePage.jacketAddToCart);
        await helperMethods.navigateToCart();
        await shoppingCartPage.checkout();
        await paymentDetailsPage.cancelPayment();
        await expect(shoppingCartPage.yourCartTitle).toBeVisible();
     });
    
     test('Verify an order can be cancelled on checkout', async({ homePage, shoppingCartPage, helperMethods, paymentDetailsPage , checkoutPage })=>{
        await homePage.addProductToCart(homePage.jacketAddToCart);
        await helperMethods.navigateToCart();
        await shoppingCartPage.checkout();
        await paymentDetailsPage.completePayment('test', 'user', '12345');
        await checkoutPage.cancelButton.click();
        await expect(homePage.productstitle).toBeVisible();
     }); 

});

