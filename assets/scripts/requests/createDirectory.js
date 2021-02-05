import { printFoldersSidebar } from "../print/printFoldersSidebar.js";
import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "./getFolders.js";

export function createDirectory( path, name){
    $.ajax({
        url:   'api/createDirectory.php',
        method:  'GET',
        data: 'path=' + path + '/' + name,
        success:  function ( response ) {
            console.log(response);
            if(response == 'true'){
                getFolders( path, [ printFoldersSidebar , printMainContent ] );
            }else{
                alert('Error creating directory');
            }
        }
    });
}