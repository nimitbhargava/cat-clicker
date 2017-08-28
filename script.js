$(document).ready(function () {
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
    cats.push(minie);
    cats.push(cutie);

    for (var i = 0; i < cats.length; i++) {
        billi = cats[i]
        var catsImgAndCounter = '<div><h4>' + billi.name + '</h4><img id="' + i + '" class="cat-image" height="150px" src="' + billi.imgURL + '"><p>Count: <span id="' + i + '-count">' + billi.count + '</span></p></div>';
        $catsDiv.append(catsImgAndCounter);
    }

    $('.cat-image').click(function () {
        $("#" + this.id + "-count").text(++cats[this.id].count)
    });
});