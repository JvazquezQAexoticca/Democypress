/// <reference types="Cypress"/>    


//This is a Demo to show how easy could be the code
describe('Primer conjunto clearde casos de prueba', function () {


    beforeEach(() => {
        // ingresamos a la pagina    
        cy.visit("https://www.exoticca.com/us")
    })
 
    //Happypath with Commands
    Cypress.config('defaultCommandTimeout',24000)
    it('Happypath', function () {
        //Hapypath click first card of firs slider and go to PDP
        cy.HomeClickfirstcard()
        //Hapypath select first price of calendar
        cy.Selectfirstprice()
        //Hapypath change to Flex Cxl policy in Perzonalization Step 1 WCO
        cy.Flexorskip()
        //Hapypath Fill login form in Passangers Step 2 WCO
        cy.Clicktostep3()
        cy.PassangersFillLoginform()
        //Hapypath click first card of firs slider and go to PDP        
        cy.Rellenarformulariol()
        //Hapypath click first card of firs slider and go to PDP
        cy.Paymentconfirmation()

    })
})