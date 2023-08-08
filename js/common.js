history.scrollRestoration = "manual";

var gage = 100;
var loadings;
function loading_start(){
    loadings = setInterval(function(){
        gage -= 6;
        $(".loading_cover .gage div").stop().animate({width: gage + "%"});
    }, 250);
}
function loading_end(){
    clearInterval(loadings);
    $(".loading_cover .gage div").stop().animate({width: "0%"}, 750);
    setTimeout(function(){ 
        $(".loading_cover").fadeOut(1500);
    }, 750); 
    setTimeout(function(){            
        $("body").addClass("done").removeClass("loading");
        setTimeout(function(){  
            $(".loading_cover h1").addClass("done");
            $(".loading_cover").remove();
            setTimeout(function(){
                $("body").removeClass("not_yet");
            }, 2500);
        }, 2500);
    }, 2000);
}


var w_w, w_h, re_resize_timer;
function resize_check(){
    clearTimeout(re_resize_timer);
    re_resize_timer = setTimeout(function(){        
        window.addEventListener("DOMContentLoaded", function (ev) {
            const { innerHeight } = window;
        });
        w_w = $(window).width();
        w_h = innerHeight;
        $("#visual.section_01 .width_con").height(w_h);
        if(w_w < 1000){
            $("#header.section_00 .width_con .nav_con").height(w_h);
        }else{
            $("#header.section_00 .width_con .nav_con").attr("style","");
            $("html").removeClass("open_menu");
        }
        $(".spacer").css({paddingBottom: $("#footer.section_10").height()});
    }, 100);
}


$(window).on("resize",function(){
    resize_check();
});




$(function(){
    loading_start();
    
    
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 400) {
            $("#home_btn").addClass("on");
        }else{
            $("#home_btn").removeClass("on");
        }
    });
    
    

    $("#collabo.section_03 .width_con ul.brands").on('afterChange', function(event, slick, currentSlide, nextSlide){
        var ix = currentSlide + 1;
        $("#collabo.section_03").attr("style","background: url(img/bg_collabo_0" + ix + ".webp) 50% 50% no-repeat; background-size: cover;");
    });
    
    $("#store.section_09 .width_con ul.v_con li.cells").click(function(){
        var idx = $(this).index() + 1; 
        $("#store.section_09 .width_con .large_view .text_box").removeClass("selected");
        $("#tab_" + idx).addClass("selected");
        $("#store.section_09 .width_con .large_view img").attr("style","background: url(img/bg_store_0" + idx + ".webp) 50% 50% no-repeat; background-size: cover;");
    }); 
    
    $("#store.section_09 .width_con ul.v_con li.cells").click(function(){
        $("#store.section_09 .width_con ul.v_con li.cells").removeClass("click")
        $(this).addClass("click")
    });
    
    $("#footwear.section_04 .width_con .v_con > .cells > .v_con li.cells").click(function(){
        if($(window).width() < 1000){
            if(!$(this).hasClass("show")){
                $(this).addClass("show");
                $("html").addClass("lock");
            }
        }
    });
    $("#footwear.section_04 .width_con .v_con > .cells > .v_con li.cells .full .close_btn").click(function(){
        setTimeout(function(){
            $("#footwear.section_04 .width_con .v_con > .cells > .v_con li.cells").removeClass("show");
            $("html").removeClass("lock");
        }, 1);
    });
});
var ss_01_h, ss_02_h;
function resize(){
    ss_01_h = $(".slide_section .section").eq(0).height();
    ss_02_h = $(".slide_section .section").eq(1).height();
    $(".slide_section").height(ss_01_h);
    $(".slide_section .section").eq(1).css({marginTop: ss_01_h * -1});
}


$(window).load(function(){
    resize();
    $(window).resize(function(){
        resize();
    });
    $(".slide_section .btn_slide").click(function(){        
        resize();
        $(".slide_section").toggleClass("slided");
        if($(".slide_section").hasClass("slided")){
            //밀려났을때
            $(".slide_section").height(ss_02_h);
        }else{
            //원래상태
            $(".slide_section").height(ss_01_h);
        }        
    });

    resize_check();
    $("#header.section_00 .width_con .nav_con > i, .nav_cover, #header.section_00 .width_con .nav_con ul li a").click(function(){
        if(w_w < 1000){
            resize_check();
            $("html").toggleClass("open_menu");
        }
    });    

    
});

$(window).load(function(){
    setTimeout(function(){
        $("body").addClass("done");
    }, 3500);
    setTimeout(function(){
        loading_end();
    }, 2500);
});