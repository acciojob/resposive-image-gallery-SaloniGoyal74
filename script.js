describe('Image Gallery Test', () => {
    beforeEach(() => {
        cy.viewport(1280, 720); // Set a larger viewport size
        cy.visit('your-url'); // Make sure to visit the correct URL
    });

    it('should have each image with a maximum width of 25vw', () => {
        cy.get("main.cards img").each($img => {
            cy.wrap($img).should("have.css", "max-width", "25vw");
        });
    });
});