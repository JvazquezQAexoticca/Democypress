
import 'cypress-if'

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


//[HOME] User land in Home page login
Cypress.Commands.add('Login',() => {
  cy.get('[data-test="my-account"]').click()
  cy.get('div a[href="#login"]').click()
  cy.get('input[id="email"]').type('testcypressexoticca@mail.com')
  cy.get('input[id="pass"]').type('Test001')
  cy.get('button[type="submit"] >span').contains('Log in').click()
  //Go to Personal space> Exoticca Wallet
  cy.get('[data-test="my-account"]').click()
  cy.get('div[data-test="popover-myAccount"] a[class^="MyAccount__Link"]').contains('My bookings').click()
});

//[PERSONAL SPACE] Open the Navbar and go to Trips in Europe
Cypress.Commands.add('Selectdestinationnavbar',() => {
  cy.get('[data-test="menu-continent"] > svg').click()
  cy.get('[data-test="menu-continent"] > :nth-child(7)').click()
  cy.get('[data-test="country-element-menu"]>[title="Trips to Ireland"]').click()
});


//[LANDINGPRODUCT] Change my mind, go back to Home Cick first card  of offers slider
Cypress.Commands.add('Gohomeclickcards',{ scrollBehavior: 'center' },() => {
  cy.get('[data-test="logo-header"]').click()
  cy.get('[class^="CardCampaign__CardLink"]').eq(3).click() 

});

//[PDP] Try diferent departures
Cypress.Commands.add('Trydepartures',() => {
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').eq(4).click()
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').eq(5).click()
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').eq(3).click()
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').eq(1).click()
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').eq(2).click()
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').eq(8).click()
});

//[PDP] Upgrade the accomodattion plan
Cypress.Commands.add('Changeaccomodationplan',() => {
  cy.get('label[for="category"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="category"] + div ul > li').eq(1).click()
  cy.get('label[for="category"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="category"] + div ul > li').eq(0).click()


});

//Funcion de comparar precios en paso 3 total menor que subtotal
Cypress.Commands.add('Totalgreaterthansubottal',() => {
  var suma = 0
  
  cy.get(':nth-child(1) > .TripSummary__BreakdownValue-sc-rznf51-6 > [data-testid="small-text"]').each(($el) => {
      const monto = $el.text()
      var precio = monto.replace('$', '')
      suma = Number(suma) + Number(precio)
      cy.log("La suma es: " + suma)
  })

  cy.get('.Payments__TotalFinalLine-sc-l86bkr-0 > strong').then(function ($el) {
      const monto = $el.text()
      var total = monto.replace('$', '')
      expect(Number(total)).to.greaterThan(Number(suma))
      cy.log(total + " total mayor que subtotal: " + suma)
  })  
})


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




//[HOME] Click first card in the offers banner slider
Cypress.Commands.add('HomeClickfirstcard',() => {
  cy.get('[class^="CardCampaign__CardLink"]').first().click();
  cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
  cy.get('label[for="airport"] + div ul > li').first().click();
  cy.log('Clicked first offer')

});


// [PDP]Select first price
Cypress.Commands.add('Selectfirstprice',() => {   
      cy.get('#sidebar').contains('See prices').click();
      cy.get('[role="dialog"]').contains('Choose your departure date');
      cy.get('[role="dialog"]').contains('Next').click();
      cy.get('[role="dialog"]').contains('Next').click();
      cy.get('[class="Calendar__DayCell-sc-1fpdu-1 jSrscM withPrice"]').eq(2).click({force:true})
    
    });

// [PDP]Select best price or first price
Cypress.Commands.add('Selectbestorfirst',() => { 
  cy.get('[class="Calendar__BestPrice-sc-1fpdu-6 kYVqeq 99bestPrice"]').should('not.exist').then((Result)=>{this.skip()})
  cy.get('[class="Calendar__DayCell-sc-1fpdu-1 jSrscM withPrice"]').eq(2).click({force:true})

  //   if (cy.get('[role="dialog"]').contains('BEST PRICE')) {
  //   cy.get('[class="Calendar__BestPrice-sc-1fpdu-6 kYVqeq bestPrice"]').eq(1).click({force:true})
  // }  {
  //   //else
  //   // Not best price, any rate
  //   cy.get('[class="Calendar__DayCell-sc-1fpdu-1 jSrscM withPrice"]').eq(2).click({force:true})
  // }

});



