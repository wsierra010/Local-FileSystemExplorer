import { printFolders } from "../requests/getFoldersSidebar.js";

export function getFoldersSidebar(){
    $.ajax({
        /* data:  parametros, */
        url:   'api/getFolders.php',
        type:  'GET',
        beforeSend: function () {
                $("body").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("body").html(response);
            $("body").append('<br><br>');
            let result= jQuery.parseJSON( response )
            printFolders(result, null);
        }
    });
}