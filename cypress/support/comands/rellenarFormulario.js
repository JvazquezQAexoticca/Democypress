export const rellenarFormulario = () => {
    'Rellenarformulariol', () => {
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
                    cy.get(`select[id$="document.expirationDate.month"]`).select('05');
                    cy.get(`select[id$="document.expirationDate.day"]`).select('05');
                    cy.get(`select[id$="document.expirationDate.year"]`).select(`2030`);
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
        cy.log('All passengers data filled and go to step 3');
    }
};
