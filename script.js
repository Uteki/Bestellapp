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
    totalSum()
}

function totalSum() {
    let priceTotal = 0;
    let basketNr = document.getElementById("basket-total");
    basketNr.innerHTML = "";

    Object.keys(orderBasket).forEach((key) => {
        orderBasket[key].forEach((item) => {
            priceTotal += item.price;
        });
    })

    basketNr.innerHTML = priceTotal;
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

    renderBasket();
}