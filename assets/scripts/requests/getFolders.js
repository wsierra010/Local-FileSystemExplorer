export function getFolders( path, functionsToPrint){
    $.ajax({
        /* data:  parametros, */
        url:   'api/getFolders.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function ( response ) {
            let result= jQuery.parseJSON( response );
            $( functionsToPrint ).each( ( i ,functionToPrint ) => {
                functionToPrint(result);
            });
            
        }
    });
}