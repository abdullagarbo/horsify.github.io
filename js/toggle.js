function hide() {
    $("#main_section, #followers_section, #bild_gallery, #video_gallery, #mykonto, #aboutme").hide();
}

function show_main_section() {
    hide(); $("#main_section").show();
    $("#timeline").addClass("active");
    $("#blogg").removeClass("active");
    $("#follows").removeClass("active");
    $("#bildr").removeClass("active");
    $("#videor").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}

function show_followers_section() {
    hide(); $("#followers_section").removeClass("hide");
    $("#followers_section").show();
    $("#follows").addClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#bildr").removeClass("active");
    $("#videor").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}   

function show_bilder_section() {
    hide(); $("#bild_gallery").removeClass("hide");
    $("#bild_gallery").show();
    $("#bildr").addClass("active");
    $("#videor").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}

function show_video_section() {
    hide(); $("#video_gallery").removeClass("hide");
    $("#video_gallery").show();
    $("#videor").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}   


function hyde() {
    $("#pers_info, #konto_inst, #change_pass, #hobby_intress, #notifikatin, #blogg_request").hide();
}

function show_myaccount_section() {
    show_profile_page(); hide_prod_kat();
    hide(); hyde(); hyyyde(); $("#mykonto").show(); 
    $("#pers_info").show();
    $("#per-info").removeClass("h7 title");
    $("#per-info").addClass("h6 title");                

    $("#kon-inst").removeClass("h6 title");
    $("#kon-inst").addClass("h7 title");

    $("#chang-pass").removeClass("h6 title");
    $("#chang-pass").addClass("h7 title");

    $("#intresse").removeClass("h6 title");
    $("#intresse").addClass("h7 title");

    $("#nottifik").removeClass("h6 title");
    $("#nottifik").addClass("h7 title");

    $("#blogg-req").removeClass("h6 title");
    $("#blogg-req").addClass("h7 title");
}

function show_pers_info() {
    show_profile_page();
    hide(); hyde(); $("#mykonto").show(); 
    $("#pers_info").show();
    $("#per-info").removeClass("h7 title");
    $("#per-info").addClass("h6 title");                

    $("#kon-inst").removeClass("h6 title");
    $("#kon-inst").addClass("h7 title");

    $("#chang-pass").removeClass("h6 title");
    $("#chang-pass").addClass("h7 title");

    $("#intresse").removeClass("h6 title");
    $("#intresse").addClass("h7 title");

    $("#nottifik").removeClass("h6 title");
    $("#nottifik").addClass("h7 title");

    $("#blogg-req").removeClass("h6 title");
    $("#blogg-req").addClass("h7 title");           
}

function show_aboutme() {
    show_profile_page(); hide_prod_kat();
    hide(); hyde(); hyyyde(); $("#aboutme").show();
    $("#about").addClass("active");
    $("#mittkonto").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#bildr").removeClass("active");
}

function show_konto_inst() {
    show_profile_page(); hide_prod_kat();
    hide(); hyde(); hyyyde(); $("#mykonto").show(); 
    $("#konto_inst").show();
    $("#kon-inst").removeClass("h7 title");
    $("#kon-inst").addClass("h6 title");                

    $("#per-info").removeClass("h6 title");
    $("#per-info").addClass("h7 title");

    $("#chang-pass").removeClass("h6 title");
    $("#chang-pass").addClass("h7 title");

    $("#intresse").removeClass("h6 title");
    $("#intresse").addClass("h7 title");

    $("#nottifik").removeClass("h6 title");
    $("#nottifik").addClass("h7 title");

    $("#blogg-req").removeClass("h6 title");
    $("#blogg-req").addClass("h7 title");
}

function show_change_pass() {
    hyde(); $("#change_pass").show();
    $("#chang-pass").removeClass("h7 title");
    $("#chang-pass").addClass("h6 title");              

    $("#per-info").removeClass("h6 title");
    $("#per-info").addClass("h7 title");

    $("#kon-inst").removeClass("h6 title");
    $("#kon-inst").addClass("h7 title");

    $("#intresse").removeClass("h6 title");
    $("#intresse").addClass("h7 title");

    $("#nottifik").removeClass("h6 title");
    $("#nottifik").addClass("h7 title");

    $("#blogg-req").removeClass("h6 title");
    $("#blogg-req").addClass("h7 title");
}

