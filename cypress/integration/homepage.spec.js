describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders a 'hier' link pointing to 'projekt-vorschlagen'", () => {
    cy.findByLabelText(/Projekt vorschlagen/i).should("exist");
  });

  it("renders 3 links to projects", () => {
    const teaserProjects = cy.findAllByRole("link", { name: /Projekt-Seite/i });
    teaserProjects.should("have.length", 3);
  });

  it("renders a link card pointing to /projekte", () => {
    cy.findByRole("link", { name: /Alle projekte ansehen/i }).should("exist");
  });
});
