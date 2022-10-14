/// <reference types="Cypress"/>    

//Importamos Clases de Page Objects
import HomePage from '../../support/PagesObjects/HomePage'
import Paso1Page from '../../support/PagesObjects/Paso1Page'
import Paso2Page from '../../support/PagesObjects/Paso2Page'
import Paso3Page from '../../support/PagesObjects/Paso3Page'

//Suite de casos que contiene cada caso 
describe('Primer conjunto de casos de prueba', function () {
    const homePage = new HomePage()
    const paso1Page = new Paso1Page()
    const paso2Page = new Paso2Page()
    const paso3Page = new Paso3Page()


    beforeEach(() => {
        // ingresamos a la pagina    
        cy.visit("https://www.exoticca.com/es")
    })
 
    //Page OBject Model
    it('Hacer una compra', function () {
        homePage.Cookiesacept().click()
        homePage.Acceslogin().click()
        homePage.Login().click()
        homePage.Accesbuttom().click()
        homePage.Fielasertionmail().should('contain.text', 'Campo obligatorio')
        homePage.FieldeasertionPassword().should('contain.text', 'Campo obligatorio')
        homePage.Closeloginpoppup().click()
        homePage.Acceslogin().click()
        homePage.Login().click()
        homePage.Accesbuttom().click()
        homePage.Fielasertionmail().should('contain.text', 'Campo obligatorio')
        homePage.FieldeasertionPassword().should('contain.text', 'Campo obligatorio')
        homePage.Maillogininnput().type('mailerror')
        homePage.Accesbuttom().click()
        homePage.Fielasertionmail().should('contain.text', 'Introduce un email válido')
        homePage.Maillogininnput().clear().type('Mailprueba001@mail.com')
        homePage.Passwrodlogininput().type('Prueba001')
        homePage.Accesbuttom().click()
        homePage.Diverrorlogin().should('be.visible')


    })
})