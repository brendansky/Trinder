$(document).ready(function () {

    function getItems() {
        $.get("/api/items", function (data) {
            var items = [];
            for (var i = 0; i < data.length; i++) {

                items.push(data[i]);
            }

            console.log("items have been gotten");
            populateInventory(items);
        })
    };

    function populateInventory(items) {

        for (i = 0; i < items.length; i++) {
            var newItem = $("<div>");
            var newItemImage = $(`<img class="inventory-image" src="${items[i].image}">`);
            var itemDesription = $(`<p class="inventory-description" > ${items[i].description} <p>`);
            newItem.append(newItemImage);
            newItem.append(itemDesription);
            $(".inventory").prepend(newItem);

            console.log("inventory has been populated")

        };
    };

    $("#add-item-button").on("click", function () {
        $("#add-item").removeClass("hidden");

    });


    var nameInput = $("#item-name");
    var descriptionInput = $("#description")
    var imageInput = $("#image")

    $(document).on("submit", "#add-item", itemFormSubmit);

    function itemFormSubmit(event) {

        event.preventDefault();

        if (!nameInput.val().trim().trim()) {
            return;
        }
        if (!descriptionInput.val().trim().trim()) {
            return;
        }

        console.log(nameInput, descriptionInput, imageInput)
        console.log('uploading');
        upsertItem({

            name: nameInput
                .val()
                .trim(),
            description: descriptionInput
                .val()
                .trim(),
            image: imageInput.val().trim()
        });


        function upsertItem(itemData) {
            $.post("/api/items", itemData);
        }

        console.log("item added to db")



    }

















});