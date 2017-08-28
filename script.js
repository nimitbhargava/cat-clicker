$(document).ready(function () {

    var count = 0;
    var $catImage = $('#cat-image');
    var $counter = $('#counter');

    $catImage.click(function () {
        $counter.text(++count);
    });
});