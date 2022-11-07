function sendfb() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var ftitle = document.getElementById("ftitle").value;
  var question = document.getElementById("question").value;
  alert(
    `Cảm ơn bạn đã gửi thắc cho chúng tôi.\n Chúng tôi sẽ phản hồi lại sớm nhất có thể.\n Xem lại góp ý của bạn:\n Họ và tên: ${name} \n Email:  ${email}\n SĐT: ${phone}\n Vấn đề: ${ftitle} \n Thắc mắc: ${question}`
  );
}
document.getElementById("sendinfo").onclick = function () {
  sendfb();
};
