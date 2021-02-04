export const createHtml = (extension,name)=>{
    return(`
            <div class="mainContent_element__icon">
                <i class="fas fa-${extension}"></i>
            </div>
            <p class="mainContent_element__title">
                ${name}
            </p> 
        `
    )
}
