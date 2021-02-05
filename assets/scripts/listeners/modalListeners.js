import { removeModal } from "../print/printModal.js";

export function addModalListeners(callback=null){
    $('.modal__background').on('click', function(event){
        if($(event.target).hasClass('modal__background') || $(event.target).hasClass('modal__close')){
            removeModal(callback);
        }
    })

}


export function removeModalListeners(callback){
    $('.modal__background').off('click', function(event){
        if($(event.target).hasClass('modal__background') || $(event.target).hasClass('modal__close')){
            removeModal();
        }
    })
    if( callback != null ) {
        callback();
    }
    
}


