


// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });



// [PDP] New calendar version V2
Cypress.Commands.add('SelectbestpriceV2',{ scrollBehavior: 'center' },() => {  
  cy.get('div[class^="NavArrow__StyledNavWrapper-sc-14vt347-0 jpszyW right"]').click(); 
  cy.get('div[class^="NavArrow__StyledNavWrapper-sc-14vt347-0 jpszyW right"]').click(); 
  cy.get('[class="CalendarDayPrices__StyledBestPriceBanner-sc-z9rk4x-5 gdsEKb"]').eq(1).click({force:true})
  cy.log('The BEST RATE has been selected')
});

//[LANDINGPRODUCT] Change my mind, go back to Home Cick first card  of offers slider
Cypress.Commands.add('Gohomeclickcards',{ scrollBehavior: 'center' },() => {
  cy.get('[data-test="logo-header"]').click()
  cy.get('[class^="CardCampaign__CardLink"]').eq(3).click() 

});

//Funcion de comparar total con precio a pagar
Cypress.Commands.add('Compararprecioypago',() => {
  var suma = 0
  
  cy.get(':nth-child(2) > .FlexColumn__StyledFlexColumn-sc-2z8aww-0 > .TripSummary__Total-sc-rznf51-7 > :nth-child(2)').each(($el) => {
      const monto = $el.text()
      var precio = monto.replace('€', '')
      suma = Number(suma) + Number(precio)
      cy.log("La suma es: " + suma)
  })

  cy.get('.TripSummary__PaymentLine-sc-rznf51-10 > :nth-child(2)').then(function ($el) {
      const monto = $el.text()
      var total = monto.replace('€', '')
      expect(Number(total)).to.equal(Number(suma))
      cy.log(total + " Precio total igual a precio a pagar: " + suma)
  })  
})

