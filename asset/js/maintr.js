// preparing language file
var aLangKeys=new Array();
aLangKeys['en']=new Array();
aLangKeys['se']=new Array();

aLangKeys['en']['about_horsify']='About Horsify';
aLangKeys['en']['FAQs']='FAQs';
aLangKeys['en']['help']='Help';
aLangKeys['en']['language']='Language';
aLangKeys['en']['welcome_to']='Welcome to Horsify';
aLangKeys['en']['horsify']='Horsify is the best and largest horse network worldwide. Share your thoughts, write blog posts, view your photos and videos and more!';
aLangKeys['en']['english']='English';
aLangKeys['en']['swedish']='Swedish';
aLangKeys['en']['read_more']='Read more';
aLangKeys['en']['log_into']='Login into your account';
aLangKeys['en']['remember']='Remember me';
aLangKeys['en']['forgot']='Forgot password?';
aLangKeys['en']['login']='LOGIN';
aLangKeys['en']['or_login']='Or login with';
aLangKeys['en']['have_you']='Do not have an account? Register here';
aLangKeys['en']['create']='Create account';
aLangKeys['en']['okej']='I accept terms and conditions';
aLangKeys['en']['reg']='Register';
aLangKeys['en']['or_reg']='Or register with';
aLangKeys['en']['are_you']='Already a member? Sign in';
aLangKeys['en']['epost']='Email adress';
aLangKeys['en']['passwrd']='Password';
aLangKeys['en']['fname']='First name';
aLangKeys['en']['lname']='Last name';
aLangKeys['en']['bpasswrd']='Password (confirm)';
aLangKeys['en']['pris']='Price plan';
aLangKeys['en']['cland']='Enter your country';
aLangKeys['en']['plus']='Make more with Horisfy PLUS';
aLangKeys['en']['our']='Our prices are very easy to understand. There is no extra or hidden fee. You only pay what is listed here.';
aLangKeys['en']['manad']='Monthly';
aLangKeys['en']['ar']='Yearly';
aLangKeys['en']['sfunc']='Standard Features';
aLangKeys['en']['pfunc']='PLUS Features';


aLangKeys['se']['about_horsify']='Om Horsify';
aLangKeys['se']['FAQs']='FAQs';
aLangKeys['se']['help']='Hjälp';
aLangKeys['se']['language']='Språk';
aLangKeys['se']['welcome_to']='Välkommen till Horsify';
aLangKeys['se']['horsify']='Horsify är det bästa och största hästnätverket över hela världen. Dela med dig av dina tankar, skriv blogginlägg, visa dina bilder och video och mycket mer!';
aLangKeys['se']['english']='Engelska';
aLangKeys['se']['swedish']='Svenska';
aLangKeys['se']['read_more']='Läs mer';
aLangKeys['se']['read_more']='Läs mer';
aLangKeys['se']['log_into']='Logga in på ditt konto';
aLangKeys['se']['remember']='Kom ihåg mig';
aLangKeys['se']['forgot']='Glömt ditt lösenord?';
aLangKeys['se']['login']='LOGGA IN';
aLangKeys['se']['or_login']='Eller logga in med';
aLangKeys['se']['have_you']='Har du inget konto? Registrera här';
aLangKeys['se']['create']='Skapa konto';
aLangKeys['se']['okej']='Jag godkänner användarvillkor';
aLangKeys['se']['reg']='Registrera';
aLangKeys['se']['or_reg']='Eller registrera med';
aLangKeys['se']['are_you']='Redan medlem? Logga in';
aLangKeys['se']['epost']='E-post adress';
aLangKeys['se']['passwrd']='Lösenord';
aLangKeys['se']['fname']='För namn';
aLangKeys['se']['lname']='Efter namn';
aLangKeys['se']['bpasswrd']='Lösenord (bekräfta)';
aLangKeys['se']['pris']='Prisplan';
aLangKeys['se']['cland']='Ange ditt land';
aLangKeys['se']['plus']='Gör mer med Horisfy PLUS';
aLangKeys['se']['our']='Våra priser är mycket lätta att förstå. Det finns ingen extra eller dold avgift. Du betalar bara vad som listas här.';
aLangKeys['se']['manad']='Månad';
aLangKeys['se']['ar']='Helår';
aLangKeys['se']['sfunc']='Standard Funktioner';
aLangKeys['se']['pfunc']='PLUS Funktioner';

$(document).ready(function() {

    // onclick behavior
    $('.nav-link,.text-white, .lead, .lead-7, .lead-4, .btn, .mb-7, .custom-control-label, .text-muted, .divider, .text-center, .ml-1, .text-lighter, .pplan').click( function() {
        var lang = $(this).attr('id'); // obtain language id

        // translate all translatable elements
        $('.nav-link,.text-white, .lead, .lead-7, .lead-4, .btn, .mb-7, .custom-control-label, .text-muted, .divider, .text-center, .ml-1, .text-lighter, .pplan').each(function(i){
          $(this).text(aLangKeys[lang][ $(this).attr('key') ]);
        });

    } );

});


$(document).ready(function() {

    // onclick behavior
    $('#en').click( function() {
 		$('#en').addClass("active");
 		$('#se').removeClass("active");
    });


    // onclick behavior
    $('#se').click( function() {
 		$('#se').addClass("active");
 		$('#en').removeClass("active");
    });

});

$(document).ready(function() {

	$('#login, #price').css('display','none');

});


