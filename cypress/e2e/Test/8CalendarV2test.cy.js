/// <reference types="Cypress"/>    

//Import class
import Step2 from '../../support/PagesObjects/Step2'


//Demo of case using constant for specific modules 
//This is a Demo of user performance typical user behave
describe('Journey of user', function () {
    const step2 = new Step2()


    beforeEach(() => {
        // Visit site  
        cy.visit("https://www.exoticca.com/us/tours/europe/12881-ancient-ruins-paros-santorini?calendar=v2")
    })
 
    //Userpath with Commands
    Cypress.config('defaultCommandTimeout',10000)
    it('Userpath', function () {

        //Step9	Click see prices and select first rate available
        cy.SelectbestpriceV2()

    })
})