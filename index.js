

$( ".nav-item" ).click(function(e) {

//Remove active from nav-item
 var items = $(".nav-item");
 items.removeClass("active" );

 //Mark current target active
 var target = e.currentTarget;
 target.classList.add("active");

});

$('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);
        var scroll;

        if($(window).scrollTop()==0){
            scroll =  ($target.offset().top) - 160
        }else{
            scroll =  ($target.offset().top) - 60
        }
        $('html, body').stop().animate({
            'scrollTop': scroll
        }, 900, 'swing', function () {
            //window.location.hash = target;
        });
    });
