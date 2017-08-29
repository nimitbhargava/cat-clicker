$(document).ready(function () {
    var model = {
        currentCat: null,
        cats: [{
            name: "Minie",
            imgURL: "https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg",
            count: 0
        }, {
            name: "Cutie",
            imgURL: "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg",
            count: 0
        }, {
            name: "Tomin",
            imgURL: "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
            count: 0
        }, {
            name: "Lucy",
            imgURL: "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg",
            count: 0
        }, {
            name: "Mia",
            imgURL: "https://i.pinimg.com/736x/16/9e/fd/169efd8c7bb1f9504335171340dcce0a--fluffy-kittens-baby-kittens.jpg",
            count: 0
        }]
    };

    var octopus = {
        init: function () {
            console.log("octopus init")
            model.currentCat = model.cats[0];

            catListView.init()
            catsView.init()
        }
    };

    var catListView = {
        init: function () {
            console.log("cat list view init");
        }
    };

    var catsView = {
        init: function () {
            console.log("cats view init")
        }
    };

    octopus.init();
});
