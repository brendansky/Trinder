for (i = 0; i < items.length; i++) {
    var newItem = $("<div>");
    var newItemImage = $(`<img class="inventory-image" src="assets/img/${items[i].image}">`);
    var itemDesription = $(`<p class="inventory-description" > ${items[i].description} <p>`);
    newItem.append(newItemImage);
    newItem.append(itemDesription);
    $(".inventory").prepend(newItem);

};


function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the post if we are missing a body, title, or author

    // Constructing a newPost object to hand to the database
    var newItem = {
        title: titleInput
            .val()
            .trim(),
        body: bodyInput
            .val()
            .trim(),

    };
};

// Submits a new post and brings user to blog page upon completion
function submitPost(post) {
    $.post("/api/items", post, function () {
        window.location.href = "/inventory";
    });
};