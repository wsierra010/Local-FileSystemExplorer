import { getIcon } from "./getIcon.js";
import { printFoldersSidebar } from "./printFoldersSidebar.js";

export const printFileContent = (data)=>{
    console.log(data);

    let dateCreation = new Date(data.created*1000);
    let dateModification = new Date(data.modified*1000);


    let dateCreated = `${dateCreation.getDate()}/${dateCreation.getMonth()}/${dateCreation.getFullYear()}  ${dateCreation.getHours()}:${dateCreation.getMinutes()}`;

    let dateModified = `${dateModification.getDate()}/${dateModification.getMonth()}/${dateModification.getFullYear()}  ${dateModification.getHours()}:${dateModification.getMinutes()}`;


    // conversion size
    let size = '';
    if (data.size < 1024) {
        size = `${data.size} Bytes`
    }else if(data.size > 1024 && data.size < 1048576){
        size = `${ (data.size/1024).toFixed(2) } KB`
    }else if(data.size > 1048576 && data.size < 1073741824){
        size = `${ ((data.size/1024)/1024).toFixed(2) } MB`
    }else if(data.size > 1073741824 && data.size < 1099511627776 ){
        size = `${(((data.size/1024)/1024)/1024).toFixed(2)} GB`
    }else{
        size = 'Too big to calculate'
    };


    const hola = `
        <button id="closeSideInfo" class=" sidebarInfo__closeIcon">
            <i class="fas fa-times"></i>
        </button>
        <div class="sidebarInfo__fileIcon">
            <i class="fas fa-${getIcon(data.extension)}"></i>
        </div>
        <hr>
        <div class="sidebarInfo__data">
            <p>Name</p>
            <p>${data.name}</p>
            <p>Extension</p>
            <p>${data.extension}</p>
            <p>Created</p>
            <p>${dateCreated}</p>
            <p>Modified</p>
            <p>${dateModified}</p>
            <p>Size</p>
            <p>${size}</p>
        </div>
        <div class="sidebarInfo__buttons">
            <button class="sidebarInfo_buttons__style"><i class="fas fa-edit"></i></button>
            <button class="sidebarInfo_buttons__style"><i class="fas fa-trash-alt"></i></button>
            <button class="sidebarInfo_buttons__style"><i class="fas fa-envelope-open"></i></button>
        </div>

    `;

    document.getElementById('sidebar').innerHTML = hola;
    document.getElementById('sidebar').classList.add('sidebarInfo');
    document.getElementById('closeSideInfo').addEventListener('click' , closeFileContent);
}

const closeFileContent = ()=>{
    const sideBar = document.getElementById('sidebar');
    document.getElementById('sidebar').classList.remove('sidebarInfo');
    sideBar.innerHTML = '';
}
