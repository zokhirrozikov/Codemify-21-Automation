//Should log in with your existing account as an admin (you can use your own user with any role)

// Should log out

// Should register a new account

// Should not register with an already existing email account

// Should not register without filling in required fields 


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
