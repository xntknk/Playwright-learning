const { expect } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByPlaceholder("Username")
        this.pwdInput = page.getByPlaceholder("Password")
        this.loginBtn = page.locator("[type='submit']")
    }
    async goto() {
        await this.page.goto("/");
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.pwdInput.fill(password);
        await this.loginBtn.click();

    }
    async loginIsTrue() {
        await expect(this.page.locator('h6')).toContainText('Dashboard')
    }
    async requireMsg(){
        await expect(this.page.getByText('Required').nth(0)).toBeVisible();
        await expect(this.page.getByText('Required').nth(1)).toBeVisible();
    }
    async invalidMsg() {
        await expect(this.page.getByText('Invalid credentials')).toBeVisible();


    }

}

module.exports = { LoginPage };