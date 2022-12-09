export {};

describe("footer", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("localhost:3000");
  });
  it("should have the logo which navigates to the homepage", () => {
    cy.visit("localhost:3000/category/earphones");
    cy.get("[title='Navigate to home']").last().click();
    cy.wait(100);
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("should open the homepage", () => {
    cy.visit("localhost:3000/category/earphones");
    cy.get("footer").contains("Home").click();
    cy.wait(100);
    cy.url().should("equal", "http://localhost:3000/");
  });

  it("should open the headphones category page", () => {
    cy.get("footer").contains("Headphones").click();
    cy.wait(100);
    cy.url().should("include", "/category/headphones");
    cy.get("main").contains("h1", "HEADPHONES");
  });

  it("should open the speakers category page", () => {
    cy.get("footer").contains("Speakers").click();
    cy.wait(100);
    cy.url().should("include", "/category/speakers");
    cy.get("main").contains("h1", "SPEAKERS");
  });

  it("should open the earphones category page", () => {
    cy.get("footer").contains("Earphones").click();
    cy.wait(100);
    cy.url().should("include", "/category/earphones");
    cy.get("main").contains("h1", "EARPHONES");
  });

  it("should contain the description", () => {
    cy.get("footer").contains(
      "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
    );
  });

  it("should contain the copyright text", () => {
    cy.get("footer").contains("Copyright 2021. All Rights Reserved");
  });

  it("should open twitter", () => {
    cy.get("[title='twitter']").should(
      "have.attr",
      "href",
      "https://twitter.com/?lang=de"
    );
  });
});
