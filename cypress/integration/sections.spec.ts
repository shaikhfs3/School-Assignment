
describe('School Assignment', () => {
  it('Should load the title', () => {
    cy.visit('/',{timeout:3000});
    cy.get('h1').should('have.text', '% of students passed in 2018-2019 session');
  })
  it('Should load the pie chart', () => {
    cy.visit('/');

    cy.get('#myChart')
      .should('be.visible')
      .and(chart => {
        expect(chart.height()).to.be.greaterThan(200)
      })
  })
  it('Should click on the pie chart and navigate to Section Details', () => {
    cy.visit('/');

    cy.get('#myChart')
      .should('be.visible').click();

    cy.url().should('include', 'sectionDetails');
  })

})
