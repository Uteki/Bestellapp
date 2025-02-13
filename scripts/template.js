function itemTemplate(item, description, price, category) {
    return `<div class="dish-button" onclick="clickIt('${item}',${price}, ${category})">
    <div class="plus theme-color">+</div>
    <span class="b-weight">${item}</span><br>
    ${description}<br><br>
    <span class="theme-color">${price} €</span>
    </div> <br>`;
}

function basketTemplate(item, amount, price) {
    return `<div style="display: block">
    <span>${item}</span><br><br>
    <div onclick="plusMinus('${item}', '-')" style="position: unset" class="plus&minus theme-color">-</div>
    ${amount}
    <div onclick="plusMinus('${item}', '+')" style="position: unset" class="plus&minus theme-color">+</div>
    <br>
    ${price} €<button onclick="removeAll('${item}')">Trash</button><br>
    </div>`;
}