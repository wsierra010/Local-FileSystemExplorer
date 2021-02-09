import { removeModal } from "../print/printModal.js";
import { uploadFile } from "../requests/uploadFile.js";

export function addUploadFilesModalListeners(){
    $('.modal').on('click', function(event){
        if( $( event.target ).hasClass('modal__saveButton')){
            event.preventDefault();
            var form_data = new FormData($('#formUploadFile')[0]);
            form_data.append('pathInput' , $('#pathInput').val());
            uploadFile( form_data);

            removeModal();
            removeUploadFilesModalListeners();
        }
    });
}

export function removeUploadFilesModalListeners(){
    $('.modal').off('click', function(event){
        if( $( event.target ).hasClass('modal__saveButton')){
            var form_data = new FormData($('#formUploadFile')[0]);

            uploadFile( form_data);

            removeModal();
            removeUploadFilesModalListeners();
        }
    });
}