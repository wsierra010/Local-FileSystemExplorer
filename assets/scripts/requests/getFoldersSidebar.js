export function printFolders(data, i){
    $.each(data, function( index, value ) {
        index++;
        if(i!=null){
          index= i+'.'+index; 
        }
        $("body").append( '<br>' + index + ": " + value.name + "<br> path: " + value.path + "<br> extension: " + value.extension );
        if(value.extension=='folder'){
            printFolders(value.content, index)
        }
        else if(value.extension=='jpg'){
            $("body").append(`<br><img src='${value.path}'>`);
        }
      });
}