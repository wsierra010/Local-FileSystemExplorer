import { printFoldersSidebar } from "../print/printFoldersSidebar.js";
import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "./getFolders.js";

export function createDirectory( path, name){
    $.ajax({
        url:   'api/createDirectory.php',
        method:  'GET',
        data: 'path=' + path + '/' + name,
        success:  function ( response ) {
            if(response == 'true'){
                getFolders( path, [ printMainContent ] );
                getFolders( 'root', [ printFoldersSidebar ] );
            }else{
                alert('Error creating directory');
            }
        }
    });
}