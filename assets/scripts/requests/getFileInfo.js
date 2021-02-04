export function getFileInfo( path, functionToPrint){
    $.ajax({
        /* data:  parametros, */
        url:   'api/getFileInfo.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function (response) {
            let result= jQuery.parseJSON( response);
            functionToPrint(result);
        }
    });
}