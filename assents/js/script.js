$(function() {

    $("a").click(function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate ({
                scrollTop: $(gato).offset().top
            }, 800, function() {
                window.location.hash = gato;
            });
        }

    })

  
        $('[data-toggle="tooltip"]').tooltip(100)
     
      $(window).scroll(function(){
        if ($("#menu").offset().top > 100) {
            $("#menu").addClass("bg-info");
        }
        else{
            $("#menu").removeClass("bg-info");
        }
    }); 
        $(window).scroll(function(){
            if ($("#menu").offset().top < 100) {
                $("#menu").addClass("bg-transparent");
            }
            else{
                $("#menu").removeClass("bg-transparent");
            }
 
}); 
})
      