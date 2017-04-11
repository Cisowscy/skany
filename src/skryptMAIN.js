$(document).ready(function () {


    var ElTab = "";

$("#ZATWIERDZ_WYBOR").click(function () {
      /* var select = $('select#listaSYGNATUR');
       var selectedItem= select.find(':selected');
       var selectedVal = select.val();
       var selectedText = selectedItem.text();
       var optgroupLabel = selectedItem.parent().prop('label');
    $('#result').empty();
     $('#result').append("val =" + selectedVal + " text ="+ selectedText+" group =" + optgroupLabel );*/
 /*MINIATURY
     $('#MINIATURYdiv').empty();*/
    ElTab = $('select#listaSYGNATUR').val();
    
    try {
        
    } catch (error) {
        
    }
     $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    $('#MINIATURY').append('<img src="http://agadd.home.net.pl/metrykalia/300/sygn.%203/thumbnails/PL_1_300_3_0000-metryczka.jpg">');
    

   });   

/*MINIATURY*/
















                
    //Klawisz zatwierdzania radio
            $('#radio_value').click(function () {
                $('#result').empty();
                Wybrany_Zespol = $("form input[name='IDZ_Zespolu']:checked").val();
                if ($("form input[name='IDZ_Zespolu']").is(':checked')) {
                   /* $('#result').append("Wybrany zespol to: :<span> " + Wybrany_Zespol + " </span>");*/
                    $("#Z_298").hide();
    $("#Z_299").hide();
    $("#Z_300").hide();
    $("#Z_301").hide();
    $("#Z_302").hide();
    $("#Z_436").hide();
    $("#Z_437").hide();
    $("#Z_439").hide();
    $("#Z_456").hide();
                    $("#"+Wybrany_Zespol).show();



                } else {
                    alert(" Proszę wybrać ktoras z pozycji! ");
                }
            });
    //zmiana radio
   /* $("input[name='IDZ_Zespolu']").change(function(){
Wybrany_Zespol = $("form input[name='IDZ_Zespolu']:checked").val();
alert("wybrano zespol: : " +Wybrany_Zespol);
});*/
    //Klawisz zreset radio
 /*  $('#radio_reset').click(function() {
$('#result').empty();
$("input[name='IDZ_Zespolu']").attr("checked", false);
});*/



});   

