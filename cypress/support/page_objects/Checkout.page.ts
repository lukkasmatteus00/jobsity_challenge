/// <reference types = "cypress"/>

export default class Checkout {

    fillStreetAddressPart1Field(name: string) {
        cy.typeInElementByXpath(`//*[@name="shippingAddress.street.0"]//input`, name);
    }

    fillStreetAddressPart2Field(name: string) {
        cy.typeInElementByXpath(`//*[@name="shippingAddress.street.1"]//input`, name);
    }

    fillStreetAddressPart3Field(name: string) {
        cy.typeInElementByXpath(`//*[@name="shippingAddress.street.2"]//input`, name);
    }

    fillCityField(name: string) {
        cy.typeInElementByXpath(`//*[@name="shippingAddress.city"]//input`, name);
    }

    fillZipCodeField(name: string) {
        cy.typeInElementByXpath(`//*[@name="shippingAddress.postcode"]//input`, name);
    }

    fillPhoneNumberField(name: string) {
        cy.typeInElementByXpath(`//*[@name="shippingAddress.telephone"]//input`, name);
    }

    selectAnCountry(name: string) {
        cy.selectOptionByXpath(`//*[@name="shippingAddress.country_id"]//select`, name);
    }

    selectAnStateProvince(name: string) {
        cy.selectOptionByXpath(`//*[@name="shippingAddress.region_id"]//select`, name);
    }

    selectAShippingMethods(name: string) {
        cy.clickInElementByXpath(`//*[@id="checkout-shipping-method-load"]//*[contains(text(),"${name}")]/parent::tr//input`);
    }

    clickInNextButton() {
        cy.clickInElementByXpath(`//*[@class="button action continue primary"]`);
    }

    /**
     * After payment
     */

    verifyThatWillAppearThanksMessage(text: string) {
        cy.assertByXpath(`//*[@data-ui-id="page-title-wrapper"]`, text);
    }

    verifyThatWillAppearOrderNumber(text: string) {
        cy.assertByXpath(`//*[@class="checkout-success"]//p[1]`, text);
    }

    verifyThatWillAppearOrderConfirmationMessage(text: string) {
        cy.assertByXpath(`//*[@class="checkout-success"]//p[2]`, text);
    }

    clickInPrintReceiptLink() {
        cy.clickInElementByXpath(`//*[@class="action print"]`);
    }

    clickInContinueShoppingButton() {
        cy.clickInElementByXpath(`//*[@class="action primary continue"]`);
    }
}
