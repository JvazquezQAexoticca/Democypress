/// <reference types="Cypress"/>    

//Import class
import Step2 from '../../support/PagesObjects/Step2'


//Demo of case using constant for specific modules 
//This is a Demo of user performance typical user behave
describe('Journey of user', function () {
    const step2 = new Step2()


    beforeEach(() => {
        // Visit site  
        cy.visit("https://www.exoticca.com/us")
    })
 
    //Userpath with Commands
    Cypress.config('defaultCommandTimeout',27000)
    it('Userpath', function () {
        //Step1.HOME Userpath login
        //Step2.3.PERSONAL> LANDING Userpath see Ireland trips
        cy.Selectdestinationnavbar()
        //Step 4.5.HOME> PDP Go Back Home and click first cards of main offer slider
        cy.Gohomeclickcards()
        //Step 6.PDP  try diferent departures
        cy.Trydepartures()
        //Step 7Upgrade the accomodattion plan
        cy.Changeaccomodationplan()
        //Step 8 [PDP] Click see pricese
        cy.Seeprices()
        //Step8	Click see prices and select first rate available
        cy.Selectbestorfirst()
        //Step 10 I pick the CXL policy
        cy.Value2FlexpolicyPLusStep1()
        //Step 11 I search for help in the header dropdown
        cy.ClickhelpinNavbar()
        //Step 12 Change my mind go to Step 2
        cy.Clicktostep2()
        //Step 13 Go back to step 1 and change the CXL
        cy.GobackSTEP1()
        cy.Value1FlexpolicyFLEXstep1()
        //Step 14 Go to Step 2
        cy.Clicktostep2()
        //Step 15 Go back to step 1 and change the tour
        cy.GobackSTEP1()
        cy.Addtour()
        cy.Clicktostep2()
        //Step 16 Fill the form of paxes
        cy.PassangersFillLoginform()
        cy.Rellenarformulariol()
        //Step 17 Continue to payment
        //Step 18 Go back to step 2
        cy.go('back')
        //Step 19 Change my wrong ID
        cy.get(step2.Id).clear().type('222222222D')
        cy.Clicktostep3()
        //Step 20 Download PDF
        cy.url().should('contain', 'my-trip/payment');
        cy.get(step2.Pdf).click()


    })
})