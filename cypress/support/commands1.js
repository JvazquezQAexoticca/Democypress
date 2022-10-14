


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



