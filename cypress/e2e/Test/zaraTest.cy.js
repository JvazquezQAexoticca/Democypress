
describe('Prueba de la página de Zara', function () {
    //Example of a custom method that can be used in the test and normaly goes in support folder
     const clickMethod = (id) => {
          cy.get(`${id}`)
           .click()
      };

    // Selectors idealy should be in a separate file as a pages, constans or selectors file
    const menuLogo = '[data-qa-id="layout-header-toggle-menu"]'
    const cart = '[data-qa-id="layout-header-go-to-cart"]'
    const cartCount = '[data-qa-id="layout-header-go-to-cart-items-count"]'
    const mediaImage = '[data-qa-qualifier="media-image"]';
    const productClick = '[data-qa-action="product-click"]';
    const continueButton = '[data-qa-id="shop-continue"]';
    const size = '[data-qa-action="size-in-stock"]';
    const initSession = '[data-qa-id="oauth-logon-button"]';

    before(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        cy.visit("https://www.zara.com/es/")
    })

    it('Verificar que la página contiene el texto "Zara"', function () {
        //Example of a click method, a custom method that can be used in the test and normaly goes in commands or a support folder
        clickMethod('#onetrust-accept-btn-handler')
        clickMethod(menuLogo)
        cy.get(cart).click({force: true})

        //Example of a loop to check all the images and prices
        cy.get(mediaImage).each(($el) => {
                cy.wrap($el).should('have.attr', 'src');
        });

        //Example of a loop to click on a random product
        cy.get(productClick).then((elements) => {
            const randomIndex = Math.floor(Math.random() * elements.length);
            cy.wrap(elements[randomIndex]).trigger('mouseover').click();
        }
        ) 
        //Some examples of contains or get by text or tag. ideally we should use data-qa-id or data-qa-qualifier
        cy.contains('Añadir').click()
        cy.get(size).first().scrollIntoView().click()
        cy.get('.loader--basic').should('not.exist')
        clickMethod(cartCount)
        //Example about get a text and make and assertion
        cy.get(cartCount).invoke('text').then((text) => {
            expect(text.trim()).to.include('1')
        }); 

        clickMethod(continueButton)
        cy.get(initSession).should('be.visible')
    })
})   