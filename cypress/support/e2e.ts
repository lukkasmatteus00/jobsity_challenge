import './commands/DSL.command'

require('cypress-xpath');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});