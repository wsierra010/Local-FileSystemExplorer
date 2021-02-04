export const createHtml = (extension,name)=>{
    return(`
            <i class="fas fa-${extension} mainContent_element__icon"></i>
            
            <p class="mainContent_element__title">
                ${name}
            </p> 
        `
    )
}
