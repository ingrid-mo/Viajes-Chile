$(function() {
// smoth scroll
    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate ({
                scrollTop: $(gato).offset().top
            }, 1000, function() {
                window.location.hash = gato;
            });
        }

    })
// tool tips
  
        $('[data-toggle="tooltip"]').tooltip(100)

// transforma el scroll de transparent a info y haci viceversa cada ver que se haga scroll en 100px 


      $(window).scroll(function(){
        if ($("#menu").offset().top > 150) {
            $("#menu").addClass("bg-info");
        }
        else{
            $("#menu").removeClass("bg-info");
        }
    }); 
        $(window).scroll(function(){
            if ($("#menu").offset().top < 50) {
                $("#menu").addClass("bg-transparent");
            }
            else{
                $("#menu").removeClass("bg-transparent");
            }
 
}); 
})
      