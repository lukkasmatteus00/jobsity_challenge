/// <reference types = "cypress"/>

export default class Item {

    selectSize(size: number) {
        cy.clickInElementByXpath(`//*[@option-label="${size}"]`);
    }

    selectColor(color: string) {
        cy.clickInElementByXpath(`//*[@option-label="${color}"]`);
    }

    clickInAddToCart() {
        cy.clickInElementByXpath(`//*[@id="product-addtocart-button"]`);
    }

    clickInAddToWishList() {
        cy.clickInElementByXpath(`//*[@class="action towishlist"]`);
    }

    informQuantity(qty: number) {
        cy.typeInElementByXpath(`//*[@id="qty"]`, qty);
    }
   
    verifyMandatoryField(message: string) {
        cy.assertByXpath(`//*[@class="mage-error"]`, message);
    }

}
