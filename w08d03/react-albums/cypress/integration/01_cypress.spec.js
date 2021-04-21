describe('cypress tests', () => {

  it('works', () => {
    expect(true).to.equal(true);
  });

  it('can visit a website', () => {
    cy.visit('http://localhost:8765');
  });

});
