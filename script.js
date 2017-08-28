$(document).ready(function () {
    $catsList = $("#cats-list")
    $catsDiv = $("#cats")
    var cats = []
    minie = {
        name: "Minie",
        imgURL: "https://kittenrescue.org/wp-content/uploads/2017/03/KittenRescue_KittenCareHandbook.jpg",
        count: 0
    }
    cutie = {
        name: "Cutie",
        imgURL: "https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg",
        count: 0
    }
    tomin = {
        name: "Tomin",
        imgURL: "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-30-57b30ad41bc90__605.jpg",
        count: 0
    }
    lucy = {
        name: "Lucy",
        imgURL: "http://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-4-57b30a939dff5__605.jpg",
        count: 0
    }
    mia = {
        name: "Mia",
        imgURL: "https://i.pinimg.com/736x/16/9e/fd/169efd8c7bb1f9504335171340dcce0a--fluffy-kittens-baby-kittens.jpg",
        count: 0
    }
    cats.push(minie);
    cats.push(cutie);
    cats.push(tomin);
    cats.push(lucy);
    cats.push(mia);

    // Building list of cats
    for (var i = 0; i < cats.length; i++) {
        billi = cats[i]
        var catsName = '<li><a href="#" id="' + i + '" class="select-cat">' + billi.name + '</a></li>';
        $catsList.append(catsName);
    }

    $('.select-cat').click(function () {
        billi = cats[this.id]
        var catsImgAndCounter = '<h4>' + billi.name + '</h4><img id="' + this.id + '-pic" class="cat-image" height="150px" src="' + billi.imgURL + '"><p>Count: <span id="' + this.id + '-count">' + billi.count + '</span></p>';
        $catsDiv.html(catsImgAndCounter);
    });

    $(document).on('click', '.cat-image', function () {
        var id = this.id.split("-")[0];
        $("#" + id + "-count").text(++cats[id].count)
    });
});