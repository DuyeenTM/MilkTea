var imagesDataArray1 = [
  {
    src: "img/chinhanh1.jpg",
    target: "_blank",
  },
  {
    src: "img/chinhanh2.jpg",
  },
  {
    src: "img/chinhanh3.jpg",
  },
  {
    src: "img/chinhanh4.jpg",
    target: "_blank",
  },
  {
    src: "img/chinhanh5.jpg",
  },
  {
    src: "img/chinhanh6.jpg",
  },
];
var imagesDataArray2 = [
  {
    src: "img/chinhanh3.jpg",
    target: "_blank",
  },
  {
    src: "img/chinhanh4.jpg",
    target: "_blank",
  },
  {
    src: "img/chinhanh5.jpg",
  },
  {
    src: "img/chinhanh6.jpg",
  },
  {
    src: "img/chinhanh1.jpg",
    target: "_blank",
  },
  {
    src: "img/chinhanh2.jpg",
  },
];
var imagesDataArray3 = [
  {
    src: "img/chinhanh5.jpg",
    target: "_blank",
  },
  {
    src: "img/chinhanh6.jpg",
  },
  {
    src: "img/chinhanh1.jpg",
  },
  {
    src: "img/chinhanh2.jpg",
  },
  {
    src: "img/chinhanh3.jpg",
  },
  {
    src: "img/chinhanh4.jpg",
  },
];
jQuery(function () {
  $("#unhookshow1").shockwave(imagesDataArray1, {
    "slider-type": "UnhookedSlider",
    "random-time-to-unhook": 1500, // in ms
    "free-fall-time": 150, // ms
    "autostart-slideshow": true,
    "maximum-slideshow-cycles": 2,
    "slideshow-delay": 2000,
    duration: 100,
    "tiles-in-x": 5,
    "tiles-in-y": 5,
    "show-permanent-description": false,
    "standard-control-buttons-area": $("#unhookbuttons"),
    "viewport-dimension": { width: 350, height: 262 },
  });
  $("#unhookshow2").shockwave(imagesDataArray2, {
    "slider-type": "UnhookedSlider",
    "random-time-to-unhook": 1500, // in ms
    "free-fall-time": 150, // ms
    "autostart-slideshow": true,
    "maximum-slideshow-cycles": 2,
    "slideshow-delay": 2000,
    duration: 100,
    "tiles-in-x": 5,
    "tiles-in-y": 5,
    "show-permanent-description": false,
    "standard-control-buttons-area": $("#unhookbuttons"),
    "viewport-dimension": { width: 350, height: 262 },
  });
  $("#unhookshow3").shockwave(imagesDataArray3, {
    "slider-type": "UnhookedSlider",
    "random-time-to-unhook": 1500, // in ms
    "free-fall-time": 150, // ms
    "autostart-slideshow": true,
    "maximum-slideshow-cycles": 2,
    "slideshow-delay": 2000,
    duration: 100,
    "tiles-in-x": 5,
    "tiles-in-y": 5,
    "show-permanent-description": false,
    "standard-control-buttons-area": $("#unhookbuttons"),
    "viewport-dimension": { width: 350, height: 262 },
  });
});
