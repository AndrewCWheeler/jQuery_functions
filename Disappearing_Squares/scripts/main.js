function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 2,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};

$("#reset").click(function () {
  $("#1, #2, #3, #4, #5, #6, #7, #8").show();
});

$("#1").click(function () {
  $(this).hide();
  $(this).val(0);
});

$("#2").click(function () {
  $(this).hide();
});

$("#3").click(function () {
  $(this).hide();
});

$("#4").click(function () {
  $("#3").show();
});

$("#5").click(function () {
  $("#5, #4").hide();
});

$("#6").click(function () {
  $(this).hide();
});

$("#7").click(function () {
  $("#5").show();
});

$("#8").click(function () {
  $("#7, #8").hide();
});
