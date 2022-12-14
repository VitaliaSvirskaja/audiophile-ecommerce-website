export {};
describe("aboutUs", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
    cy.visit("localhost:3000");
  });

  it("should contain the correct header", () => {
    cy.get("[title='aboutUs']")
      .children()
      .find("p")
      .contains("Bringing you the best audio gear");
  });

  it("should contain the correct description", () => {
    cy.get("[title='aboutUs']")
      .children()
      .find("p")
      .contains(
        "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
      );
  });
  it("should contain an image", () => {
    cy.get("[title='aboutUs']").children().find("img");
  });
});
