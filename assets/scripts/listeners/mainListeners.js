import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";


export const mainContainerListeners = ()=>{
    
    //main container listeners

    // identify container
    const $mainContent = document.querySelector('.mainContent');

    // add event listener double click
    $mainContent.addEventListener('dblclick', (event)=>{
        const targetData = event.target.parentNode.dataset;

            // identify type
            if (targetData.type === 'folder') {
                getFolders(targetData.url,printMainContent)
            }else{
                //  TODO ----------------------------------------------------------------
                // abrir archivok
            }
    });


    // add event listener single click
    $mainContent.addEventListener('click', (event)=>{
        const targetData = event.target.parentNode.dataset;
        // show modal
        console.log('se va a mostrar el modal');
       
    }); 



}