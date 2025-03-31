import { test, expect } from '../utils/testSetup';  
import { baseUrl } from '../utils/utils';

test.beforeEach(async ({ page }) => {
  await page.goto(baseUrl); 
});

test.describe('Login tests', () => {
  
    test('Verify a valid login', async ({ loginPage, homePage }) => {
        await loginPage.submitValidLogin();
        await expect(homePage.productstitle).toBeVisible();
    });
  
    test('Verify logout is working', async ({ loginPage, homePage }) => {
      await loginPage.submitValidLogin();
      await homePage.logout();
      await expect(loginPage.usernameInput).toBeVisible(); 
    });
  
    test('Verify login with wrong password is showing proper error', async ({ loginPage }) => {
        await loginPage.submitInvalidLogin();
        await expect(loginPage.invalidPasswordMessage).toBeVisible();
    });
  
    test('Verify login with locked user is showing proper error', async ({ loginPage }) => {
        await loginPage.submitLoginWithLocked();
        await expect(loginPage.lockedUserErrorMessage).toBeVisible();
    });
      
});




