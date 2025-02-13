let off = false;

function init() {
    orderBasket = getStorage();

    renderItems(orderMenu.mainDishes, "mainDishes", 1);
    renderItems(orderMenu.sideDishes, "sideDishes", 2);
    renderItems(orderMenu.drinks, "drinks", 3);

    renderBasket();
}

function renderItems(course, id, category) {
    for(let i = 0; i < course.length; i++) {
        document.getElementById(id).innerHTML += itemTemplate(course[i].item, course[i].description, course[i].price, category - 1);
    }
}

function renderBasket() {
    let shoppingCart = document.getElementById("basket-content");

    Object.keys(orderBasket).forEach(key => {
        orderBasket[key] = orderBasket[key].filter(basketItem => !(basketItem.price === 0 && basketItem.amount === 0));
    })

    totalSum("basket-total", shoppingCart);
    totalSum("basket-transport", shoppingCart);

    setStorage();
}

function totalSum(id, shoppingCart) {
    shoppingCart.innerHTML = "";

    let priceTotal = 0;
    let deliveryPrice = off === true ? 0 : 5;

    Object.keys(orderBasket).forEach((key) => {
        orderBasket[key].forEach((item) => {
            shoppingCart.innerHTML += basketTemplate(item.item, item.amount, item.price);
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

    renderBasket();
}

function plusMinus(item, operator) {
    Object.keys(orderBasket).forEach(key => {
        let finder = orderBasket[key].find(element => element.item === item);
        if (finder && operator === "+") {
            finder.price += parseInt(orderMenu[key].find(element => element.item === item).price);
            finder.amount++;
        } else if (finder && operator === "-") {
            finder.price -= parseInt(orderMenu[key].find(element => element.item === item).price);
            finder.amount--;
        }
    })
    renderBasket();
}

function removeAll(item) {
    Object.keys(orderBasket).forEach(key => {
        let finder = orderBasket[key].find(element => element.item === item);
        if (finder) {
            finder.price = 0;
            finder.amount = 0;
        }
    })
    renderBasket();
}

function setStorage() {
    localStorage.setItem("basket-content", JSON.stringify(orderBasket));
}

function getStorage() {
    return JSON.parse(localStorage.getItem('basket-content'));
}