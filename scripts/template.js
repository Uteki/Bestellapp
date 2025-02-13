function itemTemplate(item, description, price, category) {
    return `<div class="dish-button" onclick="clickIt('${item}',${price}, ${category})">
    <div class="plus theme-color">+</div>
    <span class="b-weight">${item}</span><br>
    ${description}<br><br>
    <span class="theme-color">${price} €</span>
    </div> <br>`;
}

function basketTemplate(a, b, c) {
    return `<div>
    ${a}<br>
    ${b}<br>
    ${c}<br>
    </div>`;
}