export {};

describe("cart", () => {
  it("should add the zx7 speaker to the cart", () => {
    cy.visit("localhost:3000/product/zx7-speaker");
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.wait(100);
    cy.get("[aria-label='cart']").parent().contains("cart");
  });

  it("should increase the item amount, when the same item is already in the cart", () => {
    cy.visit("localhost:3000/product/zx7-speaker");
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.get("[aria-label='cart']").parent().contains("ZX7 Speaker");
    cy.get("[aria-label='cart']").parent().contains("2");
    cy.get("[aria-label='cart']").parent().contains("cart (2)");
  });

  it("should remove the item in the cart", () => {
    cy.visit("localhost:3000/product/zx7-speaker");
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.wait(100);
    cy.get("[aria-label='deleteItem']").click();
    cy.get("[aria-label='cart']").parent().contains("cart (0)");
  });

  it("should remove all items", () => {
    cy.visit("localhost:3000/product/zx7-speaker");
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.get("[aria-label='cart']").parent().contains("Remove all").click();
    cy.get("[aria-label='cart']").parent().contains("cart (0)");
  });

  it("should increase or decrease the item amount", () => {
    cy.visit("localhost:3000/product/zx7-speaker");
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.wait(100);
    cy.contains("Add to cart").click();
    cy.get("[aria-label='cart']").parent().contains("+").click();
    cy.wait(100);
    cy.get("[aria-label='cart']").click();
    cy.get("[aria-label='cart']").parent().contains("+").click();
    cy.wait(100);
    cy.get("[aria-label='cart']").click();
    cy.get("[aria-label='cart']").parent().contains("-").click();
    cy.wait(100);
    cy.get("[aria-label='cart']").click();
    cy.get("[aria-label='cart']").parent().contains("cart (3)");
  });
});
