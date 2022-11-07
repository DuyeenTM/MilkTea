function sendfb() {
  var name = document.getElementById("name").value;
  var ftitle = document.getElementById("f-title").value;
  var fb = document.getElementById("fb").value;
  alert(
    `Cảm ơn bạn đã gửi góp ý cho chúng tôi.\n Xem lại góp ý của bạn:\n Họ và tên: ${name} \n Vấn đề: ${ftitle} \n Chi tiết: ${fb}`
  );
}
document.getElementById("sendfb").onclick = function () {
  sendfb();
};
