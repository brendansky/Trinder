var items;

$.get("/api/items", function (data) {
    items = [];
    for (var i = 0; i < data.length; i++) {

        items.push(data[i].image);
    }

    console.log("items have been gotten");
    getImage();
})

function getImage() {

    var item = $(".item");
    var itemImage = $(`<img class="main-image" src="${items[Math.floor(Math.random() * items.length)]}">`);

    item.html(itemImage)

};


$(".trade").on("click", function () {
    getImage();

});

$(".pass").on("click", function () {
    getImage();
});

$(".nav-trade").on("click", function () {
    $(".browse-div").addClass("hidden");
    $(".trade-div").removeClass("hidden");


})