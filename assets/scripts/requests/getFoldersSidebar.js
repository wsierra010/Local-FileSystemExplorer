import { printFolders } from "../print/printFoldersSidebar.js";

export function getFoldersSidebar(){
    $.ajax({
        /* data:  parametros, */
        url:   'api/getFolders.php',
        method:  'GET',
        beforeSend: function () {
                $("body").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            
            $("body").html(response);
            $("body").append('<br><br>');
            let result= jQuery.parseJSON( response )
            console.log(result);
            printFolders(result, null);
        }
    });
}