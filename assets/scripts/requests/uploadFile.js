import { printFoldersSidebar } from "../print/printFoldersSidebar.js";
import { printMainContent } from "../print/printMainContent.js";
import { printModal } from "../print/printModal.js";
import { getFolders } from "./getFolders.js";

export function uploadFile( form_data ){

    if(form_data.entries()[1]){
        const $modalContent= `<p> Too many files</p>`;
        printModal($modalContent);
    } else{
        $.ajax({
            url: 'api/uploadFile.php', // point to server-side PHP script
            type: 'POST',
            processData: false, // important
            contentType: false, // important
            data: form_data,
            success: function(response){
                if( response == 'File is uploaded successfully.' ){
                    getFolders( $('.main__root').data('path'), [ printFoldersSidebar , printMainContent ] );
                }else{
                    printModal(`<p>${response}</p>`);
                }
            }
        });
    }
    
}
