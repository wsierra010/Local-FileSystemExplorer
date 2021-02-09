    

export const getFilesFolders = (path)=>{

    console.log(path);
    $.ajax({
        url: 'api/search.php',
        method : 'GET',
        data: 'path=' + path,
        success: function(response){
            let result = jQuery.parseJSON( response );
            //search( result );
        }
    })
}