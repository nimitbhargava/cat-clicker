$(document).ready(function(){
    var model = {};

    var octopus = {
        init: function () {
            console.log("octopus init")
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
