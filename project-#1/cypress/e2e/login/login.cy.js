

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with existing account as an Admin', () => {
    // click login button on homepage
    cy.get('[href="/auth/login"]').click();
    // Type in username/password
    cy.get('[name="email"]').type('admin@gmail.com');
    cy.get('[name="password"]').type('DontTestMe');
    // click login button
    cy.contains('Login').click();
    
    // Verify admin role and title
    cy.get('a p').should('have.text', 'role: admin')
    cy.title().should('eq', 'User: Profile | Delek Homes')
  })
})
