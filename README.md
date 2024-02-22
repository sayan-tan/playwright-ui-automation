# 💻 Test Automation Framework | WEB 

[![Playwright](https://img.shields.io/badge/Playwright-34495E?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://js.org/index.html) 

[![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)
[![Playwright HTML Reporter](https://img.shields.io/badge/Playwright%20HTML%20Reporter-<COLOR>?style=for-the-badge&logo=playwright&logoColor=white)](https://www.npmjs.com/package/playwright-html-reporter)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions) 

## 📑 Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Continuous Integration](#continuous-integration)
- [Reporting](#reporting)

## 📖 Introduction
This repository contains a Test Automation Framework built using Playwright and Javascript for automated testing of web applications.

## 🛠️ Prerequisites

- [![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/) (v18.16.1 or higher recommended)
- [![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/) (v9.5.1 or higher recommended)

## ▶️ Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sayan-tan/playwright-ui-automation.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playwright-ui-automation-framework
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🚀 Running Tests

- Playwright UI mode:

  ```bash
  npm run tests:ui-mode
  ```
- Execution in different browsers:

  - [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
[![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
[![WebKit](https://img.shields.io/badge/WebKit-689F63?style=for-the-badge&logo=webkit&logoColor=white)](https://webkit.org/)
[![Chromium](https://img.shields.io/badge/Chromium-4A90E2?style=for-the-badge&logo=chromium&logoColor=white)](https://www.chromium.org/Home)


  ```bash
  npm run tests:CHROME
  ```
  ```bash
  npm run tests:EDGE
  ```
  ```bash
  npm run tests:FIREFOX
  ```
  ```bash
  npm run tests:WEBKIT
  ```
  ```bash
  npm run tests:CHROMIUM
  ```

- Execution in Headless mode:
  ```bash
  npm run tests:CHROME:HEADLESS
  ```

## 📁 Project Structure

The tests follow a modular and maintainable structure:

```
|-- .github
|     |-- workflows
|          |-- 01_ui_tests_chrome.yml
|          |-- 02_ui_tests_select_one.yml.yml
|          |-- 03_ui_tests_ALL.yml
|-- pages
|     |-- BasePage.js
|     |-- CartPage.js
|     |-- Components.js
|     |-- LoginPage.js
|     |-- ProductsPage.js
|-- test-data
|     |-- login_credentials.json
|-- tests-saucedemo
|     |-- components.spec.js
|     |-- login.spec.js
|-- utils
|     |-- VerificationUtils.js
|     |-- WaitUtils.js
|-- .gitignore
|-- package.json
|-- playwright.config.js
```

- `pages`: Contains the Page Object Model (POM) classes representing web pages and their elements.
- `playwright-report`: Contains the HTML report for tests (Logs, Screenshots, Traces, and Videos are attached).
- `test-data`: Contains external files (example: login credentials data) that can be used to mock data during tests.
- `tests-saucedemo`: Contains the actual test files. You can organize your tests into subdirectories as needed. 
- `utils`: Contains the Utilities that provide methods for asserting different conditions on web elements, and waits.

## ⚙️ Configuration

- Modify `playwright.config.js` for playwright configuration settings such as
  - `baseURL`
  - `testDir`
  - `reporter`
  - `fullyParallel`
  - `video`
  - `screenshot`
  - `trace`

## 🔄 Continuous Integration

This project is configured for CI using GitHub Actions. Check the configurations in `.github/workflows/*.yml`.

- `01_ui_tests_chrome.yml`: This workflow executes tests in the Chrome browser.

- `02_ui_tests_select_one.yml`: This workflow will first ask the User to select the browser for test execution.

- `03_ui_tests_ALL.yml`: This workflow executes the tests in all browsers <!-- #(CHROME, EDGE, WEBKIT, CHROMIUM, FIREFOX) -->

  [![Chrome](https://img.shields.io/badge/Chrome-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.google.com/chrome/)
  [![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=microsoft-edge&logoColor=white)](https://www.microsoft.com/edge/)[![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=firefox&logoColor=white)](https://www.mozilla.org/firefox/)
  [![WebKit](https://img.shields.io/badge/WebKit-689F63?style=for-the-badge&logo=webkit&logoColor=white)](https://webkit.org/)
  [![Chromium](https://img.shields.io/badge/Chromium-4A90E2?style=for-the-badge&logo=chromium&logoColor=white)](https://www.chromium.org/Home)

## 📊 Reporting

The Playwright HTML report (Logs, Screenshots, Traces, and Videos are attached) is stored in the `playwright-report` directory.
