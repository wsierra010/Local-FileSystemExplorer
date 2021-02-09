
export function printFoldersSidebar(data, i=null, $nodeToPrint=$(".aside")){
    $nodeToPrint.innerHTML='';
    $.each(data, function( index, value ) {
        index++;
        if(i!=null){
            index= i+'_'+index;
        }

        if( value.extension == 'folder' ){
            let $button = `
            <div id='${ index }'>
                <button class="fas fa-chevron-right aside__folder__arrow"></button>
                <button class='aside__folder__name' data-path=${ value.path }>
                    <i class="far fa-folder"></i>
                    ${ value.name }
                </button>
            </div>`;
            // console.log($button);
            $( $nodeToPrint ).append( $button );
            // console.log($nodeToPrint);

            let $container=`<div id='div-${ index }' class='aside__folder__container'></div>`;

            $( $nodeToPrint ).append( $container );
            // console.log($container);

            printFoldersSidebar( value.content , index , $( `#div-${index} `));
        }
    });

}
