import { back } from "../helpers/back.js";
import { removeContextMenu } from "../print/printContextMenu.js";
import { printCreateDirectoryModal } from "../print/printCreateDirectoryModal.js";
<<<<<<< HEAD
import { printFoldersSidebar } from "../print/printFoldersSidebar.js";
import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";
import { removeDirectory } from "../requests/removeDirectory.js";
=======
import { printUploadFileModal } from "../print/prinUploadFileModla.js";
>>>>>>> main

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

            printCreateDirectoryModal( path );
        }else if( $(target).attr('id') == 'removeDirectory'){
            const path = $( target ).data('path');
            removeDirectory(path);
            // console.log($('.main__root').data('path'));
            getFolders($('.main__root').data('path'),[printMainContent]);
            getFolders('root',[printFoldersSidebar]);
        }

        removeContextMenu();

    });
}
