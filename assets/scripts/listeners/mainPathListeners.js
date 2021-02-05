import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";

export function mainPathListeners(event){

    let target = event.target;

    if(target.classList.contains('main__root__button')){
        const path = target.dataset.path;
        console.log(path);
        getFolders(path, [ printMainContent ] );
    }

}