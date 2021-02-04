import { getFolders } from "./requests/getFolders.js";
import { getFileInfo } from "./requests/getFileInfo.js";
import { printFoldersSidebar } from "./print/printFoldersSidebar.js";
import { addSidebarListeners } from "./listeners/sideBarListeners.js";

$(document).ready(function(){
    getFolders('root', printFoldersSidebar);
    /* getFileInfo('root/images', $('.mainContent').html); */
    addSidebarListeners();

});


