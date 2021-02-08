import { addUploadFilesModalListeners, removeUploadFilesModalListeners } from "../listeners/uploadFilesListeners.js";
import { printModal } from "./printModal.js";


export function printUploadFileModal( path, file=null ){
    if(file && file[1]){
        const $modalContent= `<p> Too many files</p>`;
        printModal($modalContent);
    }else{
        const $modalContent= `
        <form id="formUploadFile">
            <label for='fileInput'>Select a file:</label><br>
            <input id='fileInput' name='fileInput' type='file'><br>
            <label for='pathInput'>Will be uploaded in:</label><br>
            <input id='pathInput' name='pathInput' type='text' value='${path? path :''}' disabled><br>
            <input id='submitInput' type='submit' value='save' class='modal__saveButton'>
        </form>`;

        printModal($modalContent, addUploadFilesModalListeners, removeUploadFilesModalListeners);
    }
    
    let fileInput = document.querySelector('#fileInput');
    fileInput.files = file ;
}