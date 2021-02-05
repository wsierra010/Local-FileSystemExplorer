
export function printMainPath(path){
    let pathArray = path.split("/");


    let $mainPath = `<div class='main__root' data-path='${path}' ><button class="fas fa-chevron-left main__back__arrow"></button>` ;

    pathArray.forEach((folder, index) => {
        $mainPath += createPathButton(pathArray, index) + '/';
    });

    $mainPath += `</div>` ;
    console.log($mainPath);
    return $mainPath;
}

function createPathButton(pathArray, position){
    console.log(pathArray)
    let folderPath = '';
    
    for(let i=0; i<=position; i++){
        if(i>0){
            folderPath += '/';
        }
        folderPath += pathArray[i];
    }

    return `<button data-path='${folderPath}' class='main__root__button'>${pathArray[position]}</button>`;

}