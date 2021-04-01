describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a link to /projekte", () => {
    cy.get("header")
      .findByRole("link", { name: /Projekte/i })
      .should("exist");
  });

  it("displays a link to /warum-open-source", () => {
    cy.get("header")
      .findByRole("link", { name: /Warum Open Source/i })
      .should("exist");
  });

  it("displays a link to /links", () => {
    cy.get("header").findByRole("link", { name: /Links/i }).should("exist");
  });

  it("displays a link to /mitmachen", () => {
    cy.get("header")
      .findByRole("link", { name: /Mitmachen/i })
      .should("exist");
  });

  it("displays a link to the home page", () => {
    cy.get("header")
      .findByLabelText(/Zur Startseite/i)
      .should("exist");
  });
});
