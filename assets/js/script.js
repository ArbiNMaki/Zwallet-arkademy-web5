$(".input-notes input").on("click", () => {
  $(".input-notes input").css("border-bottom", "1.5px solid #6379F4");
  $(".input-notes input").css("color", "#3A3D42");
  $(".input-notes input").css("fontWeight", "600");
  $(".icon-pencil").attr("src", "assets/icon/pencil-active.svg");
});

$(".username input").on("click", () => {
  $(".username input").css("border", "1.5px solid #6379F4");
  $(".username img").attr("src", "assets/icon/person-active.svg");
});
$(".email input").on("click", () => {
  $(".email input").css("border", "1.5px solid #6379F4");
  $(".email img").attr("src", "assets/icon/mail-active.svg");
});
$(".password input").on("click", () => {
  $(".password input").css("border", "1.5px solid #6379F4");
  $(".password .icon-input img").attr("src", "assets/icon/lock-active.svg");
  $(".btn").css("backgroundColor", "#6379F4");
  $(".btn").css("color", "white");
});

$(".pin-verify").on("click", function () {
  $(".input-line").hide();
  $(".form-control").css("border", "1px solid #6379f2");
  $(".btn").css("backgroundColor", "#6379F4");
  $(".btn").css("color", "white");
});

$(".pin .form-control").on("click", function () {
  $(".input-line").hide();
  $(".form-control").css("border", "1px solid #6379f2");
});

$(".amount").on("click", function () {
  $(".amount").css("color", "#6379F4 !important");
  $(".amount").val("Rp");
});

let eye = true;
$(".eye-crossed").on("click", () => {
  if (eye === true) {
    $(".password input").attr("type", "text");
    eye = false;
  } else {
    $(".password input").attr("type", "password");
    eye = true;
  }
});
