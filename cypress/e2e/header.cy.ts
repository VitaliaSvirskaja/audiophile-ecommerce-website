describe("header", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("localhost:3000");
  });

  it("should open the cart", () => {
    cy.get("[aria-label='cart']").click().parent().contains("Cart");
  });

  it("should open the headphones category page", () => {
    cy.get("nav").contains("Headphones").click();
    cy.wait(100);
    cy.url().should("include", "/category/headphones");
    cy.get("main").contains("h1", "HEADPHONES");
  });

  it("should open the speakers category page", () => {
    cy.get("nav").contains("Speakers").click();
    cy.wait(100);
    cy.url().should("include", "/category/speakers");
    cy.get("main").contains("h1", "SPEAKERS");
  });

  it("should open the earphones category page", () => {
    cy.get("nav").contains("Earphones").click();
    cy.wait(100);
    cy.url().should("include", "/category/earphones");
    cy.get("main").contains("h1", "EARPHONES");
  });

  it("should open the home page", () => {
    cy.visit("localhost:3000/category/earphones");
    cy.get("nav").contains("Home").click();
    cy.wait(100);
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("should return to home on logo click", () => {
    cy.visit("localhost:3000/category/earphones");
    cy.get("[title='Navigate to home']").click();
    cy.wait(100);
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("should open the menu on hamburger menu click", () => {
    cy.viewport("ipad-2");
    cy.get("[title='menu']").click().parent().contains("Category");
  });
});
