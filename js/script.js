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
  $("#form").submit(function(event) {
    var name = $("input.name").val();
    var email = $("input.email").val(); 
    var message = $("input.message").val();

    var results = name + ", " + "your message has successfully been received.Thank you for visiting us.";
    if ((name <=[1]) || (email <=[5]) || (message <=[1])) {
      alert("There is nothing to be sumbited!")
    }else {
    alert(results);
    }
    
    $("#story").show();
    event.preventDefault();
  });
});