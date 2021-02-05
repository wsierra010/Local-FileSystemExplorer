import { addCreateDirectoryModalListeners, removeCreateDirectoryModalListeners } from "../listeners/createDirectoryModalListeners.js";
import { printModal } from "./printModal.js";

export function printCreateDirectoryModal(path){
    const $modalContent= `
    <label for="directoryName">Directory name:</label>
    <br>
    <input type="text" id="directoryName" name="directoryName">
    <br>
    <button data-path='${path}' class='modal__saveButton'>Save</button> `;

    printModal($modalContent, addCreateDirectoryModalListeners, removeCreateDirectoryModalListeners);
}