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
        },
        getCats: function () {
            return model.cats;
        },
        getCurrentCat: function () {
            return model.currentCat;
        }
    };

    var catListView = {
        init: function () {
            console.log("cat list view init");
            this.catListElem = $('#cats-list');

            this.render();
        },
        render: function () {
            console.log('cat list view render');
            cats = octopus.getCats();
            for (var i = 0; i < cats.length; i++) {
                billi = cats[i]
                var catsName = '<li><a href="#" id="' + i + '" class="select-cat">' + billi.name + '</a></li>';
                this.catListElem.append(catsName);
            }
        }
    };

    var catsView = {
        init: function () {
            console.log("cats view init")
            this.catNameElem = $('#cat-name');
            this.catPicElem = $('#cat-pic');
            this.catCountElem = $('#cat-count');

            this.render()
        },
        render: function () {
            console.log("cats view render");
            var currentCat = octopus.getCurrentCat();
            this.catNameElem.text(currentCat.name);
            this.catPicElem.attr("src", currentCat.imgURL);
            this.catCountElem.text(currentCat.count);
        }
    };

    octopus.init();
});
