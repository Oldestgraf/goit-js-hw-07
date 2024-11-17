const categoriesList = document.querySelector("#categories");
categoriesList.style.margin = "0 auto";
categoriesList.style.display = "inline-flex";
categoriesList.style.padding = "24px";
categoriesList.style.flexDirection = "column";
categoriesList.style.gap = "24px";
categoriesList.style.borderRadius = "8px";
categoriesList.style.background = "#fff";

const categories = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('ul > li');
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItems.length}`);

    category.style.display = "flex";
    category.style.padding = "16px";
    category.style.flexDirection = "column";
    category.style.alignItems = "flex-start";
    category.style.gap = "16px";
    category.style.borderRadius = "8px";
    category.style.background = "#f6f6fe";
})

const categoryTitles = categoriesList.querySelectorAll('h2');
categoryTitles.forEach(categoryTitle => {
    categoryTitle.style.color = "#2e2f42";
    categoryTitle.style.fontFamily = "Montserrat";
    categoryTitle.style.fontSize = "24px";
    categoryTitle.style.fontStyle = "normal";
    categoryTitle.style.fontWeight = "600";
    categoryTitle.style.lineHeight = "32px";
    categoryTitle.style.letterSpacing = "0.96px";
    categoryTitle.style.margin = "0 0 16px";
})

const categoryLists = categoriesList.querySelectorAll('.item > ul');
categoryLists.forEach(categoryList => {
    categoryList.style.padding = "0";
    categoryList.style.display = "flex";
    categoryList.style.flexDirection = "column";
    categoryList.style.gap = "8px";
})

const categoryItems = categoriesList.querySelectorAll('.item > ul > li');
categoryItems.forEach(categoryItem => {
    categoryItem.style.width = "360px";
    categoryItem.style.height = "40px";
    categoryItem.style.padding = "8px 16px";
    categoryItem.style.display = "flex";
    categoryItem.style.justifyContent = "space-between";
    categoryItem.style.alignItems = "center";
    categoryItem.style.borderRadius = "4px";
    categoryItem.style.border = "1px solid #808080";
})
