var script = document.createElement("script");
script.src = "../jquery/jquery-3.6.0.min.js";
script.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(script);

var popup = document.getElementById("popup");
var close = document.getElementById("close");

// Hiển thị popup khi nhấp chuột vào button
document.getElementById("buy").onclick = function () {
  popup.style.display = "block";
};
// Đóng popup khi ấn vào nút đóng
close.onclick = function () {
  popup.style.display = "none";
};
// Đóng khi nhấp chuột vào bất cứ khu vực nào trên màn hình
window.onclick = function (e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
};

$("input.input-qty").each(function () {
  var $this = $(this),
    qty = $this.parent().find(".changenum"),
    min = Number($this.attr("min")),
    max = Number($this.attr("max"));
  if (min == 0) {
    var d = 0;
  } else d = min;
  $(qty).on("click", function () {
    if ($(this).hasClass("left")) {
      if (d > min) d += -1;
    } else if ($(this).hasClass("right")) {
      var x = Number($this.val()) + 1;
      if (x <= max) d += 1;
    }
    $this.attr("value", d).val(d);
    var a = $this.val() * 25;
    var checkbox = document.getElementsByName("topping");
    for (var i = 0; i < checkbox.length; i++) {
      if (checkbox[i].checked === true) {
        var b = checkbox[i].value;
        b = b * 1;
        a += b;
      }
    }
    $("#sum").html(a + ".000 vnđ");
  });
});

document.getElementById("confirm").onclick = function () {
  var name = document.getElementById("nameofu");
  if (name.value == "") {
    alert(`Nhập tên.`);
    name.focus();
    return;
  }
  var tel = document.getElementById("telofu");
  if (tel.value == "") {
    alert(`Nhập số điện thoại.`);
    tel.focus();
    return;
  } else {
    var regex =
      /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
    if (regex.test(tel.value) == false) {
      alert(`Số điện thoại không đúng.`);
      tel.focus();
      return;
    }
  }
  var ar = document.getElementById("addressofu");
  if (ar.value == "") {
    alert(`Nhập địa chỉ.`);
    ar.focus();
    return;
  }
  alert(
    ` Cảm ơn bạn đã lựa chọn Milk Tea. \n Chúng tôi sẽ gọi cho bạn để xác nhận ngay lập tức! \n  `
  );
  popup.style.display = "none";
};

document.getElementById("sm").onclick = function () {
  var user = {
    name: document.getElementById("name").value,
    feedback: document.getElementById("fb").value,
    date: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  var text = ["cc", "fuck", "ngu"];
  for (var i = 0; i < text.length; i++) {
    var x = user.feedback.includes(text[i]);
    if (x == true) {
      alert(`Hãy nhận xét một cách lịch sự nhé!!`);
      return;
    }
  }
  var addhtml = `<div><p><i>Ngày ${user.date} tháng ${user.month + 1} năm ${
    user.year
  }</i></p><p><span>${user.name}</span></p><p>${user.feedback}</p></div>`;
  document.getElementById("cmt").insertAdjacentHTML("afterbegin", addhtml);
};

document.getElementById("no1").onmousemove = function () {
  document.getElementById("no1").style.color = "#ffae00";
  document.getElementById("no2").style.color = "#808080";
  document.getElementById("no3").style.color = "#808080";
  document.getElementById("no4").style.color = "#808080";
  document.getElementById("no5").style.color = "#808080";
};
document.getElementById("no2").onmousemove = function () {
  document.getElementById("no1").style.color = "#ffae00";
  document.getElementById("no2").style.color = "#ffae00";
  document.getElementById("no3").style.color = "#808080";
  document.getElementById("no4").style.color = "#808080";
  document.getElementById("no5").style.color = "#808080";
};
document.getElementById("no3").onmousemove = function () {
  document.getElementById("no1").style.color = "#ffae00";
  document.getElementById("no2").style.color = "#ffae00";
  document.getElementById("no3").style.color = "#ffae00";
  document.getElementById("no4").style.color = "#808080";
  document.getElementById("no5").style.color = "#808080";
};
document.getElementById("no4").onmousemove = function () {
  document.getElementById("no1").style.color = "#ffae00";
  document.getElementById("no2").style.color = "#ffae00";
  document.getElementById("no3").style.color = "#ffae00";
  document.getElementById("no4").style.color = "#ffae00";
  document.getElementById("no5").style.color = "#808080";
};
document.getElementById("no5").onmousemove = function () {
  document.getElementById("no1").style.color = "#ffae00";
  document.getElementById("no2").style.color = "#ffae00";
  document.getElementById("no3").style.color = "#ffae00";
  document.getElementById("no4").style.color = "#ffae00";
  document.getElementById("no5").style.color = "#ffae00";
};
