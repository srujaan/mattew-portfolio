describe('Index Page', () => {
  it('Loads the page when visited', () => {
    cy.visit('/')
    cy.contains('Hello')
    cy.title('Matthew Secrist')
  })

  it('shows a light theme as expected', () => {
    cy.visit('/')
    cy.get('body').should('have.class', 'light')
  })

  it('shows a dark theme as expected', () => {
    cy.visit('/')
    cy.contains('Change Theme').click()
    cy.get('body').should('have.class', 'dark')
    cy.visit('/')
    cy.get('body').should('have.class', 'dark')
  })

  it('shows the most recent blog posts', () => {
    cy.visit('/')
    cy.get('#recent-posts')
      .children('a')
      .should('have.length', 3)
  })
})
