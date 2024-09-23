const parent = document.getElementById('parent');
console.log(parent);

const children = parent.children;
console.log(children);

const firstChild = parent.firstElementChild;
console.log(firstChild);

const children2 = document.querySelector("li");
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandGrandParent = children2.closest("menu");
console.log(grandGrandParent);