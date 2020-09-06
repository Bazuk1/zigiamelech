
var i = 0;
var textsize = 64;
var color1 = 5;
var color2 = 5;
var color3 = 5;
var text = document.getElementById("text");
var j = 0;
setInterval(() => {
    if (i < 14) {
        textsize = 4 + textsize;
        document.getElementById("text").style.fontSize = textsize;
        i++;
    }
    if (i == 14) {i = 28}
    if (i > 14) {
        textsize = 64;
        textsize = 4 - textsize;
        document.getElementById("text").style.fontSize = textsize;
        i = 1 - i;
    }
}, 30);

setInterval(() => {
    document.getElementById("text").style.color = "rgb("+color1+", "+color2+", "+color3+")";

    if (j < 5) {color1 = color1 + 20; color2 = color2 + 15; color3 = color3 + 30; j++}
    if (j > 5) {color1 = color1 - 30; color2 = color2 - 35; color3 = color3 - 20; j--}
    if (j == 10) {j = 0;}
    if (j == 5) {j = 0;}
    if (color1 > 255) {color1 = 5}
    if (color2 > 255) {color2 = 5}
    if (color3 > 255) {color3 =5}

}, 60);




