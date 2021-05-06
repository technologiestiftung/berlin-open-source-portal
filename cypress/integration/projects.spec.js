describe("Projekte page", () => {
  beforeEach(() => {
    cy.visit("/projekte");
  });

  it("renders the tag list", () => {
    cy.findAllByLabelText(/Alle Projekte zum Thema/i).should("exist");
  });

  it("renders the project card links", () => {
    cy.findAllByLabelText(/Projekt-Seite/i).should("exist");
  });
});
