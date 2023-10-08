describe('end to end tests', () => {
  const customerId = '8baa6dea-cc70-4748-9b27-b174e70e4b66';
  it('should land on the homepage with 50 customer cards', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-testid="name"]').should('have.length', 50);
  });

  it('should land on the correct OrderDetailsPage when navigating from the homepage', () => {
    cy.visit('http://localhost:3000');

    cy.get(`[aria-label='Open order details page for customer: ${customerId}']`).click();

    cy.get('[data-testid="customer"]').contains(customerId).should('exist');
  });

  it('should land on the 404 NotFound page when providing an invalid url', { defaultCommandTimeout: 10000 }, () => {
    cy.visit(`http://localhost:3000/${customerId}-123123`);

    cy.get('h2').contains('This page could not be found.').should('exist');
  });
});
