function init() {
    renderItems(orderMenu.mainDishes, "mainDishes");
    renderItems(orderMenu.sideDishes, "sideDishes");
    renderItems(orderMenu.drinks, "drinks");
}

function renderItems(course, id) {
    for(let i = 0; i < course.length; i++) {
        document.getElementById(id).innerHTML += itemTemplate(course[i].item, course[i].description, course[i].price);
    }
}

function renderBasket() {

}

function clickIt(a, b, c) {
    console.log(a, b, c);
}