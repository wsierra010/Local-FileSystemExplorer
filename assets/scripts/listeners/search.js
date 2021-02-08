import { getFolders } from "../requests/getFolders.js";
import { getFilesFolders } from "../requests/searchRequest.js";

const searchBtn = document.querySelector('.header_search__btn');
const searchInput = document.querySelector('.header_search__input');

export const searchListener = ()=>{
    searchInput.addEventListener('input',request)
}
let array = []

const request = ()=>{
    const path = document.querySelector('.main__root__button').dataset.path
    array = []
    getFolders(path,[search]);
    
}

export const search = (data)=>{
    
    const inputValue = document.querySelector('.header_search__input').value
    const expresion = `/^${inputValue}/gi`
    if (inputValue != '') {
        const isFolder = /[.]/g
        
        data.forEach(e => {
            
            if (e.name.match(eval(expresion))) {
                array.push({
                    name: e.name,
                    path: e.path
                 })
               
            }
            if(e.name.match(isFolder)){
                
            }else{ 
                search(e.content)
            }
        });
        
        printSearchList(array)
    }
}
const $container = document.querySelector('.searchList__ul')
const printSearchList = (array)=>{
    $container.innerHTML = ''
    array.forEach(e=>{
        const li = document.createElement('li')
        if (e.name.includes('.')) {
            li.innerHTML = `
                <button><i class="fas fa-file"></i> ${e.path} <br> ${e.name}</button>
            `
        }else{
            li.innerHTML = `
                <button><i class="fas fa-folder"></i> ${e.path} - ${e.name}</button>
            `
        }
        $container.appendChild(li)
    })

}
