
function hide() {
    $("#main_section").hide();
    $("#main_header, #followers_section, #bild_gallery, #video_gallery, #mykonto, #aboutme").addClass("hide");
    $("#pers_info, #konto_inst, #change_pass, #hobby_intress, #notifikatin, #blogg_request").addClass("hide");
    $("#blogg_section, #blogg_header, #blogg_post, #find_blogg, #blogg_follow, #service_page, #foto_gallery, #shopping_page, #calendar_section").addClass("hide");
    $("#horse_kat, #rytt_kat, #stall_kat, #foder_kat, #trans_kat, #service_kat, #prod_kat, #hagar_kat, #vagnar_kat, #sadlar_kat, #tillb_kat").addClass("hide");
    $("#transs_kat, #alla_kat").addClass("hide");
    $("#horse_header, #horse_header_sub, #myhorses, #reg_horse, #find_horse, #horse_forening, #horse_forum").addClass("hide");
    $("#horse_tidning, #horse_faqs, #horse_wiki").addClass("hide");
    $("#horse_info, #horse_galleri, #horse_journal, #training_journal, #tavling_jornal, #horsekontakt, #horseedit").addClass("hide");
}

function show_main_section() {
    hide(); $("#main_header").removeClass("hide");
    $("#main_section").show();
    $("#timeline").addClass("active");
    $("#follows").removeClass("active");
    $("#bildr").removeClass("active");
    $("#videor").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}

function show_followers_section() {
    hide(); $("#main_header").removeClass("hide");
    $("#followers_section").removeClass("hide");
    $("#follows").addClass("active");
    $("#timeline").removeClass("active");
    $("#bildr").removeClass("active");
    $("#videor").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}   

function show_bilder_section() {
    hide(); $("#main_header").removeClass("hide");
    $("#bild_gallery").removeClass("hide");
    $("#bildr").addClass("active");
    $("#videor").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}

function show_video_section() {
    hide(); $("#main_header").removeClass("hide");
    $("#video_gallery").removeClass("hide");
    $("#videor").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#mittkonto").removeClass("active");
    $("#about").removeClass("active");
}   


function show_myaccount_section() {
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide"); 
    $("#pers_info").removeClass("hide");
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");

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
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide");
    $("#pers_info").removeClass("hide"); 
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");

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
    hide(); $("#main_header").removeClass("hide");
    $("#aboutme").removeClass("hide"); 
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");

    $("#about").addClass("active");
    $("#mittkonto").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#bildr").removeClass("active");
}

