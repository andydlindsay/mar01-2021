describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.search__form')
      .find('input')
      .as('searchField');
  });

  it('can type into an input field', () => {
    cy.get('@searchField')
      .type('Carrie Underwood', { delay: 200 })
      .should('have.value', 'Carrie Underwood');
  });

  it('can handle backspace', () => {
    cy.get('@searchField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
