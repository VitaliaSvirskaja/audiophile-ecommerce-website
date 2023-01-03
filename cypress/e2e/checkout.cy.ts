export {};

describe("checkout", () => {
  beforeEach(() => {
    cy.visit("localhost:3000/product/zx7-speaker");
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.get("[aria-label='cart']").parent().contains("CHECKOUT").click();
  });

  it("should show the correct items in the checkout summary", () => {
    cy.contains("summary")
      .parent()
      .contains("Total")
      .siblings()
      .contains("$7,000");
  });

  it("should increase or decrease the item amount", () => {
    cy.contains("summary").parent().contains("+").click();
    cy.contains("summary").parent().contains("+").click();
    cy.contains("summary").parent().contains("-").click();
    cy.contains("summary")
      .parent()
      .contains("Total")
      .siblings()
      .contains("$10,500");
  });

  it("should open the purchase modal and show the correct total", () => {
    cy.get("[id='Name']").click().type("Vitalia");
    cy.get("[id='Email Address']").click().type("vitalia@gmail.com");
    cy.get("[id='Phone Number']").click().type("123456789");
    cy.get("[id='Address']").click().type("Lange Straße 40");
    cy.get("[id='ZIP Code']").click().type("90478");
    cy.get("[id='City']").click().type("New York");
    cy.get("[id='Country']").click().type("Germany");
    cy.get("[id='Cash on Delivery']").click();
    cy.contains("continue & pay").click();
    cy.get("[id='purchase modal']").contains("Thank you");
    cy.get("[id='purchase modal']").contains("for your order");
    cy.get("[id='purchase modal']").contains("grand total");
    cy.get("[id='purchase modal']").contains("$7,050");
  });
});
