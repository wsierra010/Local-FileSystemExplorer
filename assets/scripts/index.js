import { getFolders } from "./requests/getFolders.js";
import { getFileInfo } from "./requests/getFileInfo.js";
import { printFoldersSidebar } from "./print/printFoldersSidebar.js";
import { addSidebarListeners } from "./listeners/sideBarListeners.js";
import { printMainContent } from "./print/printMainContent.js";
import { mainContainerListeners } from "./listeners/mainListeners.js";

$(document).ready(function(){
    getFolders('root', [printFoldersSidebar, printMainContent]);
    /* getFileInfo('root/images', $('.mainContent').html); */
    addSidebarListeners();
    mainContainerListeners();

});


