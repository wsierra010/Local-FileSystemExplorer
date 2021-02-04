import { createHtml } from "./createHtml.js";

export const printMainContent = (data)=> {
    // identify grid container
    const $gridContainer = document.querySelector('.mainContent')
    console.log(data);
    // iterate folders and files
    data.forEach(e => {
        // create element
        const element = document.createElement('div');
        element.classList.add('mainContent__element');
        element.dataset.url = e.path

        // identify type
        if (e.extension === 'folder') {
            element.innerHTML = createHtml('folder',e.name);
        }else{
            switch (e.extension) {
                case 'txt':
                    element.innerHTML = createHtml('file-word',e.name);
                    break;
                case 'doc':
                    element.innerHTML = createHtml('file-alt', e.name);
                    break;
                case 'csv':
                    element.innerHTML = createHtml('file-alt', e.name);
                    break;
                case 'jpg':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'png':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'ppt':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'odt':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'pdf':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'zip':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'rar':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'exe':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'svg':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'mp3':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                case 'mp4':
                    element.innerHTML = createHtml('file-image',e.name);
                    break;
                default:
                    break;
            }
        }

        // append element
        $gridContainer.appendChild(element)
    });

}