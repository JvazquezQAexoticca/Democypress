
class HomePage
{
    Cookiesacept()
    {
        return cy.get('#cookies > :nth-child(1) > button')
    }

    Sliderdestinoshome()
    {
        return cy.get('#FlashAsia .slick-slide')
    }

    Selectorcurrencylanguage()
    {
        return cy.get(':nth-child(1) > .jahceC')
    }

    SelectorcurrencyFR()
    {
        return cy.get('li[href="https://www.exoticca.com/fr"] > .CountrySelector__StyledLink-sc-ugf1ri-0')
    }

    Cookiesoption()
    {
        return cy.get(':nth-child(2) > .notranslate > #didomi-popup > .didomi-exterior-border > .didomi-popup-container > .didomi-popup-view > #buttons > #didomi-notice-learn-more-button')
    }

    Cookiesoperative()
    {
        return cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .didomi-consent-popup-data-processing__buttons > .didomi-components-radio > :nth-child(2)')
    }

    Cookiedato()
    {
        return cy.get('.didomi-consent-popup-categories-nested > :nth-child(2) > :nth-child(1) > :nth-child(1) > .didomi-consent-popup-data-processing__buttons > .didomi-components-radio > :nth-child(2)')
    }

    Cookiespublicidad()
    {
        return cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .didomi-consent-popup-data-processing__buttons > .didomi-components-radio > :nth-child(2) > span')
    }
    Cookiesoperativerefuse()
    {
        return cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .didomi-consent-popup-data-processing__buttons > .didomi-components-radio > :nth-child(1)')
    }

    Cookiedatorefuse()
    {
        return cy.get('.didomi-consent-popup-categories-nested > :nth-child(2) > :nth-child(1) > :nth-child(1) > .didomi-consent-popup-data-processing__buttons > .didomi-components-radio > :nth-child(1)')
    }


    Cookiespublicidadefuse()
    {
        return cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .didomi-consent-popup-data-processing__buttons > .didomi-components-radio > :nth-child(1) > span')
    }

    Aceptcookiesoptions()
    {
        return cy.get('.didomi-consent-popup-actions > .didomi-components-button > span')

    }

    Aceptcookiesprincipal()
    {
        return cy.get('#didomi-notice-agree-button')
    }

    Acceslogin()
    {
        return cy.get('[data-test="my-account"] > .jahceC')
    }

    Login()
    {
        return cy.get('li[href="#login"] > .MyAccount__Link-sc-b1vo58-0')
    }

    Accesbuttom()
    {
        return cy.get('.FlexRow__StyledFlexRow-sc-1sk3ddf-0 > [data-testid="button"]')
    }
    
    Fielasertionmail()
    {
        return cy.get('.FlexRow__StyledFlexRow-sc-1sk3ddf-0 > :nth-child(1) > .Input__StyledText-sc-1306csd-3')
    }

    FieldeasertionPassword()
    {
        return cy.get('.InputPassword__InputPasswordWrapper-sc-7tkus4-0 > .Input__InputWrapper-sc-1306csd-0 > .Input__StyledText-sc-1306csd-3')
    }
    Maillogininnput()
    {
        return cy.get('.FlexRow__StyledFlexRow-sc-1sk3ddf-0 > :nth-child(1) > [data-testid="input"]')
    }

    Passwrodlogininput()
    {
        return cy.get('.InputPassword__InputPasswordWrapper-sc-7tkus4-0 > .Input__InputWrapper-sc-1306csd-0 > [data-testid="input"]')
    }

    Diverrorlogin()
    {
        return cy.get('.InputPassword__InputPasswordWrapper-sc-7tkus4-0 > .Input__InputWrapper-sc-1306csd-0 > [data-testid="input"]')
    }
    Closeloginpoppup()
    {
        return cy.get('.Modal__StyledCloseIcon-sc-110fka4-4')
    }

    Submenunavbar()
    {
        return cy.get('[data-test="menu-continent"] > svg')
    }
    
    submenueuropa()
    {
        return cy.get('[data-test="menu-continent"] > :nth-child(7)')
    }

    submenualemania()
    {
        return cy.get('[style="height: auto; border-bottom: 1px solid rgb(98, 98, 98);"] > [data-test="countries-menu"] > [style="padding-top: 0px; padding-bottom: 10px;"] > .MuiGrid-justify-xs-center > .MuiGrid-grid-lg-8 > .MuiGrid-container > :nth-child(1) > :nth-child(1) > a')
    }

}
export default HomePage;