$(function(){
    $(".wait_scroll").each(function(){
        $(this).prepend("<div class='show_trigger'></div>");
    });    
    let tick = false;
    var current_scroll,wh;
    function show_whatever(el, scrollPos, wh){ 
        var el_offset_t = el.offset().top; 
        if(scrollPos > el_offset_t - wh){
            el.parent().removeClass("wait_scroll");
            setTimeout(function(){
                el.parent().removeClass("not_yet");
                el.remove();
            }, 3000);
            
            
            
        }    
    }
    function wait(scrollPos) {
        var wh =  $(window).height();
        $(".show_trigger").each(function(){
            show_whatever($(this), scrollPos, wh);
        }); 
    }
    document.addEventListener('scroll', function(e) {
        if (!tick) {
            window.requestAnimationFrame(function() {
                wait(window.scrollY);
                tick = false;
            });
            tick = true;
        }
    });
});