function show_intresse() {
    hyde(); $("#hobby_intress").show();
    $("#intresse").removeClass("h7 title");
    $("#intresse").addClass("h6 title");

    $("#chang-pass").removeClass("h6 title");
    $("#chang-pass").addClass("h7 title");              

    $("#per-info").removeClass("h6 title");
    $("#per-info").addClass("h7 title");

    $("#kon-inst").removeClass("h6 title");
    $("#kon-inst").addClass("h7 title");

    $("#nottifik").removeClass("h6 title");
    $("#nottifik").addClass("h7 title");

    $("#blogg-req").removeClass("h6 title");
    $("#blogg-req").addClass("h7 title");
}

function show_notifikation() {
    hyde(); $("#notifikatin").show();
    $("#nottifik").removeClass("h7 title");
    $("#nottifik").addClass("h6 title");

    $("#intresse").removeClass("h6 title");
    $("#intresse").addClass("h7 title");

    $("#chang-pass").removeClass("h6 title");
    $("#chang-pass").addClass("h7 title");              

    $("#per-info").removeClass("h6 title");
    $("#per-info").addClass("h7 title");

    $("#kon-inst").removeClass("h6 title");
    $("#kon-inst").addClass("h7 title");

    $("#blogg-req").removeClass("h6 title");
    $("#blogg-req").addClass("h7 title");
}

function show_blogg_req() {
    hyde(); $("#blogg_request").show();
    $("#blogg-req").removeClass("h7 title");
    $("#blogg-req").addClass("h6 title");

    $("#nottifik").removeClass("h6 title");
    $("#nottifik").addClass("h7 title");

    $("#intresse").removeClass("h6 title");
    $("#intresse").addClass("h7 title");

    $("#chang-pass").removeClass("h6 title");
    $("#chang-pass").addClass("h7 title");              

    $("#per-info").removeClass("h6 title");
    $("#per-info").addClass("h7 title");

    $("#kon-inst").removeClass("h6 title");
    $("#kon-inst").addClass("h7 title");
}

function hyyde() {
    $("#profile_page, #blogg_section, #horse_section, #service_page, #foto_gallery, #horse_profile, #shopping_page, #calendar_section").hide();
}

function show_blogg(){
	hyyde(); hide_prod_kat();
    $("#blogg_section").removeClass("hide");
	$("#blogg_section").show();
}

function show_foto_section(){
    hyyde(); hide_prod_kat();
    $("#foto_gallery").removeClass("hide");
    $("#foto_gallery").show();
}

function show_horses(){
    hyyde(); hide_prod_kat();
    $("#horse_section").removeClass("hide");
    $("#horse_section").show();
    show_my_horses();
}

function show_profile_page(){
    hyyde(); hide_prod_kat();
    $("#profile_page").show();
    show_main_section();
}

function show_services(){
    hyyde(); hide_prod_kat();
    $("#service_page").removeClass("hide");
    $("#service_page").show();
}

function show_shopping_page(){
    hyyde(); $("#shopping_page").removeClass("hide");
    hide_prod_kat();
    $("#shopping_page").show();
}

function show_calendar_section(){	
    hyyde(); hide_prod_kat();
    $("#calendar_section").removeClass("hide");
    $("#calendar_section").show();
}

function hide_prod_kat(){
   $("#shopping_page, #horse_kat, #rytt_kat, #stall_kat, #foder_kat, #trans_kat, #service_kat, #prod_kat, #hagar_kat, #vagnar_kat, #sadlar_kat, #tillb_kat").hide();
   $("#shopping_page, #transs_kat, #alla_kat").hide(); 
}

function show_horse_kat(){
    hide_prod_kat();
    $("#horse_kat").removeClass("hide");
    $("#horse_kat").show();
}

function show_rytt_kat(){
    hide_prod_kat();
    $("#rytt_kat").removeClass("hide");
    $("#rytt_kat").show();
}

function show_stall_kat(){
    hide_prod_kat();
    $("#stall_kat").removeClass("hide");
    $("#stall_kat").show();
}

function show_foder_kat(){
    hide_prod_kat();
    $("#foder_kat").removeClass("hide");
    $("#foder_kat").show();
}

