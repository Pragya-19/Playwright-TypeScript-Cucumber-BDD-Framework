Feature: SauceDemo E2E E-Commerce Verification

  Background: User navigates to the application
    Given User opens the Swag Labs login page
    And the system is ready for authentication

  Scenario: Verify complete end-to-end order placement workflow
    When User inputs a valid username "standard_user"
    And User inputs a valid password "secret_sauce"
    And User clicks on the Login button
    Then User should be redirected to the products inventory page
    And the page header should display "Products"

    When User adds the Sauce Labs Backpack to the cart
    And User adds the Sauce Labs Bike Light to the cart
    Then the shopping cart badge should show "2"

    When User clicks on the shopping cart icon
    Then User should navigate to the shopping cart item review page
    And the cart list must display both selected items

    When User clicks on the Checkout button
    And User fills in first name "Test"
    And User fills in last name "User"
    And User fills in postal code "123456"
    And User clicks the Continue button
    Then User should see the checkout overview verification screen
    When User clicks the Finish button
    Then the order confirmation text "Thank you for your order!" should be visible
