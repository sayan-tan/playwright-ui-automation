// Importing the BasePage class
import BasePage from "./BasePage"

// Creating an instance of the BasePage class
const basePage = new BasePage();

/**
 * LoginPage class represents the login page of the application.
 * @class
 */
class LoginPage{
    
    
    // Elements
    /**
     * Initializes the LoginPage instance with page elements.
     *
     * @param {Object} page - The Playwright page object.
     */
    constructor(page){
        this.page = page
        this.textbox_username = page.locator('[data-test="username"]')
        this.textbox_password = page.locator('[data-test="password"]')
        this.button_login = page.locator('[data-test="login-button"]')
        this.message_error_not_match = page.locator("//h3[contains(text(),'do not match')]")
    }

    // Operations/Methods
    /**
     * Logs into the application with the provided username and password.
     * @param {string} username - The username to use for login.
     * @param {string} password - The password to use for login.
     * @returns {Promise<void>} - A Promise that resolves when the login operation is completed.
     * 
     * @example
     * const loginPage = new LoginPage(page);
     * await loginPage.loginToApplication('testuser', 'testpassword');
     */
    async loginToApplication(username, password){
        await basePage.fillTextBox(this.textbox_username, username, "Username")
        await basePage.fillTextBox(this.textbox_password, password, "Password")
        await basePage.clickOnWebElement(this.button_login, "Login button")
    }


    /**
     * Logs into the application with valid credentials.
     * @returns {Promise<void>} - A Promise that resolves when the login operation is completed.
     *
     * @example
     * const loginPage = new LoginPage(page);
     * await loginPage.loginToApplicationWithValidCredentials();
     */
    async loginToApplicationWithValidCredentials(){

        // Loading login credentials from JSON file
        const loginCredentials = require('../test-data/login_credentials.json');  

        // Extracting credentials for valid case
        const {valid_username, valid_password} = loginCredentials.data.credentials_1;
  
        await this.loginToApplication(valid_username, valid_password)
      
    }

}

/**
 * Exports the LoginPage class as the default export of this module.
 * @module LoginPage
 */
export default LoginPage;