// [PDP] Click see prices
Cypress.Commands.add('Seeprices',() => {   
  cy.get('#sidebar').contains('See prices').click();   

})

// [PDP] Click best price available
Cypress.Commands.add('Selectbestprice',() => {   
  cy.get('[role="dialog"]').contains('Next').click();
  cy.get('[role="dialog"]').contains('Next').click();
  cy.get('[class="Calendar__BestPrice-sc-1fpdu-6 kYVqeq bestPrice"]').eq(2).click({force:true})
  cy.log('The BEST RATE has been selected')
  //[role="dialog"]+div[data-visible="true"] table .withPrice > [class="Calendar__DayPrice-sc-1fpdu-4 faJduk"]

});

// [PDP] New calendar version V2
Cypress.Commands.add('SelectbestpriceV2',{ scrollBehavior: 'center' },() => {  
  cy.get('div[class^="NavArrow__StyledNavWrapper-sc-14vt347-0 jpszyW right"]').click(); 
  cy.get('div[class^="NavArrow__StyledNavWrapper-sc-14vt347-0 jpszyW right"]').click(); 
  cy.get('[class="CalendarDayPrices__StyledBestPriceBanner-sc-z9rk4x-5 gdsEKb"]').eq(1).click({force:true})
  cy.log('The BEST RATE has been selected')
  //[role="dialog"]+div[data-visible="true"] table .withPrice > [class="Calendar__DayPrice-sc-1fpdu-4 faJduk"]
  //class="CalendarDayPrices__StyledBestPrice-sc-z9rk4x-4 jvFSrF"
});

//Step9	Continue to step 2
Cypress.Commands.add('Clicktostep2',() => {
  cy.get('button[type="button"]').contains('Continue').click()
});


//Step 10  1 I search for help in the header dropdown
Cypress.Commands.add('ClickhelpinNavbar',{ scrollBehavior: 'center' },() => {
cy.get('[data-test="help-popover"]').dblclick()
});

//Step 15 Go back to step 1 and change the tour
Cypress.Commands.add('Addtour',() => {
  cy.get('div[class="Card__CardWrapper-sc-1bujgl2-0 rmiBe"] [data-testid="button"]').eq(0).click({force:true})
  cy.get('div[class="Card__CardWrapper-sc-1bujgl2-0 rmiBe"] [data-testid="button"]').eq(1).click({force:true})

});

//Step 19	Continue to step 3
Cypress.Commands.add('Clicktostep3',() => {
  cy.contains('a button', 'Continue').click();
});


// [STEP1] WCO PERSONALIZATION: should select the FLEX value or skip step
Cypress.Commands.add('Flexorskip',{ scrollBehavior: 'center' }, () => {  
    cy.get('[class^=CancellationPolicy__Disclaimer]').parent().find('article').eq(2).contains('per person')
    .click()
    .then()
    .log('Cxl not available')
    
});


//[STEP1] WCO PERSONALIZATION: should select the flex+ policy
Cypress.Commands.add('Value2FlexpolicyPLusStep1',{ scrollBehavior: 'center' },
  () => {      
  let fcpContainer = '[class^=CancellationPolicy__Disclaimer]';
  cy.get(fcpContainer).scrollIntoView();  
  cy.intercept('PATCH', '/api/checkout/v2/order-attempts/**/cancellation-policy').as(
    'patchCancellationPolicy',
  );
  cy.get(fcpContainer).parent().find('article').eq(2).contains('per person').click();
  cy.wait('@patchCancellationPolicy').its('response.statusCode').should('eq', 204);
  cy.log('PremiurcareFlexPLUS policy has been selected')

});

