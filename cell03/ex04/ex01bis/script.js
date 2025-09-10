$(document).ready(function() {
  $("#showBtn").on("click", function() {
    let text = $("#inputBox").val();
    $("#display").text("You typed: " + text);
  });
});