function show_konto_inst() {
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide"); 
    $("#konto_inst").removeClass("hide");
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");

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
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide");
    $("#change_pass").removeClass("hide");
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");

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
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide");    
    $("#hobby_intress").removeClass("hide");
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");

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
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide");
    $("#notifikatin").removeClass("hide");
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active");    
    
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
    hide(); $("#main_header").removeClass("hide");
    $("#mykonto").removeClass("hide");
    $("#blogg_request").removeClass("hide");
    $("#mittkonto").addClass("active");
    $("#bildr").removeClass("active");
    $("#follows").removeClass("active");
    $("#timeline").removeClass("active");
    $("#blogg").removeClass("active");
    $("#videor").removeClass("active");
    $("#about").removeClass("active"); 

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

function show_blogg(){
	hide(); $("#blogg_header").removeClass("hide");
    $("#blogg_section").removeClass("hide");
    $("#blogHem").addClass("active");
    $("#blogPost").removeClass("active");
    $("#blogFind").removeClass("active");
    $("#blogFollw").removeClass("active");
}

function show_blogg_post(){
    hide(); $("#blogg_header").removeClass("hide");
    $("#blogg_post").removeClass("hide");
    $("#blogPost").addClass("active");
    $("#blogHem").removeClass("active");
    $("#blogFind").removeClass("active");
    $("#blogFollw").removeClass("active");
}

function show_find_blogg(){
    hide(); $("#blogg_header").removeClass("hide");
    $("#find_blogg").removeClass("hide");
    $("#blogFind").addClass("active");
    $("#blogPost").removeClass("active");
    $("#blogHem").removeClass("active");
    $("#blogFollw").removeClass("active");
}

function show_blogg_follow(){
    hide(); $("#blogg_header").removeClass("hide");
    $("#blogg_follow").removeClass("hide");
    $("#blogFollw").addClass("active");
    $("#blogFind").removeClass("active");
    $("#blogPost").removeClass("active");
    $("#blogHem").removeClass("active");
}

function show_horses(){
    hide(); $("#horse_header").removeClass("hide");
    $("#myhorses").removeClass("hide");
    $("#minahorses").addClass("active");
    $("#addhorse").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
}

function show_add_horse() {
    hide(); $("#horse_header").removeClass("hide");
    $("#reg_horse").removeClass("hide");
    $("#addhorse").addClass("active");
    $("#minahorses").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active"); 
}

function show_find_horse() {
    hide(); $("#horse_header").removeClass("hide");
    $("#find_horse").removeClass("hide");
    $("#sokhorse").addClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");             
}

function show_horse_forening() {
    hide(); $("#horse_header").removeClass("hide");
    $("#horse_forening").removeClass("hide");
    $("#forening").addClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");          
}

function show_horse_forum() {
    hide(); $("#horse_header").removeClass("hide");
    $("#horse_forum").removeClass("hide");
    $("#forum").addClass("active");
    $("#forening").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");            
}

function show_horse_tidning() {
    hide(); $("#horse_header").removeClass("hide");
    $("#horse_tidning").removeClass("hide");
    $("#tidning").addClass("active");
    $("#forum").removeClass("active");
    $("#forening").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");            
}

function show_horse_forening() {
    hide(); $("#horse_header").removeClass("hide");
    $("#horse_forening").removeClass("hide");
    $("#forening").addClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");            
}

function show_horse_faqs() {
    hide(); $("#horse_header").removeClass("hide");
    $("#horse_faqs").removeClass("hide");
    $("#faqs").addClass("active");
    $("#forening").removeClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#wiki").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");              
}

function show_horse_wiki() {
    hide(); $("#horse_header").removeClass("hide");
    $("#horse_wiki").removeClass("hide");
    $("#wiki").addClass("active");
    $("#forum").removeClass("active");
    $("#tidning").removeClass("active");
    $("#forening").removeClass("active");
    $("#faqs").removeClass("active");
    $("#sokhorse").removeClass("active");
    $("#addhorse").removeClass("active");
    $("#minahorses").removeClass("active");             
}

function show_horse_profile(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#horse_info").removeClass("hide");
    $("#hastinfo").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#tavlingjornal").removeClass("active");

}

function show_horse_galleri(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#horse_galleri").removeClass("hide");
    $("#hastbild").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_horse_journal(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#horse_journal").removeClass("hide");
    $("#hastjornal").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_training_journal(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#training_journal").removeClass("hide");
    $("#trainingjornal").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
    $("#tavlingjornal").removeClass("active");
}

function show_tavling_journal(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#tavling_jornal").removeClass("hide");
    $("#tavlingjornal").addClass("active");
    $("#edithorse").removeClass("active");
    $("#trainare").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
}

function show_horsekontakt(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#horsekontakt").removeClass("hide");
    $("#trainare").addClass("active");
    $("#edithorse").removeClass("active");
    $("#tavlingjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
}

function show_edit_horse_profile(){
    hide(); $("#horse_header_sub").removeClass("hide");
    $("#horseedit").removeClass("hide");         
    $("#edithorse").addClass("active");
    $("#trainare").removeClass("active");
    $("#tavlingjornal").removeClass("active");
    $("#trainingjornal").removeClass("active");
    $("#hastjornal").removeClass("active");
    $("#hastinfo").removeClass("active");
    $("#hastbild").removeClass("active");
}

function show_services(){
    hide();
    $("#service_page").removeClass("hide");
}

function show_shopping_page(){
    hide(); 
    $("#shopping_page").removeClass("hide");
}

function show_foto_section(){
    hide();
    $("#foto_gallery").removeClass("hide");
}

function show_calendar_section(){	
    hide();
    $("#calendar_section").removeClass("hide");
}

function show_horse_kat(){
    hide();
    $("#horse_kat").removeClass("hide");
}

function show_rytt_kat(){
    hide();
    $("#rytt_kat").removeClass("hide");
}

function show_stall_kat(){
    hide();
    $("#stall_kat").removeClass("hide");
}

function show_foder_kat(){
    hide();
    $("#foder_kat").removeClass("hide");
}

function show_trans_kat(){
    hide();
    $("#trans_kat").removeClass("hide");
}

function show_service_kat(){
    hide();
    $("#service_kat").removeClass("hide");
}

function show_prod_kat(){
    hide();
    $("#prod_kat").removeClass("hide");
}

function show_hagar_kat(){
    hide();
    $("#hagar_kat").removeClass("hide");
}

function show_vagnar_kat(){
    hide();
    $("#vagnar_kat").removeClass("hide");
}

function show_sadlar_kat(){
    hide();
    $("#sadlar_kat").removeClass("hide");
}

function show_tillb_kat(){
    hide();
    $("#tillb_kat").removeClass("hide");
}

function show_transs_kat(){
    hide();
    $("#transs_kat").removeClass("hide");
}

function show_alla_kat(){
    hide();
    $("#alla_kat").removeClass("hide");
}