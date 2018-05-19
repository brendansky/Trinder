
for (i = 0; i < items.length; i++) {
    var newItem = $("<div>");
    var newItemImage = $(`<img class="inventory-image" src="assets/images/${items[i].image}">`);
    var itemDesription = $(`<p class="inventory-description" > ${items[i].description} <p>`);
    newItem.append(newItemImage);
    newItem.append(itemDesription);
    $(".inventory").append(newItem);

};
