import { getFolders } from "./requests/getFolders.js";
import { getFileInfo } from "./requests/getFileInfo.js";
import { printFoldersSidebar } from "./print/printFoldersSidebar.js";
import { printMainContent } from "./print/printMainContent.js";

$(document).ready(function(){
    getFolders('root',printMainContent);
    
    // printMainContent('root',printFoldersSidebar)
    // getFileInfo('root/images', console.log)

});


