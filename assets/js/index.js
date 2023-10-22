const fourthChild = document.querySelector(".column:nth-child(4)");
const fifthChild = document.querySelector(".column:nth-child(5)");
const gridItems = fifthChild.querySelectorAll(".grid-item");
const gridItemsOne = fourthChild.querySelectorAll(".grid-item-one");
let isWide = false;
const strzalka = fifthChild.querySelector(".strzalka");
const arrow = fourthChild.querySelector(".arrow");

// Function to toggle column and change the text
function toggleColumn(column, items, arrow, isOpen) {
  const width = isOpen ? "6vw" : "310vw";
  const text = isOpen ? ">" : "<";

  column.style.flex = `0 0 ${width}`;
  items.forEach((item) => (item.style.display = isOpen ? "none" : "block"));
  arrow.textContent = text;

  return !isOpen; // Toggle the state
}

// Hide grid-items by default (on page load)
gridItems.forEach((item) => (item.style.display = "none"));
gridItemsOne.forEach((item) => (item.style.display = "none"));

// Add a click event listener to .strzalka and .arrow
strzalka.addEventListener("click", () => {
  isWide = toggleColumn(fifthChild, gridItems, strzalka, isWide);
});

arrow.addEventListener("click", () => {
  isWide = toggleColumn(fourthChild, gridItemsOne, arrow, isWide);
});
