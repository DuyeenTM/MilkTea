document.getElementById("home").onclick = function show() {
  var A = document.getElementById("ulnav").style;
  if (A.display === "none") A.display = "block";
  else A.display = "none";
};
var root = document.documentElement;
document.getElementById("b1").onclick = function b1() {
document.getElementById("i1").style.fontSize = "40px";
  document.getElementById("b1").classList.add("r");
  document.getElementById("i2").style.fontSize = "30px";
  document.getElementById("b2").classList.remove("r");
  document.getElementById("i3").style.fontSize = "30px";
  document.getElementById("b3").classList.remove("r");
  document.getElementById("i4").style.fontSize = "30px";
  document.getElementById("b4").classList.remove("r");
document.getElementById("header").style.background = "#f8f5f4";
  root.style.setProperty("--cl", "#ff6600");
  root.style.setProperty("--bg", "url(img/background1.jpg)");
};

document.getElementById("b2").onclick = function b2() {
document.getElementById("i2").style.fontSize = "40px";
  document.getElementById("b2").classList.add("r");
  document.getElementById("i1").style.fontSize = "30px";
  document.getElementById("b1").classList.remove("r");
  document.getElementById("i3").style.fontSize = "30px";
  document.getElementById("b3").classList.remove("r");
  document.getElementById("i4").style.fontSize = "30px";
  document.getElementById("b4").classList.remove("r");
document.getElementById("header").style.background = "#f8f4f8";
  root.style.setProperty("--cl", "#ff0080");
  root.style.setProperty("--bg", "url(img/background2.jpg)");
};
document.getElementById("b3").onclick = function b3() {
document.getElementById("i3").style.fontSize = "40px";
  document.getElementById("b3").classList.add("r");
  document.getElementById("i1").style.fontSize = "30px";
  document.getElementById("b1").classList.remove("r");
  document.getElementById("i2").style.fontSize = "30px";
  document.getElementById("b2").classList.remove("r");
  document.getElementById("i4").style.fontSize = "30px";
  document.getElementById("b4").classList.remove("r");
document.getElementById("header").style.background = "#f4f8f8";
  root.style.setProperty("--cl", "#0030b0");
  root.style.setProperty("--bg", "url(img/background3.jpg)");
};

document.getElementById("b4").onclick = function b4() {
document.getElementById("i4").style.fontSize = "40px";
  document.getElementById("b4").classList.add("r");
  document.getElementById("i1").style.fontSize = "30px";
  document.getElementById("b1").classList.remove("r");
  document.getElementById("i2").style.fontSize = "30px";
  document.getElementById("b2").classList.remove("r");
  document.getElementById("i3").style.fontSize = "30px";
  document.getElementById("b3").classList.remove("r");
document.getElementById("header").style.background = "#eeffee";
  root.style.setProperty("--cl", "#12a87b");
  root.style.setProperty("--bg", "url(img/background4.jpg)");
};
