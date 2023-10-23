/// <reference types = "cypress"/>

export default class Cart {

    verifyProductName(name: any) {
        cy.returnIframeElements()
            .find(`//*[@class="product-item-name"]//strong`)
            .first()
            .and($el => expect(
                $el.text().trim(), 'It needs to contain this value on the screen: ')
                .to
                .contain(name));
    }

    verifyProductSize(name: any) {
        cy.returnIframeElements()
            .find(`//*[@class="product-item-name"]//*[@class="item-options"]//dd[1]`)
            .first()
            .and($el => expect(
                $el.text().trim(), 'It needs to contain this value on the screen: ')
                .to
                .contain(name));
    }

    verifyProductColor(name: any) {
        cy.returnIframeElements()
            .find(`//*[@class="product-item-name"]//*[@class="item-options"]//dd[2]`)
            .first()
            .and($el => expect(
                $el.text().trim(), 'It needs to contain this value on the screen: ')
                .to
                .contain(name));
    }

    clickInProceedToCheckout() {
        cy.returnIframeElements()
            .find(`//*[@title="Proceed to Checkout"]`)
            .first()
            .click();
    }

    verifyQuantity(number: any) {
        cy.returnIframeElements()
            .find(`//*[@data-role="cart-item-qty"]`)
            .first()
            .and($el => expect(
                $el.text().trim(), 'It needs to contain this value on the screen: ')
                .to
                .contain(number));
    }

    typeQuantity(number: any) {
        cy.returnIframeElements()
            .find(`//*[@data-role="cart-item-qty"]`)
            .first()
            .clear()
            .type(number);
    }
}
