/// <reference types="cypress"/>

import { Given } from "@badeball/cypress-cucumber-preprocessor";
import Landing from "../page_objects/Landing.page";

const landing = new Landing();

Given("I am on the magento page", () => {
    cy.visit(Cypress.env("url"));
});

Given("I want to click in Create an Account", () => {
    landing.clickInCreateAnAccount();
});

Given("I want to click in Sign In", () => {
    landing.clickInSignIn();
});