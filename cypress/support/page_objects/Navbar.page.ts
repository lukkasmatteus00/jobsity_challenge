/// <reference types = "cypress"/>

export default class NavBar {

    searchForAProduct(name: any) {
        cy.typeInElementByXpath(`//*[@id="search"]`, name, 'enter');
    }

    verifyThatRemoveItemMessage(text: any) {
        cy.assertByXpath(`//*[contains(@class, 'confirm')]//*[@class="modal-content"]`, text);
    }

    clickInTheFirstItem() {
        cy.clickInElementByXpath(`//*[@class="product-image-photo"]`);
    }
    
    clickInOkButton() {
        cy.clickInElementByXpath(`//*[@class="action-primary action-accept"]`);
    }

    verifyProductName(name: any) {
        cy.assertByXpath(`//*[@class="product-item-name"]`, name);
    }

    verifyProductSize(name: any) {
        cy.assertByXpath(`//*[@class="product options list"]//dd[1]`, name);
    }

    verifyProductColor(name: any) {
        cy.assertByXpath(`//*[@class="product options list"]//dd[2]`, name);
    }

    verifyQuantity(number: any) {
        cy.assertAttributeByXpath(`//*[@class="details-qty qty"]//input`, number);
    }

    clickInSeeDetails() {
        cy.clickInElementByXpath(`//*[@data-role="title"]//span`);
    }

    clickInCartIcon() {
        cy.clickInElementByXpath(`//*[@class="action showcart"]`);
    }

    clickInProceedToCheckout() {
        cy.clickInElementByXpath(`//*[@id="top-cart-btn-checkout"]`);
    }

    clickInEditIcon() {
        cy.clickInElementByXpath(`//*[@class="action edit"]`);
    }

    clickInDeleteIcon() {
        cy.clickInElementByXpath(`//*[@class="action delete"]`);
    }

    clickInViewAndEditCart() {
        cy.clickInElementByXpath(`//*[@class="action viewcart"]`);
    }

    informQuantity(qty: number) {
        cy.typeInElementByXpath(`//*[@class="details-qty qty"]//input`, qty);
    }

    verifyThatWillAppearMessage(message: any) {
        cy.assertByXpath(`//*[@data-ui-id="message-success"]`, message);
    }

    verifyHowManyItemWasAddIntoCart(message: any) {
        cy.assertByXpath(`//*[@class="counter-number"]`, message);
    }
}
