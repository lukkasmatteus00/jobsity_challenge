/// <reference types="cypress"/>

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import Item from "../page_objects/Item.page";
import Navbar from "../page_objects/Navbar.page";

const navbar = new Navbar();
const item = new Item();

Given("I want to seach for {string} product", (name) => {
    navbar.searchForAProduct(name);
    navbar.clickInTheFirstItem();
});

When("I want to select some product characteristics", (datatable) => {
    Object(datatable).hashes().forEach(row => {
        item.selectColor(row.color);
        item.selectSize(row.size);
        item.informQuantity(row.quantity);
    });
});

When("I click in add to Cart button", () => {
    item.clickInAddToCart();
});