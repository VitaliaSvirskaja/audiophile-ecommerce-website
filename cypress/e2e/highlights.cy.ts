export {};

describe("highlights", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should link to the zx9 speaker product page ", () => {
    cy.contains("ZX9 SPEAKER").parent().parent().children().last().click();
    cy.wait(100);
    cy.url().should("include", "/product/zx9-speaker");
  });

  it("should link to the zx7 speaker product page ", () => {
    cy.contains("ZX7 SPEAKER").parent().children().last().click();
    cy.wait(100);
    cy.url().should("include", "/product/zx7-speaker");
  });

  it("should link to the yx1 earphones product page ", () => {
    cy.contains("YX1 EARPHONES").parent().children().last().click();
    cy.wait(100);
    cy.url().should("include", "/product/yx1-earphones");
  });
});
