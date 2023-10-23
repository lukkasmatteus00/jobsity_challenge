
import { customTimeouts } from '../helpers/timeouts';

declare global {
    namespace Cypress {
        interface Chainable {
            typeInElementByXpath: ($element: string, text: any, press?: string) => Chainable;
            assertByXpath: ($element: string, text: string) => Chainable;
            selectOptionByXpath: ($element: string, text: string) => Chainable;
            clickInElementByXpath: ($element: string) => Chainable;
            containsValueOnScreen: (text: any) => Chainable;
            returnIframeElements: () => Chainable;
            assertAttributeByXpath: ($element: string, text: string) => Chainable;
        }
    }
}

/**
 * You need to inform a xpath element
 * 
 * @param $element 
 * @param text 
 */
function typeIn($element: string, text: any, press?: string) {
    cy.xpath($element, { timeout: customTimeouts.TIMEOUT_LOW })
        .should('be.visible')
        .first()
        .clear({ force: true })
        .type(press === undefined ? text : `${text}{${press}}`);
}

/**
 * You need to inform a xpath element
 * 
 * @param $element 
 * @param text 
 */
function assertByXpath($element: string, text: string) {
    cy.xpath($element, { timeout: customTimeouts.TIMEOUT_LOW })
        .should('be.visible')
        .first()
        .and($el => expect($el.text().trim(), 'It needs to contain this value on the screen: ',).to.contain(text));
}

/**
 * You need to inform a xpath element
 * 
 * @param $element 
 * @param text 
 */
function assertAttributeByXpath($element: string, text: string) {
    cy.xpath($element, { timeout: customTimeouts.TIMEOUT_LOW })
        .should('be.visible')
        .first()
        .and('have.value', text);
}

/**
 * You need to inform a xpath element
 * 
 * @param $element 
 * @param text 
 */
function containsByXpath(text: any) {
    cy.xpath('//*[data-container="body"]', { timeout: customTimeouts.TIMEOUT_LOW })
        .contains(text);
}

function getIframe() {
    return cy.get(`iframe[id="Your project: 'Test Project'"]`, { timeout: customTimeouts.TIMEOUT_MEDIUM })
        .its('0.contentDocument.body')
        .should('not.be.undefined')
        .then(cy.wrap)
}
/**
 * You need to inform a xpath element
 * 
 * @param $element 
 * @param text 
 */
function selectByXpath($element: string, text: string) {
    cy.xpath($element, { timeout: customTimeouts.TIMEOUT_LOW })
        .should('be.visible')
        .select(text);
}

/**
 * You need to inform a xpath element
 * 
 * @param $element 
 */
function clickIn($element: string) {
    cy.xpath($element, { timeout: customTimeouts.TIMEOUT_LOW })
        .should('be.visible')
        .first()
        .click({ force: true });
}

Cypress.Commands.add('typeInElementByXpath', typeIn);
Cypress.Commands.add('clickInElementByXpath', clickIn);
Cypress.Commands.add('assertByXpath', assertByXpath);
Cypress.Commands.add('selectOptionByXpath', selectByXpath);
Cypress.Commands.add('containsValueOnScreen', containsByXpath);
Cypress.Commands.add('returnIframeElements', getIframe);
Cypress.Commands.add('assertAttributeByXpath', assertAttributeByXpath);

