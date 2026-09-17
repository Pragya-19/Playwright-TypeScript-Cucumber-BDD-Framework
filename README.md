# Playwright TypeScript Cucumber BDD Framework

End-to-end UI automation framework built using **Playwright, TypeScript, Cucumber BDD, Page Object Model, hooks, step definitions, and GitHub Actions CI/CD**.

## Tech Stack

- Playwright
- TypeScript
- Cucumber / Gherkin
- Page Object Model
- Node.js / npm
- Git & GitHub
- GitHub Actions

## Framework Structure

```text
Playwright-TypeScript-Cucumber-BDD-Framework
│
├── .github/
│   └── workflows/
│
├── data/
│
├── features/
│   └── ecoomerceE2E.feature
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── step-definitions/
│   ├── loginStep.ts
│   ├── inventoryStep.ts
│   ├── cartStep.ts
│   └── checkoutStep.ts
│
├── support/
│   └── hooks.ts
│
├── cucumber.json
├── playwright.config.ts
├── package.json
└── README.md

BDD Flow

The automation follows the Cucumber BDD approach:

Feature File
    ↓
Gherkin Scenarios
    ↓
Step Definitions
    ↓
Page Object Classes
    ↓
Playwright Browser Automation
    ↓
Hooks
    ↓
Test Execution / Reporting
Scenario Covered

The current end-to-end scenario validates the SauceDemo e-commerce workflow:

Navigate to the application
Login with valid credentials
Validate inventory page
Select products
Add products to cart
Validate shopping cart
Proceed to checkout
Enter customer information
Validate checkout overview
Complete the order
Validate order confirmation
Running the Project

Install dependencies:

npm install

Install Playwright browser:

npx playwright install chromium

Run Cucumber tests:

npx cucumber-js "features/**/*.feature" --require-module tsx/cjs --require "step-definitions/**/*.ts" --require "support/**/*.ts"
Current Development Status

The Cucumber framework, hooks, TypeScript configuration, Playwright browser execution, and step-definition loading are configured.

Additional BDD step definitions are being completed as part of the framework refinement.

Key Concepts Demonstrated
Behavior Driven Development
Gherkin Feature Files
Given / When / Then
Cucumber Step Definitions
Page Object Model
Playwright Browser Automation
Before / After Hooks
External Test Data
CI/CD Integration
Git Version Control
