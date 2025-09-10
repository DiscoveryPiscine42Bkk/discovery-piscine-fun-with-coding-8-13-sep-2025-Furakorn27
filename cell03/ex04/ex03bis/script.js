$(document).ready(function() {
  let count = 3;
  $("#addBtn").on("click", function() {
    $("#list").append("<li>Item " + count + "</li>");
    count++;
  });
});
