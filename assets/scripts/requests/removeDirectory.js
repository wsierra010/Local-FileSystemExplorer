
export function removeDirectory(path){
    $.ajax({
        url:  'api/deleteFolder.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function ( response ) {
            // let result= jQuery.parseJSON( response );
            // removeDirectory( response);
            console.log(response);
        }
    });
}