import { printFoldersSidebar } from "../print/printFoldersSidebar.js";
import { printMainContent } from "../print/printMainContent.js";
import { printModal } from "../print/printModal.js";
import { getFolders } from "./getFolders.js";

export function removeDirectory(path){
    $.ajax({
        url:  'api/deleteFolder.php',
        method:  'GET',
        data: 'path=' + path,
        success:  function (res){
            let result= jQuery.parseJSON( res );
            if(result == true){
                getFolders( $('.main__root').data('path') , [printMainContent ] );
                getFolders( 'root' , [ printFoldersSidebar ] );
            } else {
                printModal( '<p>Error deleting.</p>' )
            }
            
        }
    });
}