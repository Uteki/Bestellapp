function itemTemplate(a, b, c) {
return `<div onclick="clickIt('${a}', '${b}', ${c})">
${a}<br>
${b}<br>
${c} €<br>
</div> <br>`;
}