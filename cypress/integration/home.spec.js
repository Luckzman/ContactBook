describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should create new contact', () => {
    cy.visit('http://localhost:3000');
    cy.get('button').click();
    cy.get('[name="name"]').type('James Bond');
    cy.get('[name="email"]').type('James_bond@gmail.com');
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();
    cy.get('button').click();
    // add another card with validated inputs
    cy.get('[name="email"]').type('Jon_doe@gmail.com');
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();
    cy.get('[name="name"]').type('Jon_Doe');
    cy.get('[type="submit"]').click();
    // add a third card
    cy.get('button').click();
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();
    cy.get('[name="email"]').type('rose@gmail.com');
    cy.get('[type="submit"]').click();
    cy.get('[name="name"]').type('Rose');
    cy.get('[type="submit"]').click();
  });

  it('should like the first and the last button', () => {
    //like the first card
    cy.get('button').click();
    cy.get('[name="name"]').type('James Bond');
    cy.get('[name="email"]').type('James_bond@gmail.com');
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();
    cy.get('button').click();
    // add another card with validated inputs
    cy.get('[name="email"]').type('Jon_doe@gmail.com');
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();
    cy.get('[name="name"]').type('Jon_Doe');
    cy.get('[type="submit"]').click();
    // add a third card
    cy.get('button').click();
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();
    cy.get('[name="email"]').type('rose@gmail.com');
    cy.get('[type="submit"]').click();
    cy.get('[name="name"]').type('Rose');
    cy.get('[type="submit"]').click();
    // like first and the last card
    cy.get('[data-testid="like-btn"]')
      .first()
      .click();
    cy.get('[data-testid="like-btn"]')
      .last()
      .click();

    // view and unlike the second card
    cy.get('[data-testid="fav-contact-link"]').click();
    cy.get('[data-testid="unlike-btn"]')
      .last()
      .click();
    // view all the contacts
    cy.get('[data-testid="all-contact-text"]').click();
  });

  it('should edit a contact', () => {
    // create new contact
    cy.get('button').click();
    cy.get('[name="name"]').type('James Bond');
    cy.get('[name="email"]').type('James_bond@gmail.com');
    cy.get('[name="phone"]').type('09023445434');
    cy.get('[type="submit"]').click();

    // edit a contact
    cy.get('[data-testid="edit"]').click();
    cy.get('[type="submit"]').click();
    cy.get('[name="name"]').type('James Brand');
    cy.get('[name="email"]').type('James_brand@gmail.com');
    cy.get('[name="phone"]').type('090234454');
    cy.get('[type="submit"]').click();
  });
});
