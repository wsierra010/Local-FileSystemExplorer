export function getFolders( path, functionToPrint){
    $.ajax({
        /* data:  parametros, */
        url:   'api/getFolders.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function (response) {
            let result= jQuery.parseJSON( response);
            functionToPrint(result);
        }
    });
}