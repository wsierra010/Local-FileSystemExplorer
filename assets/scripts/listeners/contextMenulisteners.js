import { removeContextMenu } from "../print/printContextMenu.js";

export function addContextMenuListeners(){

    let isIn = false;
    $('.contextMenu').on('mouseenter', function(){

        isIn = true;

    });

    $('.contextMenu').on('mouseleave', function(){
        if(isIn){

            removeContextMenu();
            //TO DO delete listeners
        }
    });
}