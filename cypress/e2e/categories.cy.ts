export {};

describe("categories", () => {
  beforeEach(() => {
    cy.viewport("ipad-mini");
    cy.visit("localhost:3000");
  });

  it("should link to the headphones category page", () => {
    cy.get("[title='menu']")
      .click()
      .siblings()
      .first()
      .contains("headphones")
      .click();
    cy.wait(100);
    cy.url().should("include", "/category/headphones");
  });
  it("should link to the speakers category page", () => {
    cy.get("[title='menu']")
      .click()
      .siblings()
      .first()
      .contains("speakers")
      .click();
    cy.wait(100);
    cy.url().should("include", "/category/speakers");
  });
  it("should link to the earphones category page", () => {
    cy.get("[title='menu']")
      .click()
      .siblings()
      .first()
      .contains("earphones")
      .click();
    cy.wait(100);
    cy.url().should("include", "/category/earphones");
  });
});
