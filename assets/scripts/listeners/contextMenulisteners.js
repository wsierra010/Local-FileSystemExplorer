import { back } from "../helpers/back.js";
import { removeContextMenu } from "../print/printContextMenu.js";
import { printCreateDirectoryModal } from "../print/printCreateDirectoryModal.js";
import { printFileContent } from "../print/printFileContent.js";
import { printMainContent } from "../print/printMainContent.js";
import { printModal } from "../print/printModal.js";
import { printUploadFileModal } from "../print/prinUploadFileModla.js";
import { getFileInfo } from "../requests/getFileInfo.js";
import { getFolders } from "../requests/getFolders.js";
import { printFoldersSidebar } from "../print/printFoldersSidebar.js";
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

            printCreateDirectoryModal( path );
        }else if($( target ).attr( 'id' ) == 'contextMenuAddFile'){
            const path=$('.main__root').data('path');
            printUploadFileModal( path );
        }else if($( target ).attr( 'id' ) == 'contextMenuOpenDirectory'){
            const path=$(target).data( 'path' );
            getFolders( path , [ printMainContent ] );
        }else if($( target ).attr( 'id' ) == 'contextMenuOpenInfo'){
            const path=$(target).data( 'path' );
            getFileInfo( path , printFileContent );
            
        }else if($( target ).attr( 'id' ) == 'contextMenuOpenFile'){
            const path=$(target).data( 'path' );
            openFile( path );
            
        }else if( $(target).attr('id') == 'removeDirectory'){
            const path = $( target ).data('path');
            removeDirectory(path);
            
        }

        
        removeContextMenu();

    });
}


const openFile = ( url) =>{
    const type = url.split('.')[1];
    let content;

    if ( type == 'jpg' || type == 'png' ) {
        content = `<img src="${url}">`;
        printModal();

    } else if ( type == 'mp3' ){
        content = `<audio controls>
                        <source src="${url}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>`;

    } else if ( type == 'mp4' ){
        content = `<video width="320" height="240" controls>
                        <source src="${url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;

    } else {
        content = '<p>Can\'t show this file.</p>';

    }

    printModal( content );

}
