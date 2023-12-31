$.fn.preload = function(){
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var preload_path = "img/";
$([ preload_path+"bg_collabo_01.webp",
    preload_path+"bg_collabo_02.webp",
    preload_path+"bg_collabo_03.webp",
    preload_path+"bg_custom.webp",
    preload_path+"bg_footer.webp",
    preload_path+"bg_paper_down.webp",
    preload_path+"bg_paper_full_01.webp",
    preload_path+"bg_paper_full_02.webp",
    preload_path+"bg_paper_up.webp",
    preload_path+"bg_paper_up_01.webp",
    preload_path+"bg_store_01.webp",
    preload_path+"bg_store_02.webp",
    preload_path+"bg_store_03.webp",
    preload_path+"bg_store_04.webp",
    preload_path+"bg_styling.webp",
    preload_path+"bg_styling_02.webp",
    preload_path+"img_care_01.webp",
    preload_path+"img_care_01_01.webp",
    preload_path+"img_care_02.webp",
    preload_path+"img_care_02_01.webp",
    preload_path+"img_care_03.webp",
    preload_path+"img_care_03_01.webp",
    preload_path+"img_care_04.webp",
    preload_path+"img_care_04_01.webp",
    preload_path+"img_care_05.webp",
    preload_path+"img_care_05_01.webp",
    preload_path+"img_care_06.webp",
    preload_path+"drmartens_logo_b.svg",
    preload_path+"drmartens_logo_o.svg",
    preload_path+"drmartens_logo_w.svg",
    preload_path+"bg_edge_bottom.webp",
    preload_path+"bg_edge_top.webp",
    preload_path+"img_1901.webp",
    preload_path+"img_1945.webp",
    preload_path+"img_1960.webp",
    preload_path+"img_1970.webp",
    preload_path+"img_1980.webp",
    preload_path+"img_1990.webp",
    preload_path+"img_2000.webp",
    preload_path+"img_2010.webp",
    preload_path+"img_secection09_01.webp",
    preload_path+"img_secection09_02.webp",
    preload_path+"img_secection09_03.webp",
    preload_path+"img_item_01.webp",
    preload_path+"img_item_02.webp",
    preload_path+"img_item_03.webp",
    preload_path+"img_item_04.webp",
    preload_path+"img_item_05.webp",
    preload_path+"img_item_06.webp",
    preload_path+"img_logo_collabo_w_01.webp",
    preload_path+"img_logo_collabo_w_02.webp",
    preload_path+"img_logo_collabo_w_03.webp",
    preload_path+"icon_drmartens_32.ico",
    preload_path+"icon_drmartens_57.webp",
    preload_path+"icon_drmartens_72.webp",
    preload_path+"icon_drmartens_114.webp",
    preload_path+"icon_drmartens_144.webp",
    preload_path+"img_styling_01.webp"]).preload();
