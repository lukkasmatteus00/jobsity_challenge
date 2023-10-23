# Author: Lucas Matheus de souza Pereira
# language: en
@cypress @javascript @magento
Feature: Register new accounts

  Background:
    Given I am on the magento page
    When I want to click in Create an Account
    And I want to create a new customer accounts

  @order @E2E
  Scenario: Check that user will be ableto to remove items from cart on the header.
    Given I want to seach for "Radiant Tee" product
    When I want to select some product characteristics
      | size | color | quantity |
      | M    | Blue  | 2        |
    And I click in add to Cart button
    Then I want to see how many items was add into cart "2"
    When I click in delete item icon
    Then The system will display a modal with this message "Are you sure you would like to remove this item from the shopping cart?"

  @order @E2E
  Scenario: Check that the product you select is the same as the one the cart stores (color, size,quantity)
    Given I want to seach for "Radiant Tee" product
    When I want to select some product characteristics
      | size | color | quantity |
      | M    | Blue  | 1        |
    And I click in add to Cart button
    Then the system will display this message "You added Radiant Tee to your shopping cart."
    And I want to see how many items was add into cart "1"
    When I click in See Details
    Then I want to see the same product characteristics that I choose
      | size | color | quantity | name        |
      | M    | Blue  | 1        | Radiant Tee |

  @payment @E2E
  Scenario: Users should be presented with a checkout form using Proceed to checkout link on the header cart
    Given I want to seach for "Radiant Tee" product
    When I want to select some product characteristics
      | size | color | quantity |
      | M    | Blue  | 1        |
    And I click in add to Cart button
    Then I want to see how many items was add into cart "1"
    When I click in Proceed to checkout button
    And I fill all shipping address information
    And I click in place order to confirm it
    Then The system will display thanks message for my purchase
