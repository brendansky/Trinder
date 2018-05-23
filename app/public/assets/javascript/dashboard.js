function getImage() {

    var item = $(".item");
    var itemImage = $(`<img class="main-image" src="assets/img/${items[Math.floor(Math.random() * items.length)].image}">`);

    item.html(itemImage)

};

getImage();


$(".trade").on("click", function () {
    getImage();

});

$(".pass").on("click", function () {
    getImage();
});
