describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a link card pointing to /projekte", () => {
    cy.findByRole("link", { name: /Alle projekte ansehen/i }).should("exist");
  });
});
