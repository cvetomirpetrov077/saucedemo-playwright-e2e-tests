import { test as base, expect } from '@playwright/test';
import { HelperMethods } from './helperMethods';
import { BackPackPage } from '../pages/backPackPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { PaymentConfirmationPage } from '../pages/confirmationPage';
import { HomePage } from '../pages/homePage';
import { LoginPage } from '../pages/loginPage';
import { PaymentDetailsPage } from '../pages/paymentDetailsPage';
import { ShoppingCartPage } from '../pages/shoppingCartPage';

const test = base.extend<{ 
   loginPage: LoginPage, 
   homePage:HomePage, 
   shoppingCartPage:ShoppingCartPage ,
   backPackPage: BackPackPage, 
   helperMethods: HelperMethods, 
   paymentDetailsPage: PaymentDetailsPage, 
   paymentConfirmationPage: PaymentConfirmationPage, 
   checkoutPage: CheckoutPage

  }>({ 
  
    loginPage: async ({ page }, use) => {              
    const loginPage = new LoginPage(page);             
    await use(loginPage)                              
  },
    homePage: async ({page}, use) => {
      const homePage = new HomePage(page);
      await use(homePage)                                    
  },  
    shoppingCartPage: async ({page}, use) => {
    const shoppingCartPage = new ShoppingCartPage(page);
    await use(shoppingCartPage)                                    
  },
    backPackPage: async ({page}, use) => {
    const backPackPage =  new BackPackPage(page);
    await use(backPackPage)
  },
    helperMethods:async ({page}, use) => {
    const helperMethods = new HelperMethods(page);
    await use (helperMethods)
  },  
    checkoutPage:async ({page}, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use (checkoutPage)
  },
    paymentDetailsPage:async ({page}, use) => {
    const paymentDetailsPage = new PaymentDetailsPage(page);
    await use (paymentDetailsPage)
  },
    paymentConfirmationPage:async ({page}, use) => {
    const paymentConfirmationPage = new PaymentConfirmationPage(page);
    await use (paymentConfirmationPage)
  }

});

export { test, expect };