/// <reference types="Cypress"/>    


//This is a Demo of user performance typical user behave
describe('Change the CXl policy', function () {


    beforeEach(() => {
        // Visit site  
        cy.visit("https://www.exoticca.com/us")
    })
 
    //Userpath with Commands
    Cypress.config('defaultCommandTimeout',20000)
    it('Userpath', function () {
        //Userpath click first card of firs slider and go to PDP
        cy.HomeClickfirstcard()
        //User go back to step1 and seelect Bestprice
        cy.Selectfirstprice()
        //Userpath change go to step 2 and back to change repetly CXl policy
        cy.Value2FlexpolicyPLusStep1()
        cy.PassangersFillLoginform()
        cy.GobackSTEP1()
        cy.Value1FlexpolicyFLEXstep1()
        cy.get('button[type="button"]').contains('Continue').click()
        cy.GobackSTEP1()
        cy.Value0Flexpolicybasictep1()
        cy.get('button[type="button"]').contains('Continue').click()
        cy.GobackSTEP1()


    })
})