/// <reference types = "cypress"/>

export default class Payment {

    clickPlaceOrderButton() {
        cy.clickInElementByXpath(`//*[@class="action primary checkout"]`);
    }

    verifyShippingMethod(text: string) {
        cy.assertByXpath(`//*[@class="ship-via"]//*[@class="shipping-information-content"]`, text);
    }
    
    verifyShipTo(text: string) {
        cy.assertByXpath(`//*[@class="shipping-information"]//*[@class="shipping-information-content"]`, text);
    }
    
    verifyCartSubTotal(text: string) {
        cy.assertByXpath(`//*[@class="opc-block-summary"]//*[@class="totals sub"]//*[@class="amount"]//span`, text);
    }
    
    verifyShippingtFee(text: string) {
        cy.assertByXpath(`//*[@class="opc-block-summary"]//*[@class="totals shipping excl"]//*[@class="amount"]//span`, text);
    }
    verifyOrdeTotal(text: string) {
        cy.assertByXpath(`//*[@class="opc-block-summary"]//*[@class="grand totals"]//*[@class="amount"]//span`, text);
    }
}
