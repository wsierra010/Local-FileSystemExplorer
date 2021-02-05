import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";

let lastPagesArray=[];

export function setLastPage(path){

    const last = lastPagesArray[ lastPagesArray.length -1 ];

    if(last != path){
        lastPagesArray.push(path);
    }

}

export function goBack(){

    if( lastPagesArray.length > 1 ){
        lastPagesArray.pop();
        const path = lastPagesArray[ lastPagesArray.length -1 ];
        getFolders( path, [ printMainContent ], true );
    }

}
