import { removeModal } from "../print/printModal.js";
import { createDirectory } from "../requests/createDirectory.js";

export function addCreateDirectoryModalListeners(){
    $('.modal').on('click', function(event){
        if( $( event.target ).hasClass('modal__saveButton')){
            const name = $('#directoryName').val();
            const path = $( event.target ).data('path');

            createDirectory( path, name );
            removeModal();
            removeCreateDirectoryModalListeners();
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

