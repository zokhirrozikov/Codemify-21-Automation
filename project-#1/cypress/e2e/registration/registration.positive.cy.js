import { faker } from '@faker-js/faker';


const email = faker.internet.email();
const password = faker.string.uuid();
describe("Registration", () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Should register a new user account", () => {
    cy.get('[href="/auth/register"]').click();
    cy.get('[name="firstName"]').type('Zahiri');
    cy.get('[name="lastName"]').type('Roziki');
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    cy.get('[type="submit"]').click();

    
    // Verify user role, name, url and page title
    cy.get('a p').should("have.text", 'role: user');
    cy.get('h6').should('have.text', 'Zahiri  Roziki');
    cy.title().should("eq", 'User: Profile | Delek Homes');
    cy.url().should("include", 'dashboard/user/profile');

    // click user icon and logout button
    cy.get('button [data-testid="PersonIcon"]').click();
    cy.contains('Logout').click();
    
    cy.get('[name="email"]').type(email);
    cy.get('[name="password"]').type(password);
    // click login button
    cy.contains('Login').click();
    
    // Verify admin role and title
    cy.get('h6').should('have.text', 'Zahiri  Roziki');
    cy.get('a p').should('have.text', 'role: user');
  });
});
