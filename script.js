let off = false;

function init() {
    renderItems(orderMenu.mainDishes, "mainDishes", 1);
    renderItems(orderMenu.sideDishes, "sideDishes", 2);
    renderItems(orderMenu.drinks, "drinks", 3);
}

function renderItems(course, id, category) {
    for(let i = 0; i < course.length; i++) {
        document.getElementById(id).innerHTML += itemTemplate(course[i].item, course[i].description, course[i].price, category - 1);
    }
}

function renderBasket() {
    //TODO: basketTemplate

    totalSum("basket-total");
    totalSum("basket-transport");
}

function totalSum(id) {
    let priceTotal = 0;
    let deliveryPrice = off === true ? 0 : 5;

    Object.keys(orderBasket).forEach((key) => {
        orderBasket[key].forEach((item) => {
            priceTotal += item.price;
        });
    })

    document.getElementById(id).innerHTML = (id === "basket-transport") ? priceTotal + deliveryPrice : priceTotal;
}

function deliveryOff() {
    off = !off;
    document.getElementById("deliver-line").classList.toggle("d_none");
    renderBasket();
}

function clickIt(item, price, category) {
    let order = orderBasket[Object.keys(orderBasket)[category]];
    let finder = order.find(element => element.item === item);

    if (finder) {
        finder.price += price;
        finder.amount++;
    } else {
        order.push({item, price, amount: 1});
    }

    renderBasket(); //TODO: use item price for template also add button to add amount or remove
}

//TODO: local storage basket