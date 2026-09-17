Feature: SauceDemo E2E E-Commerce Verification

Background: User Navigates to the Application
    Given User opens the Swag Labs login page
    And the system is ready for authetication

Scenario: Verify complete End to end order placement workflow
          When User inputs a valid username "standard_user"
          And User inputs a valid password "secret_sauce"
          And User clicks on the Login button
          Then User should be redirected to the products inventory page
          And the page header should display "products"
          When User selects the "Sauce Labs Backpack" product
          And User clicks the Add to Cart button for the Backpack
          And User selects the "Sauce Labs BikeLight" product
          And User clicks the Add to Cart button for the BikeLight
          Then the shopping cart badge should show "2"
          When User clicks on the shopping cart cart container icon
          Then the User should navigate to the shopping cart item review page
          Then the cart list must display both selected items
          When User clicks on the Checkout button
          And User fills in first name "standard_user"
          And User fills in last name "press"
          And User fills in postal code "123456"
          And User clicks the Continue button
          Then User should see the checkout overview verification screen
          And User clicks the Finish button
          Then the order confirmation text "Thank you for your order" should be visible





