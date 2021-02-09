import { printFileContent } from "../print/printFileContent.js";
import { printMainContent } from "../print/printMainContent.js";
import { getFileInfo } from "../requests/getFileInfo.js";
import { getFolders } from "../requests/getFolders.js";
import { addContextMenuListeners } from "../listeners/contextMenulisteners.js";
import { printContextMenu, removeContextMenuIfExist } from "../print/printContextMenu.js";
import { mainPathListeners } from "./mainPathListeners.js";
import { uploadFile } from "../requests/uploadFile.js";
import { printUploadFileModal } from "../print/prinUploadFileModla.js";



export const mainContainerListeners = ()=>{

    //main container listeners

    

    // identify container
    const $mainContent = document.querySelector( '.mainContent' );

    // add event listener double click
    $mainContent.addEventListener( 'dblclick' , (event)=>{

        //remove posible context menu
        removeContextMenuIfExist();

        const targetData = event.target.dataset;

            // identify type
            if ( targetData.type === 'folder') {
                getFolders( targetData.url , [ printMainContent ] );
            }else{
                //  TODO ----------------------------------------------------------------
                // abrir archivok
            }
    });


    // add event listener single click
    $mainContent.addEventListener( 'click' , ( event ) => {
        
        const targetData = event.target.dataset;

        
        if (targetData.url) {
            // console.log('aqui tb');
            getFileInfo( targetData.url , printFileContent )
        };


        //remove posible context menu
        removeContextMenuIfExist();

        mainPathListeners(event);

    });

    //add event listener right click
    $mainContent.addEventListener('contextmenu', printContextMenu, false);

    //drag and drop files

    $mainContent.addEventListener("dragenter", dragenter, false);
    $mainContent.addEventListener("dragover", dragover, false);
    $mainContent.addEventListener("drop", drop, false);

    
}

const dragenter = ( event ) => {
    event.stopPropagation();
  event.preventDefault();
}

const dragover = ( event ) => {
    event.stopPropagation();
  event.preventDefault();
}

const drop = (event ) => {
    event.stopPropagation();
    event.preventDefault();
    const target = event.target;
    let path=$('.main__root').data('path');
    if(target.classList.contains('folder')){
        path = $(target).data('url');
    }

    const dt = event.dataTransfer;
    const files = dt.files;
    printUploadFileModal( path, files);

    dt.clearData();
}
