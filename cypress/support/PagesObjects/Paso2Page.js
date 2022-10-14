
class Paso2Page
{
    Selectorlandingdestination()
    {
        return cy.get(':nth-child(1) > .Dropdown__DropdownWrapper-sc-1q70f7m-0 > .Dropdown__DropdownElementWrapper-sc-1q70f7m-1 > .Dropdown__DropdownToggle-sc-1q70f7m-3 > .Dropdown__DropdownOption-sc-1q70f7m-5 ')
    }

    Selectioncityindropdown()
    {
        return cy.get("div:contains('New York')[class='FlightSimulatorForm__Option-sc-pu6roa-2 fiqroW']")
    }
    Seepricesstep2()
    {
        return cy.get(':nth-child(4) > .Button__StyledButton-sc-1f6im24-0')
    }
    Pickadate()
    {
        return cy.get('[aria-label="Move forward to switch to the next month."] > .Calendar__NavPrev-sc-1fpdu-10')
    }

    Pickadateclick()
    {
        return cy.get('[aria-label="martes, 6 de diciembre de 2022"] > .Calendar__DayCell-sc-1fpdu-1 > .Calendar__DayWrapper-sc-1fpdu-3 > .Calendar__DayPrice-sc-1fpdu-4')
    }

    CTAstep2()
    {
        return cy.get('.cYdPZC')
    }

}
export default Paso2Page;