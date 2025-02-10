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
    let test = orderBasket[Object.keys(orderBasket)[category]];
    let booTest = false;

    for (let i = 0; i < test.length; i++) {
        if (test[i].item === item) {
            test[i].price += price;
            test[i].amount++;
            renderBasket();
            return
        }
        booTest = true;
    }

    if (booTest === true || test.length === 0) {
        orderBasket[Object.keys(orderMenu)[category]].push({item, price, amount: 1});
    }

    renderBasket();
}