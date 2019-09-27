$(document).ready(function() {
  $("#img1, #dec").click(function() {
    $("#img1").toggle();
    $("#dec").toggle();
  });
  $("#img2, #dev").click(function() {
    $("#img2").toggle();
    $("#dev").toggle();
  });
  $("#img3, #prd").click(function() {
    $("#img3").toggle();
    $("#prd").toggle();
  });
});