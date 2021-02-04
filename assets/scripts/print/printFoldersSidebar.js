
export function printFoldersSidebar(data, i=null, $nodeToPrint=$(".aside")){
    $.each(data, function( index, value ) {
        index++;
        if(i!=null){
            index= i+'_'+index;
        }
        
        /* $(".aside").append( index + ": " + value.name + "<br> path: " + value.path + "<br> extension: " + value.extension + '<br>'); */
        if(value.extension=='folder'){
            let $button=`<div id='${index}'><button class="fas fa-chevron-right aside__folder__arrow"></button><button class='aside__folder__name'><i class="far fa-folder"></i> ${value.name}</button></div>`;
            $($nodeToPrint).append($button);
            let $container=`<div id='div-${index}' class='aside__folder__container'></div>`
            $($nodeToPrint).append($container);
            printFoldersSidebar(value.content, index, $(`#div-${index}`));
        }
    });

}
