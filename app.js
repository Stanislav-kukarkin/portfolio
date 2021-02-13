$(function(){
    $("[data-scroll]").on("click", function(event){
      event.preventDefault();
      blockID = $(this).data(`scroll`);
      blockoffset=$(blockID).offset().top;

        $("html, body").animate({
            scrollTop: blockoffset -10 
        }, 700);

    });    

 $("[data-modal]").on("click", function(event){
     event.preventDefault();
     $(modal_resume).addClass(`show`);
        
    });
    $(modal_resume).on("click", function(){
        $(modal_resume).removeClass(`show`);  
    });

});