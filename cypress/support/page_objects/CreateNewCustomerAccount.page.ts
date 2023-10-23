/// <reference types = "cypress"/>
export default class CreateNewCustomerAccount {

    fillFirstNameField(firstName: string) {
        cy.typeInElementByXpath(`//*[@id="firstname"]`, firstName);
    }

    fillLastNameField(lastName: string) {
        cy.typeInElementByXpath(`//*[@id="lastname"]`, lastName);
    }

    fillEmailField(email: string) {
        cy.typeInElementByXpath(`//*[@id="email_address"]`, email);
    }

    fillPasswordField(password: string) {
        cy.typeInElementByXpath(`//*[@id="password"]`, password);
    }

    fillConfirmPasswordField(password: string) {
        cy.typeInElementByXpath(`//*[@id="password-confirmation"]`, password);
    }

    clickInCreateAnAccountButton() {
        cy.clickInElementByXpath(`//*[@title="Create an Account"]`);
    }

    verifyThatFirstNameIsMandatoryField(message: string) {
        cy.assertByXpath(`//*[@id="firstname-error"]`, message);
    }

    verifyThatLastNameIsMandatoryField(message: string) {
        cy.assertByXpath(`//*[@id="lastname-error"]`, message);
    }

    verifyThatEmailIsMandatoryField(message: string) {
        cy.assertByXpath(`//*[@id="email_address-error"]`, message);
    }

    verifyThatPasswordIsMandatoryField(message: string) {
        cy.assertByXpath(`//*[@id="password-error"]`, message);
    }

    verifyThatConfirmPasswordIsMandatoryField(message: string) {
        cy.assertByXpath(`//*[@id="password-confirmation-error"]`, message);
    }

}
