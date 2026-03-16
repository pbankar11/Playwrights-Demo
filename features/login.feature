Feature: Checkout functionality

  Scenario: User should be able to purchase Selenium Ruby product

    Given user navigates to the shop page
    When user selects "Selenium Ruby" product
    And user adds product to basket
    And user proceeds to checkout
    And user enters checkout details
    Then order should be placed successfully
