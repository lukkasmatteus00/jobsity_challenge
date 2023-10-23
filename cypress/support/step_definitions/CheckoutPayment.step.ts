/// <reference types="cypress"/>

import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Checkout from "../page_objects/Checkout.page";
import Payment from "../page_objects/Payment.page";
const Leite = require('leite')

const leite = new Leite()
const checkout = new Checkout();
const payment = new Payment();

When("I fill all shipping address information", () => {
    checkout.fillStreetAddressPart1Field(leite.localizacao.logradouro());
    checkout.fillStreetAddressPart2Field(leite.localizacao.complemento());
    checkout.fillCityField(leite.localizacao.cidade());
    checkout.fillZipCodeField(leite.localizacao.cep());
    checkout.fillPhoneNumberField(leite.pessoa.cpf());
    checkout.selectAnCountry('Brazil');
    checkout.selectAnStateProvince('Distrito Federal');
    checkout.selectAShippingMethods('Fixed');

    checkout.clickInNextButton();
});

When("I click in place order to confirm it", () => {
    payment.verifyShippingMethod('Flat Rate - Fixed');
    payment.clickPlaceOrderButton();
});

Then("The system will display thanks message for my purchase", () => {
    cy.wait(10 * 1000);
    checkout.verifyThatWillAppearThanksMessage('Thank you for your purchase!');
    checkout.verifyThatWillAppearOrderNumber('Your order number is:');
    checkout.verifyThatWillAppearOrderConfirmationMessage("We'll email you an order confirmation with details and tracking info.");
});
