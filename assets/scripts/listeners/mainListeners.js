import { printFileContent } from "../print/printFileContent.js";
import { printMainContent } from "../print/printMainContent.js";
import { getFileInfo } from "../requests/getFileInfo.js";
import { getFolders } from "../requests/getFolders.js";
import { addContextMenuListeners } from "../listeners/contextMenulisteners.js";

export const mainContainerListeners = ()=>{

    //main container listeners

    // identify container
    const $mainContent = document.querySelector( '.mainContent' );

    // add event listener double click
    $mainContent.addEventListener( 'dblclick' , (event)=>{
        const targetData = event.target.parentNode.dataset;

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
        const targetData = event.target.parentNode.dataset;
        // show modal
<<<<<<< HEAD
        getFileInfo(targetData.url, printFileContent);


    });

}

=======
        console.log( 'se va a mostrar el modal' );
    
    });

    //add event listener right click
    $mainContent.addEventListener('contextmenu', function(event) {
        console.log(event.clientX);
        let x=event.clientX;
        let y=event.clientY;
        console.log($('body').height());
        if(y>$('body').height()-35*4){
            y -= 35*4;
        }
        if(x>$('body').width()-200){
            x -= 200;
        }
        const $contextMenu = $( `
        <div class='contextMenu' style=' top: ${y}px; left: ${x}px '>
            <button class='contextMenu__button'>Add directory</button>
            <button class='contextMenu__button'>Add file</button>
            <button class='contextMenu__button'>Folder info</button>
            <button class='contextMenu__button'>Go back</button>
        </div>` );

        $('body').append($contextMenu);
        addContextMenuListeners();
        event.preventDefault();
      }, false);
}
>>>>>>> main
