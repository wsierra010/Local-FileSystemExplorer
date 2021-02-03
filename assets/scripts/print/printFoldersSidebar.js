export function printFoldersSidebar(data, i=null){
    $.each(data, function( index, value ) {
        index++;
        if(i!=null){
            index= i+'.'+index;
        }
        $("body").append( index + ": " + value.name + "<br> path: " + value.path + "<br> extension: " + value.extension + '<br>');
        if(value.extension=='folder'){
            printFoldersSidebar(value.content, index);
        }
        else if(value.extension=='jpg'){
            $("body").append(`<br><img src='${value.path}'>`);
        }
    });
}
