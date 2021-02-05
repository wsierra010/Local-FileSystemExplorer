import { back } from "../helpers/back.js";
import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";

export function mainPathListeners(event){

    let target = event.target;

    if(target.classList.contains('main__root__button')){
        const path = target.dataset.path;
        getFolders(path, [ printMainContent ] );

    }else if(target.classList.contains('main__back__arrow')){
        back.goBack();;
    }

}