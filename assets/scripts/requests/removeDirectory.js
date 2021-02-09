
export function removeDirectory(path){
    // console.log(path);
    $.ajax({
        url:  'api/deleteFolder.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function (res){
            // console.log(response);
            }

        // }
    });
}