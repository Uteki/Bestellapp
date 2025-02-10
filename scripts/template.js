function itemTemplate(item, description, price, category) {
    return `<div onclick="clickIt('${item}',${price}, ${category})">
    ${item}<br>
    ${description}<br>
    ${price} €<br>
    </div> <br>`;
}

function basketTemplate(a, b, c) {
    return `<div>
    ${a}<br>
    ${b}<br>
    ${c}<br>
    </div>`;
}