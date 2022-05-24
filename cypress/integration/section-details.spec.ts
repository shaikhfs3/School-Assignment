

describe('Section Details Page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('#myChart')
            .should('be.visible').click();
    });

    it('Should load the label properly', () => {
        cy.get('p', { timeout: 2000 }).should('be.visible');
        cy.get('p').first().should('have.text', 'Third Grade Students');
    });

    it('Should navigate back to section page', () => {
        cy.get('#back-btn').click();
        cy.url().should('include', '');
    });

    it('Should make row editable', () => {
        cy.get('#edit-btn').click();
        cy.get('#mat-input-1').should('be.visible');
        cy.get('#mat-input-1').clear().type('17');
        cy.get('.btn-success').click();
        cy.get('#edit-btn').should('be.visible');
    });
});
