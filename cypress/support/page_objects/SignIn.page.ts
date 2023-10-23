/// <reference types = "cypress"/>

export default class SignIn {

    fillEmailField(email: string) {
        cy.typeInElementByXpath(`//*[@id="email"]`, email);
    }

    fillPasswordField(password: string) {
        cy.typeInElementByXpath(`//*[@id="pass"]`, password);
    }

    clickInSignInButton() {
        cy.clickInElementByXpath(`//*[@id="send2"]`);
    }

    clickInCreateAnAccountButton() {
        cy.clickInElementByXpath(`//*[@class="action create primary"]`);
    }
    
    clickInForgotYourPasswordLink() {
        cy.clickInElementByXpath(`//*[@class="action remind"]`);
    }

    verifyThatWillAppearUserName(message: any) {
        cy.assertByXpath(`//*[@class="logged-in"]`, message);
    }

    verifyThatWillAppearErrorMessage(message: any) {
        cy.assertByXpath(`//*[@data-ui-id="message-error"]`, message);
    }
}
