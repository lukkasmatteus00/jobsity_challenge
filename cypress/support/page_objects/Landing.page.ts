/// <reference types = "cypress"/>

export default class Landing {

    clickInCreateAnAccount() {
        cy.clickInElementByXpath(`//*[@class="page-header"]//*[contains(text(), "Create an Account")]`);
    }

    clickInSignIn() {
        cy.clickInElementByXpath(`//*[@class="page-header"]//*[contains(text(), "Sign In")]`);
    }
}
