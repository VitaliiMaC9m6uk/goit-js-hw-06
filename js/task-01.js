const categoriesEl = document.querySelector('#categories');

const itemsEl = categoriesEl.children
console.log(`Number of categories: ${itemsEl.length}`);


for (let i = 0; i < itemsEl.length; i += 1) {
    const numberOfEl = itemsEl[i].children;
    // console.log(numberOfEl);
    console.log(`Category: ${numberOfEl[0].textContent}`);
    console.log(`Elements: ${numberOfEl[1].children.length}`);
}
