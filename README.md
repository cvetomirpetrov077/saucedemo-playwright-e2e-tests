# Demo project testing an online shop - https://www.saucedemo.com/ 

# Overview  
This project contains **end-to-end tests** for an e-commerce shopping website using **Playwright with TypeScript**.  

## Project Structure  
📂 **pages/** → Page Object Models for different sections of the site.  
📂 **tests/** → Test files covering login tests, and shopping tests, including cart operations, and checkout functionalities.  
📂 **utils/** → Helper functions, test data, and fixture setup

**This Project Covers**
✔️ Login tests (valid, invalid, locked users)
✔️ Adding and removing items from the cart in various ways, from different pages
✔️ Checking out and verifying order summary, payment methods and general order flow
✔️ Navigation between pages

**Technologies Used**
✔️ Playwright
✔️ TypeScript
✔️ Page Object Model (POM)
✔️ Fixtures & Helpers

**Setup Instructions**
1️⃣ Install dependencies
Ensure you have Node.js installed, then run: npm install
2️⃣ Install Playwright Browsers  npx playwright install

**Running Tests**
Run all tests  - npx playwright test
Run tests in **headed mode** (see browser UI) - npx playwright test --headed
Run a specific test file:  npx playwright test tests/login.spec.ts  OR npx playwright test tests/spoppingTests.spec.ts
Run a specific test: Enter .only after test. For example test.only('Verify a valid login'.. then run npx playwright test

Playwright documentation: https://playwright.dev/