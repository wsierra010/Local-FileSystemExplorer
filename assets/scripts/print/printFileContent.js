export const printFileContent = (data)=>{
    console.log(data);

    const hola = `
        <div class=" sidebarInfo__closeIcon">
            <i class="fas fa-times"></i>
        </div>
        <div class="sidebarInfo__fileIcon">
            <i class="fas fa-file"></i>
        </div>
        <hr>
        <div class="sidebarInfo__data">
            <p>Name</p>
            <p>${data.name}</p>
            <p>Extension</p>
            <p>${data.extension}</p>
            <p>Created</p>
            <p>${data.created}</p>
            <p>Modified</p>
            <p>${data.modified}</p>
            <p>Size</p>
            <p>${data.size}</p>
        </div>
        <div class="sidebarInfo__buttons">
            <button class="sidebarInfo_buttons__style"><i class="fas fa-edit"></i></button>
            <button class="sidebarInfo_buttons__style"><i class="fas fa-trash-alt"></i></button>
            <button class="sidebarInfo_buttons__style"><i class="fas fa-envelope-open"></i></button>
        </div>
    `;

    document.getElementById('sidebar').innerHTML = hola;
}