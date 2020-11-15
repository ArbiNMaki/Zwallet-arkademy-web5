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
  $(".password .icon-input img").attr(
    "src",
    "assets/icon/lock-active.svg"
  );
  $(".btn").css("backgroundColor", "#6379F4");
  $(".btn").css("color", "white");
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


// page sign-up feature
$('.pin input').on('click',() =>{
  $('.pin input').css('border','1.5px solid #6379F4');
  $('.btn').css('backgroundColor','#6379F4');
  $('.btn').css('color','white');
});

$(".password input").on("click", () => {
  $(".password input").css("border", "1.5px solid #6379F4");
  $(".password .icon-input img").attr(
    "src",
    "assets/icon/lock-active.svg"
  );
  $(".btn").css("backgroundColor", "#6379F4");
  $(".btn").css("color", "white");
});