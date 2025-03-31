import { Locator, Page } from "@playwright/test";
import { invalidPassword, lockedUser, validPassword, validUser } from "../utils/utils";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginSubmitButton: Locator;
    readonly invalidPasswordMessage: Locator;
    readonly lockedUserErrorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginSubmitButton = page.locator('[data-test="login-button"]');
        this.invalidPasswordMessage = page.locator('[data-test="error"]');
        this.lockedUserErrorMessage = page.locator('[data-test="error"]');
    }

    async submitLogin ( username:string , password:string ) {
         await this.usernameInput.pressSequentially(username);
         await this.passwordInput.pressSequentially(password);
         await this.loginSubmitButton.click();
    }

    async submitValidLogin(){
         await this.submitLogin(validUser, validPassword);        
    }

    async submitInvalidLogin(){
         await this.submitLogin(validUser,invalidPassword)
    }

    async submitLoginWithLocked(){
         await this.submitLogin(lockedUser, validPassword)
    }

}