let TODO_ITEM_ONE = "buy some cheese";
let TODO_ITEM_TWO = "feed the cat";
let TODO_ITEM_THREE = "book a doctors appointment";

context("Clear completed button", function () {
  it(
    "Checks the title of the example site",
    {
      tags: ["@tagB"],
    },
    () => {
      // Visit the website
      cy.visit("https://example.com");

      // Check the title of the page
      cy.title().should("include", "Example Domain1");
    }
  );
});
