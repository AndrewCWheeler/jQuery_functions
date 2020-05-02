/* 1st row of pictures ... */
$("#cardButton").click(function () {
  $("#card").fadeOut(1000, function () {
    $("#cardBox").html(
      "<p style='font-size: 16px; font-family: Times New Roman, Times, serif; text-align: center; padding-top: 80px;'><a href='https://api.jquery.com/fadeOut/#fadeOut-duration-complete'>Click here</a> to learn more about how to make an object fadeOut using jQuery.</p>"
    );
  });
});

$("#cardButton").click(function () {
  $("#card").show("slow");
});

$("#hideButton").click(function () {
  $("#hiding").hide(function () {
    $("#hidingBox").html(
      "<p style='font-size: 16px; font-family: Times New Roman, Times, serif; text-align: center; padding-top: 80px;'><a href='https://api.jquery.com/hide/#hide'>Click here</a> to learn more about jQuery's hide() method.</p>"
    );
  });
});

$("#hideButton").click(function () {
  $("#hide").show();
});

$("#show").hide();

$("#showButton").click(function () {
  $("#curtain").fadeOut(100, function () {
    $("#show").show();
  });
});

/* 2nd row of pictures */
$("#lightSwitch").click(function () {
  $("#light").toggle();
});

$("#slide").hide();
$("#slideButton").click(function () {
  $("#slide").slideDown(2000, function () {
    $(this).show();
  });
});

$("#slideguitar").show();
$("#slideUpBtn").click(function () {
  $("#slideguitar").slideUp(2000, function () {
    $(this).hide();
  });
});

/* 3rd row of pictures ... */
$("#slidingBtn").click(function () {
  $("#sliding").slideToggle("slow");
});

$("#fadingIn").hide();
$("#fadingInBtn").click(function () {
  $("#fadingIn").fadeIn(3000);
});

$("#addClassBtn").click(function () {
  $("p span").last().addClass("hotpink");
});

/* 4th row of pictures ... */
$("#beforeBtn").click(function () {
  $("#before p").before(
    "<br><p style='font-size: 18px; font-family: Times New Roman, Times, serif; text-align: center; padding-top: 80px; color: white;'>Booyah!</br></p>"
  );
});
