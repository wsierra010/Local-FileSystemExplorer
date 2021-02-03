import { getFolders } from "./requests/getFolders.js";
import { printFoldersSidebar } from "./print/printFoldersSidebar.js";

$(document).ready(function(){
    getFolders('root', printFoldersSidebar);

});


