var current_image;
var next_img_num = 0;
var current_img_num;
var img_num = 944;
var intervalId;

$("body").height(window.innerHeight);

function backgroundImage() {
    var img_path = 'assets/images/';
    var random_img_num = function () {
        return Math.floor(Math.random() * img_num + 1);
    };

    current_img_num = next_img_num != 0 ? next_img_num : random_img_num();
    next_img_num = random_img_num();

    var img_url = function (img_num) {
        return img_path + 'bg_' + img_num + '.jpg';
    };

    if (current_image === undefined) {
        current_image = img_url(current_img_num);
    }

    preLoadImg(img_url(next_img_num));

    if ('querySelector' in document) {
        var body = document.querySelector('body').style;
    } else {
        var body = document.body.style;
    }
    body.backgroundSize = 'cover';
    body.backgroundRepeat = 'no-repeat';
    setTimeout(function () {
        body.backgroundImage = 'url(' + current_image + ')';
    });
    var span = document.getElementById('img_placer');
    span.innerHTML = '<span style="background-image: url(' + (current_image = img_url(current_img_num)) + ');width: 0px;height: 0px;display: inline;"></span>';
}

function preLoadImg(url) {
    var img = new Image();
    img.src = url;
}

backgroundImage();

intervalId = setInterval(function () {
    backgroundImage()
}, 4000);