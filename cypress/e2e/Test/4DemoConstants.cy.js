/// <reference types="Cypress"/>    

//Importamos Clases de Page Objects
import Homeconstant from '../../support/PagesObjects/Homeconstant'


//Demo of case using constant for specific modules 
describe('Primer conjunto clearde casos de prueba', function () {
    const homelogin = new Homeconstant()


    beforeEach(() => {
        // ingresamos a la pagina    
        cy.visit("https://www.exoticca.com/us")
    })

    //Demo using constants only
    it.only('Hacer una compra', function () {
        //Correct login test
        cy.get(homelogin.Loginheader).click()
        cy.get(homelogin.Drodownlogin).click()
        cy.get(homelogin.Inputlognmail).type('testcypressexoticca@mail.com')
        cy.get(homelogin.Inputpass).type('Test001')
        cy.get(homelogin.Submitlogin).contains('Log in').click()
        //Go to personal space
        cy.get(homelogin.Dropwonmyaccout).click()
        //Cualquier enlace dentro popover que contenga myaccount
        cy.get(homelogin.Clickmyaccount).contains('My bookings').click()
        //Click in CTA to go back Home
        cy.get(homelogin.Clickhome).click()



    })
})