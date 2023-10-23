/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SignIn from "../page_objects/SignIn.page";

const signIn = new SignIn();

Given("I want to Sig In using the new customer accounts credentials", () => {
    cy.fixture('user.json').then(user => {
        signIn.fillEmailField(user.email);
    })
    cy.fixture('password.json').then(password => {
        signIn.fillPasswordField(password.password);
    })
    signIn.clickInSignInButton();
});

Given("I want to inform invalid user customer accounts credentials", () => {
    cy.fixture('user.json').then(user => {
        signIn.fillEmailField(user.email);
    })

    signIn.fillPasswordField('teste@teste_');
    signIn.clickInSignInButton();
});

Then("the system will display welcome with user's name on the top", () => {
    cy.fixture('user.json').then(user => {
        signIn.verifyThatWillAppearUserName(`Welcome, ${user.first_name} ${user.last_name}!`)
    })
});

Then("the system will display this error message {string}", (message) => {
    signIn.verifyThatWillAppearErrorMessage(message);
});