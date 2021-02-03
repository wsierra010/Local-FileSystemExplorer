import { getFolders } from "./requests/getFolders.js";
import { getFileInfo } from "./requests/getFileInfo.js";
import { printFoldersSidebar } from "./print/printFoldersSidebar.js";

$(document).ready(function(){
    /* getFolders('root', printFoldersSidebar); */
    getFileInfo('root/documents', console.log);

});


