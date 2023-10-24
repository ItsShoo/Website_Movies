$(".toggle-password2").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    if ($("#pass_signup2").attr("type") == "password") {
      $("#pass_signup2").attr("type", "text");
    } else {
      $("#pass_signup2").attr("type", "password");
    }
  });