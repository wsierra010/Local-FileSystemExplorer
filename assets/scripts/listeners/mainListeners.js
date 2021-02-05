import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";
import { addContextMenuListeners } from "../listeners/contextMenulisteners.js";
import { printContextMenu, removeContextMenuIfExist } from "../print/printContextMenu.js";
import { mainPathListeners } from "./mainPathListeners.js";

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

        //remove posible context menu
        removeContextMenuIfExist();

        const targetData = event.target.dataset;
        // show modal
        console.log( 'se va a mostrar el modal' );

        mainPathListeners(event);

    });

    //add event listener right click
    $mainContent.addEventListener('contextmenu', printContextMenu, false);



}
