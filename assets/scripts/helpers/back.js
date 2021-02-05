import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";

let lastPagesArray=[];

export function setLastPage(path){
    lastPagesArray.push(path);
    console.log(lastPagesArray);
}

export function goBack(){
    const path = lastPagesArray.pop();
    getFolders( path, [ printMainContent ] );
}