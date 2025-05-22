import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { validUser, invalidUser, emptyUser } from '../fixtures/users';


let loginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.goto();
});

test("Valid Login", async () => {
    await loginPage.login(validUser.username, validUser.password);
});

test("Login with the invalid user", async() => {
  await loginPage.login(invalidUser.username, validUser.password);
  await loginPage.invalidMsg();
});

test("Login with the invalid pwd", async() => {
  await loginPage.login(validUser.username, invalidUser.password);
  await loginPage.invalidMsg();
});

test("Leave user field empty", async() => {
  await loginPage.login(emptyUser.username, emptyUser.password);
  await loginPage.requireMsg();
})