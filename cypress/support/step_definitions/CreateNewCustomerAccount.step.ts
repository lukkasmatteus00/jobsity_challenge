/// <reference types="cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import CreateNewCustomerAccount from "../page_objects/CreateNewCustomerAccount.page";
import Navbar from "../page_objects/Navbar.page";
const Leite = require('leite')
const leite = new Leite()
const path = "cypress/fixtures";

const createNewCustomerAccount = new CreateNewCustomerAccount();
const navbar = new Navbar();

When("I want to create a new customer accounts", () => {

    const user = {
        email: leite.pessoa.email(),
        first_name: leite.pessoa.primeiroNome({ nomeDoMeio: true }),
        last_name: leite.pessoa.sobrenome()
    }

    createNewCustomerAccount.fillFirstNameField(user.first_name);
    createNewCustomerAccount.fillLastNameField(user.last_name);
    createNewCustomerAccount.fillEmailField(user.email);

    cy.fixture('password.json').then(password => {
        createNewCustomerAccount.fillPasswordField(password.password);
        createNewCustomerAccount.fillConfirmPasswordField(password.password);
    })

    createNewCustomerAccount.clickInCreateAnAccountButton();

    cy.writeFile(`${path}/user.json`, user);
});

Then("the system will display this message {string}", (message) => {
    navbar.verifyThatWillAppearMessage(message);
})