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
  it("should include the category headphones", () => {
    cy.get("[title='menu']").click().siblings().first().contains("headphones");
  });
  it("should include the category speakers", () => {
    cy.get("[title='menu']").click().siblings().first().contains("speakers");
  });
  it("should include the category earphones", () => {
    cy.get("[title='menu']").click().siblings().first().contains("earphones");
  });
  it("should include the headphones category image", () => {
    cy.get("[title='menu']")
      .click()
      .siblings()
      .first()
      .find("img")
      .first()
      .should("have.attr", "alt", "headphones");
  });
  it("should include the earphones category image", () => {
    cy.get("[title='menu']")
      .click()
      .siblings()
      .first()
      .find("img")
      .eq(7)
      .should("have.attr", "alt", "earphones");
  });
  it("should include the speakers category image", () => {
    cy.get("[title='menu']")
      .click()
      .siblings()
      .first()
      .find("img")
      .eq(3)
      .should("have.attr", "alt", "speakers");
  });
});
