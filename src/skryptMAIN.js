$(document).ready(function () {
    $("#ZATWIERDZ_WYBOR").hide();
    $("#Fi_myMap").hide();
    var ElTab = "";
    $('select#listaSYGNATUR').change(function () {
        ElTab = $('select#listaSYGNATUR').val();
        $('#MINIATURY').empty();
        /*alert("wybrano zespol: : " + ElTab);*/
        if (ElTab > 583) {
            $("#ZATWIERDZ_WYBOR").show();
        } else {
            $("#ZATWIERDZ_WYBOR").hide();
        }
    });

    $("#ZATWIERDZ_WYBOR").click(function (event) {
        $('a[href^="#GAELERIA"]');
        ElTab = $('select#listaSYGNATUR').val();
        $.getJSON('https://cisowscy.github.io/skany/src/bazaSygLink.json', function (SygLink) {
            var LinkA = "http://" + SygLink[ElTab][3] + ".home.net.pl/metrykalia/" + SygLink[ElTab][2][0] + encodeURI("/sygn. " + SygLink[ElTab][2][1]) + "/";
            var IDLPa = "Z_" + SygLink[ElTab][2][0] + "_S_" + SygLink[ElTab][2][1];
            for (var i = 0; i < SygLink[ElTab][2][2].length; i++) {
                var LinkC = encodeURI(SygLink[ElTab][2][2][i]) + ".jpg";
                var IDLPb = "_X_" + SygLink[ElTab][2][2][i];
                var IDLP = IDLPa + IDLPb;
                $('#MINIATURY').append('<a name="' + IDLP + '" href="' + LinkA + 'images/' + LinkC + '" target="_blank"><img src="' + LinkA + 'thumbnails/' + LinkC + '" alt="' + IDLP + '"></a>');
            }
            $("#ZATWIERDZ_WYBOR").hide();
           
        });
    });    
    
});
var map;
                function loadMapScenario() {
                    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
                        credentials: 'Ag_DhhI4OhAJ28lJwiqxdE65HfSBWC3PT3MY1fYYlLd3vJpYMifcNlFA1-ZrMi7P'
                    });
    }