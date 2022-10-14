
class Paso1Page{
    AsercionDE()
    {
        return cy.get('#featuredMonoMarket > .SectionHeading-sc-1svn4el-0')
    }

    clickgotostep2()
    {
        return cy.get('#featuredMonoMarket > .lazyload-wrapper > .XLCard__XLCardWrapper-sc-7swqb7-0 > .hgTRps > :nth-child(2) > .XLCardDetails__XLCardDetailsWrapper-sc-10lpfi9-0 > .Grid__StyledGrid-sc-1h2s4zp-0 > .iMhJjb > .XLCardDetails__SeeTripLink-sc-10lpfi9-4')
    }
    
}
export default Paso1Page;