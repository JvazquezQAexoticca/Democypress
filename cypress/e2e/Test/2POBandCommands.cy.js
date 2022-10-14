/// <reference types="Cypress"/>    

//Importamos Clases de Page Objects
import HomePage from '../../support/PagesObjects/HomePage'
import Paso1Page from '../../support/PagesObjects/Paso1Page'
import Paso2Page from '../../support/PagesObjects/Paso2Page'
import Paso3Page from '../../support/PagesObjects/Paso3Page'

//Suite de casos que contiene cada caso 
describe('Primer conjunto clearde casos de prueba', function () {
    const homePage = new HomePage()
    const paso1Page = new Paso1Page()
    const paso2Page = new Paso2Page()
    const paso3Page = new Paso3Page()


    beforeEach(() => {
        // Visit the URL  
        cy.visit("https://www.exoticca.com/us")
    })
 
    //Demo using Commands and Page Object Model together
    Cypress.config('defaultCommandTimeout',24000)
    it('Hacer una compra', function () {
        homePage.Cookiesacept().click()
        homePage.Submenunavbar().click()
        homePage.submenueuropa().click()
        homePage.submenualemania().click()
        paso1Page.AsercionDE().should('contain.text', 'A')
        paso1Page.clickgotostep2().click()
        paso2Page.Selectorlandingdestination().click()
        paso2Page.Selectioncityindropdown().click()
        paso2Page.Seepricesstep2().click()
        cy.Seleccionarfecha()
        paso2Page.CTAstep2().click()
        paso3Page.Mailregistrationfiedlstep2().type('Maildeprueba4@prueba.com')
        paso3Page.TLFregistrationfiedlstep2().type('00000000000')
        paso2Page.CTAstep2().click()
        cy.Rellenarformulariol()
       


    })
})