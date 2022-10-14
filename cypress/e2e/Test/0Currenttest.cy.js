/* eslint-disable jest/expect-expect */
import { testFilters } from '../../support/filterTest';
import { CriticalLevel } from '../../config/CriticalityLevel.enum';
import { Email } from 'gmail-tester';

testFilters([CriticalLevel.CRITICAL, 'Checkout'], () => {
  describe('Create Booking via Transfer Payment', () => {
    const currentMarket = 'us';
    const formContainer = '#sidebar';
    const calendarContainer = '[role="dialog"]';
    let totalPrice: string[] = [];
    let firstPayment: string[] = [];
    let bookingTime: Date;

    beforeEach(() => {
      Cypress.Cookies.preserveOnce('exoticca_usr');
    });

    before(() => {
      cy.preventLeadPopup();
      cy.loginAsUser();
    });

    it('Should show See prices form', () => {
      cy.visit('/' + currentMarket);
      cy.get('[class^="CardCampaign__CardLink"]').first().click();
      cy.get('label[for="airport"] + div button', { timeout: 40000 }).click();
      cy.get('label[for="airport"] + div ul > li').first().click();
      cy.get(formContainer).contains('See prices').click();
      cy.get(calendarContainer).contains('Choose your departure date');
    });

    it('Trip Mood is vivislbe', function () {
      cy.get('[class^="Card__Subtitle"]').should('have.length', 4);
      cy.get('[class^="Card__Subtitle"]').eq(0).each(x => {
        expect(x.text()).to.be.oneOf([
          "LOW",
          "MEDIUM",
          "HIGH"
        ]);
      });
      cy.get('[class^="Card__Subtitle"]').eq(1).should('be.visible');
      cy.get('[class^="Card__Subtitle"]').eq(2).should('be.visible');
      cy.get('[class^="Card__Subtitle"]').eq(3).should('be.visible');
      cy.get('[class^="Card__Title-sc-1qy93ua"]').eq(0).should('have.text', 'Free time')
      cy.get('[class^="Card__Title-sc-1qy93ua"]').eq(1).should('have.text', 'Group size')
      cy.get('[class^="Card__Title-sc-1qy93ua"]').eq(2).should('have.text', 'Physical rating')
      cy.get('[class^="Card__Title-sc-1qy93ua"]').eq(3).should('have.text', 'Type of trip')
      cy.pause()
    });

    it('Should show checkout', { scrollBehavior: 'center' }, () => {
      Cypress.on('uncaught:exception', () => {
        return false;
      });

      // Selecting from the visible table a day cell with price and without indication of seats left
      // TODO: check seats left >=2, click next if no calendar day is available
      cy.get(calendarContainer).contains('Next').click();
      cy.get(calendarContainer).contains('Next').click();
      cy.get(calendarContainer).contains('Next').click();
      cy.get(calendarContainer).contains('Next').click();
      cy.get(
        calendarContainer +
          ' div[data-visible="true"] table .withPrice > div:nth-child(2):empty',
        { timeout: 10000 },
      )
        .first()
        .parent()
        .click();
      cy.url().should('include', currentMarket + '/my-trip/personalization');
      cy.contains('Personalization');
    });

    it('should select the fastest flight', () => {
      let flightContainer = '[data-test=flightSelectorWrapper]';
      cy.get(flightContainer).should('exist');
      cy.get(flightContainer).scrollIntoView();
      cy.get(flightContainer).contains('Fastest').click();
      cy.intercept('PATCH', '/api/checkout/v2/order-attempts/**/personalization/flights').as(
        'patchFlight',
      );
      cy.get(flightContainer + ' > div > div:nth-child(2) button', { timeout: 40000 }).contains('$').first().click();
      cy.wait('@patchFlight').its('response.statusCode').should('eq', 204);
    });

    it('should select the flex+ policy', () => {
      let fcpContainer = '[class^=CancellationPolicy__Disclaimer]';
      cy.get(fcpContainer).scrollIntoView();
      cy.intercept('PATCH', '/api/checkout/v2/order-attempts/**/cancellation-policy').as(
        'patchCancellationPolicy',
      );
      cy.get(fcpContainer).parent().find('article').eq(2).contains('per person').click();
      cy.wait('@patchCancellationPolicy').its('response.statusCode').should('eq', 204);
    });

    it(
      'Should show passengers and fill them with proper data',
      { scrollBehavior: 'center' },
      () => {
        cy.intercept({ method: 'GET', url: /.*passengers$/ }).as('passengers');
        cy.get('button[type="button"]').contains('Continue').click();
        cy.wait('@passengers');
        cy.get(`input[id="phone"]`, { timeout: 10000 })
          .clear()
          .type(`+34123456789`);
        cy.get('form [id^="passenger-"]', { timeout: 10000 }).should(
          'be.visible',
        );
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
      },
    );

    it(
      'Should select "Wire transfer" as payment method',
      { scrollBehavior: 'center' },
      () => {
        cy.url().should('contain', 'my-trip/payment');
        const price = Cypress.$('[class^="TripSummary__Total-sc"]>span')
          .last()
          .text()
          .match(/\d+/g);
        const payment = Cypress.$(
          '[class^="TripSummary__PaymentLine"]:first-child small',
        )
          .last()
          .text()
          .match(/\d+/g);
        totalPrice = price ? price : [];
        firstPayment = payment ? payment : [];
        cy.contains('Wire Transfer').click();
        cy.get('#payButton').click();
      },
    );

    it('Should validate the confirmation page', () => {
      cy.url().should('include', '/confirmed');
      cy.get('[class^="Header__BankTransferInfoText"]').should('be.visible');
      cy.get('[class^="Summary__ReservationId"] span').should('be.visible');
      cy.wait(500);
      const confirmationPrice = Cypress.$(
        '[class^="TripSummary__Total-sc"]>span',
      )
        .last()
        .text()
        .match(/\d+/g);
      expect(confirmationPrice).to.eql(totalPrice);

      bookingTime = new Date();
    });

    it('Should check an email has been received in staging00 and production', function () {
      let baseUrl = Cypress.config('baseUrl');
      if (
        baseUrl !== 'https://www.exoticca.com' &&
        baseUrl !== 'https://prepro.exoticca.com'
      ) {
        this.skip();
      }

      cy.task<Email[]>('gmail:check-inbox', {
        from: 'Exoticca',
        include_body: true,
        after: bookingTime,
        subject: 'Your reservation completed successfully',
        wait_time_sec: 2,
        max_wait_time_sec: 10,
      }).then(async (emails) => {
        assert.isNotNull(
          emails,
          'Expected to find at least one email, but none were found!',
        );
        assert.isAtLeast(
          emails.length,
          1,
          'Expected to find at least one email, but none were found!',
        );
        cy.log('Emails recovered', emails);

        cy.document()
          .invoke('write', emails[0]?.body?.html)
          .then(() => {
            const confirmationPrice = Cypress.$(
              'p:contains("Please find details of our bank account so you can arrange payment of") > b',
            )
              .text()
              .match(/\d+/g);
            if (firstPayment.length <= 2) {
              firstPayment.push('00');
            }
            expect(confirmationPrice).to.eql(firstPayment);
          });
      });
    });
  });
});
