import { addModalListeners, removeModalListeners } from "../listeners/modalListeners.js";

export function printModal(content, callback = null, endCallback = null){

    const $modal=$(`
        <div class='modal__background'>

            <div class='modal'>
                <button class="far fa-times-circle modal__close"></button>
                ${content}
            </div>
        </div>
    `);

    $('body').append($modal);

    addModalListeners(endCallback);

    console.log(callback);
    if(callback!=null){
        callback();
    }

}

export function removeModal(callback=null){
    $('.modal__background').remove();
    removeModalListeners(callback);
}
