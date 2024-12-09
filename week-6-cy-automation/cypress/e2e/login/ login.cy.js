//Should log in with your existing account as an admin (you can use your own user with any role)

// Should log out


describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should log in with existing account as a user', () => {
  
    cy.get('[href="/auth/login"]').click();
    
    cy.get('[name="email"]').type('Zokhirtester@gmail.com');
    cy.get('[name="password"]').type('Zokhirtester12');
    cy.get('button[type="submit"]').click();
   
    cy.title().should('eq', 'User: Profile | Delek Homes')
    cy.get("a p").should('have.text', 'role: user')
    cy.get("a h6").should("have.text", "Zokhir  Tester");
  })
})


describe('Logout', () => {
  it("Should login and logout", () => {
     cy.visit('/');


    cy.get('[href="/auth/login"]').click();
    cy.get('[name="email"]').type('Zokhirtester@gmail.com');
    cy.get('[name="password"]').type('Zokhirtester12');
    cy.get('button[type="submit"]').click();
   
    cy.get("a h6").should("have.text", "Zokhir  Tester");
    cy.get("a p").should('have.text', 'role: user')
    cy.title().should('eq', 'User: Profile | Delek Homes')
    
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains("Logout").click();

  })
})
