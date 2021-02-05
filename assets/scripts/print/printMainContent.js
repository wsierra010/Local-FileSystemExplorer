import { createHtml } from "./createHtml.js";
import { getIcon } from "./getIcon.js";


export const printMainContent = (data)=> {

    // identify grid container
    const $gridContainer = document.querySelector('.mainContent');
    $gridContainer.innerHTML = '' ;

    // iterate folders and files
    data.forEach( e => {

        // create element
        const element = document.createElement( 'div' );
        element.classList.add( 'mainContent__element' );
        element.dataset.url = e.path;
        element.dataset.type = e.extension;

        // identify type
        if (e.extension === 'folder') {
            element.innerHTML = createHtml( getIcon(e.extension) , e.name );

        // add event listener
        }else{
            element.innerHTML = createHtml( getIcon( e.extension ), e.name );
        }

        // append element
        $gridContainer.appendChild( element );
    });

}