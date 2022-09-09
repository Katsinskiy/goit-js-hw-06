const items = document.querySelectorAll(".item");
console.log("Number of categories:", items.length);
console.log("");
items.forEach((elem) => {
  const category = elem.firstElementChild.textContent;
  const quantityElem = elem.lastElementChild.children.length;
  console.log(`Category: ${category} \n Elements: ${quantityElem}`);
  console.log("");
});