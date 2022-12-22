export {};
describe("herosection", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("should contain a button called see product", () => {
    cy.get("main").get("button").contains("SEE PRODUCT");
  });
  it("should contain an image", () => {
    cy.get("main").find("img").should("be.visible");
  });

  it("should contain a headline", () => {
    cy.get("main").find("p").contains("XX99 Mark II Headphones");
  });
  it("should contain an overline", () => {
    cy.get("main").find("p").contains("New product");
  });
  it("should contain a description", () => {
    cy.get("main")
      .find("p")
      .contains(
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."
      );
  });

  it("should link to the coresponding product page", () => {
    cy.get("main").contains("SEE PRODUCT").click();
    cy.wait(100);
    cy.url().should("include", "/product/xx99-mark-two-headphones");
    cy.contains("XX99 Mark II Headphones");
  });
});
