

$( ".nav-item" ).click(function(e) {

//Remove active from nav-item
 var items = $(".nav-item");
 items.removeClass("active" );

 //Mark current target active
 var target = e.currentTarget;
 target.classList.add("active");

});
