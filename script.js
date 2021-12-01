// Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1750
});

// Sound Hover
var Growl = $("#growl")[0];
$(".description-div-image#first-fact")
.click(function() {
Growl.play();
});

var SeaWave = $("#seawave")[0];
$(".habitat-image")
.click(function() {
SeaWave.play();
});

var Mating = $("#mating")[0];
$(".reproduksi-image")
.click(function() {
Mating.play();
});

var Eating = $("#eating")[0];
$(".diet-image")
.click(function() {
Eating.play();
});

var Snarl = $("#snarl")[0];
$(".description-div-image#fact")
.click(function() {
Snarl.play();
});