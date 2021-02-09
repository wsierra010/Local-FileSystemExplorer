import { printMainContent } from "../print/printMainContent.js";
import { getFolders } from "../requests/getFolders.js";
import { getFilesFolders } from "../requests/searchRequest.js";

const searchBtn = document.querySelector('.header_search__btn');
const searchInput = document.querySelector('.header_search__input');

export const searchListener = ()=>{
    searchInput.addEventListener('input',request)
}
let array = []

const request = ()=>{
    const path = document.querySelector('.main__root').dataset.path
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
        if (array.length === 0) {
            $container.innerHTML = `No match in this folder : <b>${document.querySelector('.main__root').dataset.path}</b>`
        }else{
            printSearchList(array)
        }
        
    }
}
const $container = document.querySelector('.searchList__ul')
const printSearchList = (array)=>{
    $container.innerHTML = ''
    array.forEach(e=>{
        const li = document.createElement('li')
        li.classList.add('searchList__ul__li')
        li.addEventListener('click',()=>{
            getFolders(e.path,[printMainContent])
            $container.innerHTML = ''
            document.querySelector('.header_search__input').value = ''
        })
        if (e.name.includes('.')) {
            li.innerHTML = `
                <button data-url = "${e.path}"><i class="fas fa-file" style="color:grey"></i> ${e.name} <br> ${e.path}</button>
            `
        }else{
            li.innerHTML = `
                <button><i class="fas fa-folder" style="color:grey"></i> ${e.name} <br> ${e.path}</button>
            `
        }
        $container.appendChild(li)
    })

}
