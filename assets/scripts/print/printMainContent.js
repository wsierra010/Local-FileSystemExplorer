import { createHtml } from "./createHtml.js";
import { getIcon } from "./getIcon.js";

<<<<<<< HEAD

export const printMainContent = (data)=> {
=======
export const printMainContent = ( data, path )=> {
>>>>>>> main

    // identify grid container
    const $gridContainer = document.querySelector('.mainContent');
    $gridContainer.innerHTML = '' ;
    $gridContainer.innerHTML = `<div class='main__root'><button class="fas fa-chevron-left main__back__arrow"></button><span>${path}/</span><div>` ;
    // iterate folders and files
    data.forEach( e => {

        // create element
        const element = document.createElement( 'button' );
        element.classList.add( `mainContent__element`, e.extension );
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