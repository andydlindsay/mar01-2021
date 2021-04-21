describe('can display search results', () => {

  it('can display the results from a successful search', () => {
    // create a fake server to serve our fixture
    cy.intercept('GET', 'search', { fixture: 'itunes' })
      .as('searchResults');

    // visit the home page
    cy.visit('/');

    // get the input field and type 'Daft Punk'
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // check if spinner is visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the search results to load, check if a particular album is the results
    cy.wait('@searchResults')
      .get('.album')
      .contains('Homework')
      .should('be.visible');

    // untick the explicit check box
    cy.get('#Explicit')
      .uncheck();

    // look for the explicit album and expect not to find it
    cy.get('.album')
      .should('not.contain', 'Daft Club');
  });

});
