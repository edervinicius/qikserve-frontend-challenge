describe('template spec', () => {
  it('renders the restaurant and menu on the screen', () => {
    cy.viewport('iphone-6').visit('http://localhost:3000')    
    // Categories
    cy.get(`[data-cy="category"]`).should("exist")
    .should("contain.text", "Burger");
    // Menu
    cy.get(`[data-cy="menu"]`).should("exist")
    .should("contain.text", "Hard Core");
  })
  it('add a item to the cart', () => {
    cy.viewport('iphone-6').visit('http://localhost:3000')
    cy.get(':nth-child(1) > .itemList > :nth-child(1)').click();
    cy.get('.qtyWrapper > :nth-child(3)').click();
    cy.get('[data-cy="addToCart"]').should("exist").click();
  })
  it('remove a item from cart', () => {
    cy.viewport('iphone-6').visit('http://localhost:3000')
    cy.get(':nth-child(1) > .itemList > :nth-child(1)').click();
    cy.get('.qtyWrapper > :nth-child(3)').click();
    cy.get('[data-cy="addToCart"]').should("exist").click();
    cy.get('[data-cy="basket"] [data-cy="button"]').should("exist").click();    
    cy.get('.qtyWrapper > :nth-child(1)').should("exist").click().click();
  })
  it('add a item with modifier to the cart and checkout', () => {
    cy.viewport('iphone-6').visit('http://localhost:3000')
    cy.get(':nth-child(1) > .itemList > :nth-child(2)').click();
    cy.get('[data-cy="modifiers"] > :nth-child(1)').should("exist").click();
    cy.get('[data-cy="addToCart"]').should("exist").click();
    cy.get('[data-cy="basket"] [data-cy="button"]').should("exist").click();  
    cy.get('[data-cy="checkout"]').should("exist").click();
    
  })

})