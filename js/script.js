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

  var thumbs = $(".pic1 img, .pic2 img, .pic3 img, .pic4 img, .pic5 img, .pic6 img, .pic7 img, .pic8 img");

	for (var i = 0; i < thumbs.length; i++){
		if (thumbs[i].title && thumbs[i].title.length > 0){
			var imgtitle = thumbs[i].title;
			$(thumbs[i]).wrap('<div class="wrapper wrapper'+i+'" />').
			after('<div class=\'caption\'>' + imgtitle + '</div>').
			removeAttr('title');
		}
	}
  $('.wrapper0, .wrapper1, .wrapper2, .wrapper3, .wrapper4, .wrapper5, .wrapper6, .wrapper7').hover(
    function(){
      $(this).find('img').animate({opacity: ".4"}, 300);
      $(this).find('.caption').animate({top:"-247px"}, 300);
    },
    function(){
      $(this).find('img').animate({opacity: "1.0"}, 300);
      $(this).find('.caption').animate({top:"-370px"}, 100);
    }
  );

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
    
    event.preventDefault();
  });
});