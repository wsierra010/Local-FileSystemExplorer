export const getIcon = (extension)=>{

    let icon = ''

    switch (extension) {
        case 'folder':
            icon = 'folder'
            break;
        case 'doc':
            icon = 'file-word'
            break;
        case 'csv':
            icon = 'file-csv'
            break;
        case 'jpg':
            icon = 'file-image'
            break;
        case 'txt':
            icon = 'file-alt'
            break;
        case 'ppt':
            icon = 'file-powerpoint'
            break;
        case 'odt':
            icon = 'file-alt'
            break;
        case 'pdf':
            icon = 'file-pdf'
            break;
        case 'zip':
            icon = 'file-archive'
            break;
        case 'rar':
            icon = 'file-archive'
            break;
        case 'exe':
            icon = 'file-alt'
            break;
        case 'svg':
            icon = 'file-image'
            break;
        case 'mp3':
            icon = 'file-audio'
            break;
        case 'mp4':
            icon = 'file-video'
            break;
    }

    return icon
}