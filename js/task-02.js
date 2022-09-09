const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulRef = document.querySelector("#ingredients");

const elName = ingredients.map((ingredient) => {
  const liElement = document.createElement("li");
  liElement.textContent = ingredient;
  liElement.classList.add("item");
  return liElement;
});
ulRef.append(...elName);