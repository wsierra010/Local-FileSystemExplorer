import { back } from "../helpers/back.js";
import { removeContextMenu } from "../print/printContextMenu.js";
import { printCreateDirectoryModal } from "../print/printCreateDirectoryModal.js";
import { printMainContent } from "../print/printMainContent.js";
import { removeDirectory } from "../requests/removeDirectory.js";

export function addContextMenuListeners(){

    let isIn = false;
    $('.contextMenu').on('mouseenter', function(){

        isIn = true;

    });

    $('.contextMenu').on('mouseleave', function(){
        if(isIn){

            removeContextMenu();
            //TO DO delete listeners
        }
    });

    $('.contextMenu').on('click', function(event){
        const target = event.target;

        if( $( target ).attr( 'id' ) == 'contextMenuGoBack'){
            back.goBack();
        }else if( $( target ).attr( 'id' ) == 'contextMenuCreateDirectory'){
            const path = $( target ).data('path');
            // console.log(target);
            printCreateDirectoryModal( path );
        }else if( $(target).attr('id') == 'removeDirectory'){
            const path = $( target ).data('path');
            removeDirectory(path);
            // console.log();
            // $(target).remove();
        }

        removeContextMenu();

    });
}
