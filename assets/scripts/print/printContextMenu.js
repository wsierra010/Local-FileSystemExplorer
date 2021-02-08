import { addContextMenuListeners } from "../listeners/contextMenulisteners.js";

let existAnothercontextMenu = false;

export function printContextMenu(event){

    event.preventDefault();

    removeContextMenuIfExist();

    let $contextMenu='';
    const actualFolderPath = $('.main__root').data('path');

    if(event.target.classList.contains('mainContent__element')){
        const targetData = event.target.dataset;
        if( targetData.type === 'folder' ){
            $contextMenu = printFolderContextMenu(event, actualFolderPath);
        }else {
            $contextMenu = printFileContextMenu(event, actualFolderPath);
        }
    }else{
        $contextMenu = printGeneralContextMenu(event, actualFolderPath);
    }

    $('body').append($contextMenu);
    addContextMenuListeners();
    existAnothercontextMenu = true;

}



function printGeneralContextMenu(event, actualFolderPath) {

    let position = calculatePosition(event.clientX, event.clientY, 3);

    const $contextMenu = $( `
    <div class='contextMenu' style=' top: ${position.y}px; left: ${position.x}px '>
        <button class='contextMenu__button' data-path='${actualFolderPath}' id='contextMenuCreateDirectory'>Add directory</button>
        <button class='contextMenu__button' data-path='${actualFolderPath}' >Add file</button>
        <button class='contextMenu__button' id='contextMenuGoBack' >Go back</button>
    </div>` );

    return $contextMenu;

}


function printFolderContextMenu(event, actualFolderPath) {

    let position = calculatePosition(event.clientX, event.clientY, 6);

    let filePath = $(event.target).data('url');

    const $contextMenu = $( `
    <div class='contextMenu' style=' top: ${position.y}px; left: ${position.x}px '>
    <button class='contextMenu__button' data-path='${filePath}'>Directory info</button>
    <button class='contextMenu__button' data-path='${filePath}'>Open directory</button>
    <button class='contextMenu__button' data-path='${filePath}' id="removeDirectory">Remove directory</button>
    <button class='contextMenu__button' data-path='${actualFolderPath}' id='contextMenuCreateDirectory'>Add directory</button>
    <button class='contextMenu__button' data-path='${actualFolderPath}'>Add file</button>
    <button class='contextMenu__button' id='contextMenuGoBack' >Go back</button>
    </div>` );

    // console.log();
    return $contextMenu;

}


function printFileContextMenu(event, actualFolderPath) {

    let position = calculatePosition(event.clientX, event.clientY, 4);

    let filePath = $(event.target).data('url');

    const $contextMenu = $( `
    <div class='contextMenu' style=' top: ${position.y}px; left: ${position.x}px '>
        <button class='contextMenu__button' data-path='${filePath}'>File info</button>
        <button class='contextMenu__button' data-path='${filePath}'>Open file</button>
        <button class='contextMenu__button' data-path='${actualFolderPath}'id='contextMenuCreateDirectory'>Add directory</button>
        <button class='contextMenu__button' data-path='${actualFolderPath}'>Add file</button>
        <button class='contextMenu__button' id='contextMenuGoBack' >Go back</button>
    </div>` );

    return $contextMenu;

}

function calculatePosition(x, y, nunmberOfButtons){

    if( y > $('body').height() - 35 * nunmberOfButtons ){
        y -= 35*nunmberOfButtons;
    }

    if( x > $('body').width() - 200 ){
        x -= 200;
    }

    return {
        'x': x,
        'y': y
    }
}

export function removeContextMenuIfExist() {
    if(existAnothercontextMenu) {
        removeContextMenu();
        existAnothercontextMenu = false;
    }
}

export function removeContextMenu() {
    $('.contextMenu').remove();
}
