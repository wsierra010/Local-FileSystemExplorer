import { printModal, removeModal } from "../print/printModal.js";
import { createDirectory } from "../requests/createDirectory.js";

export function addCreateDirectoryModalListeners(){
    $('.modal').on('click', function(event){
        if( $( event.target ).hasClass('modal__saveButton')){
            const name = $('#directoryName').val();
            const path = $( event.target ).data('path');
            var OK = !name.includes('.') && name[0] !== '-' && name[0] !== '_' ;
 
            if(OK){
                createDirectory( path, name );
                removeModal();
                removeCreateDirectoryModalListeners();
            }
            else{
                removeModal();
                printModal('<p>Invalid directory name</p>');
            }

        }
    });
}

export function removeCreateDirectoryModalListeners(){
    $('.modal').off('click', function(event){
        if( $( event.target ).hasClass('modal__saveButton')){
            const name = $('#directoryName').val();
            const path = $( event.target ).data('path');

            createDirectory( path, name );
            removeModal();
            removeCreateDirectoryModalListeners();
        }
    });
}