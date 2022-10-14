
class Paso3Page
{

    CTAstep2()
    {
        return cy.get('.cYdPZC')
    }

    Mailregistrationfiedlstep2()
    {
        return cy.get('.dyhFvO > .FlexRow__StyledFlexRow-sc-1sk3ddf-0 > :nth-child(1) > .Input__InputWrapper-sc-1306csd-0 > [data-testid="input"]')
    }
    
    TLFregistrationfiedlstep2()
    {
        return cy.get('#phone')
    }

    Checkbox1registration()
    {
        return cy.get(':nth-child(2) > .FlexColumn__StyledFlexColumn-sc-2z8aww-0 > [data-testid="checkbox"] > [data-testid="checkbox__checkmark"]')
    } 
    
    Checkbox2registration()
    {
        return cy.get(':nth-child(3) > .FlexColumn__StyledFlexColumn-sc-2z8aww-0 > [data-testid="checkbox"] > [data-testid="checkbox__checkmark"]')
    }

    Nameadult1()
    {
        return cy.get('#passenger-0 > [data-testid="accordion-content"] > .cPGSXk > :nth-child(2) > :nth-child(2) > .Input__InputWrapper-sc-1306csd-0 > [data-testid="input"]')
    }

    Surnameadult2()
    {
        return cy.get('#passenger-0 > [data-testid="accordion-content"] > .cPGSXk > :nth-child(3) > :nth-child(1) > .Input__InputWrapper-sc-1306csd-0 > [data-testid="input"]')
    }

    Preciosubtotal1()
    {
        return cy.get(':nth-child(1) > .TripSummary__BreakdownValue-sc-rznf51-6 > [data-testid="small-text"]')
    }

    Preciosubtotal2()
    {
        return cy.get(':nth-child(1) > .FlexColumn__StyledFlexColumn-sc-2z8aww-0 > .TripSummary__Total-sc-rznf51-7 > :nth-child(2)')
    }


}
export default Paso3Page;