/// <reference types="cypress"/>

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Navbar from "../page_objects/Navbar.page";

const navbar = new Navbar();
const TIME_OUT = 5 * 1000;

When("I click in See Details", () => {
    navbar.clickInCartIcon();
    navbar.clickInSeeDetails();
});

When("I click in delete item icon", () => {
    navbar.clickInCartIcon();
    navbar.clickInDeleteIcon();
});

When("I click in Proceed to checkout button", () => {
    navbar.clickInCartIcon();
    navbar.clickInProceedToCheckout();
});

When("I click in view and Edit Cart", () => {
    navbar.clickInCartIcon();
    navbar.clickInViewAndEditCart();
});

Then("The system will display a modal with this message {string}", (text) => {
    navbar.verifyThatRemoveItemMessage(text);
    navbar.clickInOkButton();
});

Then("I want to see how many items was add into cart {string}", (item) => {
    cy.wait(TIME_OUT);
    navbar.verifyHowManyItemWasAddIntoCart(item);
});

Then("I want to see the same product characteristics that I choose", (datatable) => {
    Object(datatable).hashes().forEach(row => {
        navbar.verifyQuantity(row.quantity);
        navbar.verifyProductColor(row.color);
        navbar.verifyProductName(row.name);
        navbar.verifyProductSize(row.size);
    });
});
