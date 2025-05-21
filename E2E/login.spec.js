import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';


let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test("Valid Login", async () => {
    await loginPage.login("Admin", "admin123");
});

test("Login with the invalid user", async() => {
  await loginPage.login("Assmin", "admin123");
  await loginPage.invalidMsg();
});

test("Login with the invalid pwd", async() => {
  await loginPage.login("Admin", "sdlsjadl");
  await loginPage.invalidMsg();
});

test("Leave user field empty", async() => {
  await loginPage.login("","");
  await loginPage.requireMsg();
})