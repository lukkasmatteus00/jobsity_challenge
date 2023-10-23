# Author: Lucas Matheus de souza Pereira
# language: en
@cypress @javascript @magento
Feature: Register new accounts

  Background:
    Given I am on the magento page

  @createUserAccount @E2E
  Scenario: Create a new account
    Given I want to click in Create an Account
    When I want to create a new customer accounts
    Then the system will display this message "Thank you for registering with Main Website Store."

  @signIn @E2E
  Scenario: Login to the account once the account has been created
    Given I want to click in Sign In
    And I want to Sig In using the new customer accounts credentials
    Then the system will display welcome with user's name on the top

  @signIn @E2E
  Scenario: Validate that the password and email fields are incorrect.
    Given I want to click in Sign In
    And I want to inform invalid user customer accounts credentials
    Then the system will display this error message "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."