// [STEP1] WCO PERSONALIZATION: should select the FLEX value
Cypress.Commands.add('Value1FlexpolicyFLEXstep1',{ scrollBehavior: 'center' },
  () => {      
  let fcpContainer = '[class^=CancellationPolicy__Disclaimer]';
  cy.get(fcpContainer).scrollIntoView();
  cy.intercept('PATCH', '/api/checkout/v2/order-attempts/**/cancellation-policy').as(
    'patchCancellationPolicy',
  );
  cy.get(fcpContainer).parent().find('article').eq(1).contains('per person').click();
  cy.wait('@patchCancellationPolicy').its('response.statusCode').should('eq', 204);
  cy.log('PremiurcareFlex CXL policy has been selected')

});
// [STEP1] WCO PERSONALIZATION: should select the Premiumcare basic
Cypress.Commands.add('Value0Flexpolicybasictep1',{ scrollBehavior: 'center' },
  () => {      
  let fcpContainer = '[class^=CancellationPolicy__Disclaimer]';
  cy.get(fcpContainer).scrollIntoView();
  cy.intercept('PATCH', '/api/checkout/v2/order-attempts/**/cancellation-policy').as(
    'patchCancellationPolicy',
  );
  cy.get(fcpContainer).parent().find('article').eq(0).contains('include').click();
  cy.wait('@patchCancellationPolicy').its('response.statusCode').should('eq', 204);
  cy.log('PremiurcareFlexBASIC policy has been selected')

});

//[STEP2] go back to Step 1 Personalization
Cypress.Commands.add('GobackSTEP1', { scrollBehavior: 'center' },
    () => {    
      //cy.get('[class^="CheckoutNavigation__StepItem"]').contains('personalization').click()
      cy.get('.KoRbM > a').click()
      cy.go('back')
      cy.url().should('contain', 'my-trip/personalization');
});

//[STEP2] go back to PDP
Cypress.Commands.add('GobackPDP', { scrollBehavior: 'center' },
    () => {    
      cy.get('.iDePzs > a').click()
      cy.go('back')
      cy.url().should('contain', 'my-trip/personalization');
      cy.go('back')
});

//[STEP2] PASSENGERS Fill login form again
Cypress.Commands.add('PassangersFillLoginform', { scrollBehavior: 'center' },
    () => {   
      cy.get('button[type="button"]').contains('Continue').click();   
      cy.get(`input[id="email"]`, { timeout: 10000 })
      .clear()
      .type(`testcypressexoticca@mail.com`);    
      cy.get(`input[id="phone"]`, { timeout: 10000 })
      .clear()
      .type(`+00000000`);
      cy.get('div[class^="FlexColumn__StyledFlex"] >button[type="submit"]').click()
      cy.get('form [id^="passenger-"]', { timeout: 10000 }).should('be.visible');
      cy.log('Fill Login form in steps 2 done')
  });

//[STEP 2]Fill form for paxs
Cypress.Commands.add('Rellenarformulariol',() => {
    cy.get('form > div')
    .find('div[id^="passenger-"]')
    .should('have.length', 2)
    .each(($element, index, $list) => {
      cy.wrap($element).within(($div) => {
        cy.get(`select[id$="gender.value"]`)
          .should('be.enabled')
          .select('F');
        cy.get(`select[id$="birthday.date.month"]`).select('05');
        cy.get(`select[id$="birthday.date.day"]`).select('05');
        cy.get(`select[id$="birthday.date.year"]`).select(`1990`);
        cy.get(`input[id$="firstName.value"]`)
          .clear()
          .type(`AUTOMATION ${index}`);
        cy.get(`input[id$="lastName.value"]`)
          .clear()
          .type(`USER ${index}`);
        cy.get(`select[id$="document.expirationDate.month"]`).select(
          '05',
        );
        cy.get(`select[id$="document.expirationDate.day"]`).select('05');
        cy.get(`select[id$="document.expirationDate.year"]`).select(
          `2030`,
        );
        cy.get(`input[id$="document.value"]`)
          .clear()
          .type(`Y0000${index}W`);
        
      

        if (index < $list.length - 1) {
          cy.get(`button`).contains('Next').click();
        }
    });
  });
cy.contains('a button', 'Continue').click();
cy.url().should('contain', 'my-trip/payment');
cy.log('All passangers data filled and go to step 3')
},
);

//[STEP 3]Confirm transfer payment
Cypress.Commands.add('Paymentconfirmation', { scrollBehavior: 'center' },
    () => {   
      cy.contains('Wire Transfer').click();
      //cy.get('#payButton').click();
      //cy.url().should('include', '/confirmed');
      //cy.get('[class^="Header__BankTransferInfoText"]').should('be.visible');
      //cy.get('[class^="Summary__ReservationId"] span').should('be.visible');
});





