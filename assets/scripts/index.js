import { getFolders } from "./requests/getFolders.js";
import { getFileInfo } from "./requests/getFileInfo.js";
import { printFoldersSidebar } from "./print/printFoldersSidebar.js";
import { printMainContent } from "./print/printMainContent.js";
import { mainContainerListeners } from "./listeners/mainListeners.js";

$(document).ready(function(){
    getFolders('root',printMainContent);

    mainContainerListeners()
    
    // printMainContent('root',printFoldersSidebar)
    // getFileInfo('root/images', console.log)

});


