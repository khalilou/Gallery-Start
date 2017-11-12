$(document).ready(function (){
    
    $(document).on("click", ".link-img", function (){
        var eltCourant = $(this);
        var url = eltCourant.attr("src");  
        $(".displayed-img").attr("src", url);
    });  

    $(document).on("click", ".dark", function(){
    	var test = $(this);
    	var couleur = $('.overlay');
    	var currentText = $(test).html();
    	var newText = currentText == "Lighten" ? "Darken" : "Lighten"
    	var currentOpacity = $(couleur).css('opacity')
    	var newOpacity = currentOpacity == 0 ? 0.5 : 0
    	$(test).html(newText);
    	$(couleur).css('background-color', 'grey').css('opacity', newOpacity);
    }) 
});