function show_trans_kat(){
    hide_prod_kat();
    $("#trans_kat").removeClass("hide");
    $("#trans_kat").show();
}

function show_service_kat(){
    hide_prod_kat();
    $("#service_kat").removeClass("hide");
    $("#service_kat").show();
}

function show_prod_kat(){
    hide_prod_kat();
    $("#prod_kat").removeClass("hide");
    $("#prod_kat").show();
}

function show_hagar_kat(){
    hide_prod_kat();
    $("#hagar_kat").removeClass("hide");
    $("#hagar_kat").show();
}

function show_vagnar_kat(){
    hide_prod_kat();
    $("#vagnar_kat").removeClass("hide");
    $("#vagnar_kat").show();
}

function show_sadlar_kat(){
    hide_prod_kat();
    $("#sadlar_kat").removeClass("hide");
    $("#sadlar_kat").show();
}

function show_tillb_kat(){
    hide_prod_kat();
    $("#tillb_kat").removeClass("hide");
    $("#tillb_kat").show();
}

function show_transs_kat(){
    hide_prod_kat();
    $("#transs_kat").removeClass("hide");
    $("#transs_kat").show();
}

function show_alla_kat(){
    hide_prod_kat();
    $("#alla_kat").removeClass("hide");
    $("#alla_kat").show();
}


function hyyyde() {
    $("#myhorses, #reg_horse, #find_horse, #horse_forening, #horse_forum").hide();
    $("#horse_tidning, #horse_faqs, #horse_wiki, #horse_profile").hide();
    $("#horse_galleri, #horse_journal, #training_journal, #tavling_jornal").hide();
}

function show_my_horses() {
    hyyyde(); $("#myhorses").show();
    $("#minahorses").addClass("active");
    $("#addhorse").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");  
}

function show_add_horse() {
    hyyyde(); $("#reg_horse").show();
    $("#addhorse").addClass("active");
    $("#minahorses").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");  
}

function show_find_horse() {
    hyyyde(); $("#find_horse").show();
    $("#sokhorse").addClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");              
}

function show_horse_forening() {
    hyyyde(); $("#horse_forening").show();
    $("#forening").addClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active"); 

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");          
}

function show_horse_forum() {
    hyyyde(); $("#horse_forum").show();
    $("#forum").addClass("active");
    $("#forening").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");              
}

function show_horse_tidning() {
    hyyyde(); $("#horse_tidning").show();
    $("#tidning").addClass("active");
    $("#forum").removeClass("active");
    $("#forening").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");              
}

function show_horse_forening() {
    hyyyde(); $("#horse_forening").show();
    $("#forening").addClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");              
}

function show_horse_faqs() {
    hyyyde(); $("#horse_faqs").show();
    $("#faqs").addClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");              
}

function show_horse_wiki() {
    hyyyde(); $("#horse_wiki").show();
    $("#wiki").addClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#forening").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");

    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");              
}



function show_horse_profile(){
    hyyyde();  $("#horse_profile").removeClass("hide");
    $("#horse_profile").show();
    show_horse_info();

}           



function hyyyyde(){
    $("#horse_info, #horse_galleri, #horse_journal, #training_journal, #tavling_jornal, #horsekontakt, #horseedit").hide();                                 
}

function show_horse_info(){
    hyyyyde(); $("#horse_info").show();
    $("#hastinfo").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_horse_galleri(){
    hyyyyde(); $("#horse_galleri").show();
    $("#hastbild").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_horse_journal(){
    hyyyyde(); $("#horse_journal").show();
    $("#hastjornal").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_training_journal(){
    hyyyyde(); $("#training_journal").show();
    $("#trainingjornal").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_tavling_journal(){
    hyyyyde(); $("#tavling_jornal").show();
    $("#tavlingjornal").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
}

function show_horsekontakt(){
    hyyyyde(); $("#horsekontakt").show();
    $("#trainare").addClass("active");
    $("#edithorse").removeClass("active");
    $("#tavlingjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
}

function show_edit_horse_profile(){
    hyyyyde(); $("#horseedit").show();          
    $("#edithorse").addClass("active");
    $("#trainare").removeClass("active");
    $("#tavlingjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
}

