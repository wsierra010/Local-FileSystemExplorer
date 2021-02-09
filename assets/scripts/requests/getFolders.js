import { printMainContent } from "../print/printMainContent.js";


export function getFolders( path, functionsToPrint){

    $.ajax({
        url:   'api/getFolders.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function ( response ) {
            // console.log(response);
            let result = jQuery.parseJSON( response );
            console.log(result);
            $( functionsToPrint ).each( ( i ,functionToPrint ) => {
                console.log(functionToPrint);
                if(functionToPrint===printMainContent) {
                    functionToPrint( result, path );
                    // console.log('aaa');
                }
                else {
                    functionToPrint( result );
                }

            });

        }
    });
}