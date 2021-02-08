<?php

try {
   
    // Undefined | Multiple Files | $_FILES Corruption Attack
    // If this request falls under any of them, treat it invalid.
    if (
        !isset($_FILES['fileInput']['error']) ||
        is_array($_FILES['fileInput']['error'])
    ) {
        throw new RuntimeException('Invalid parameters.');
    }

    // Check $_FILES['fileInput']['error'] value.
    switch ($_FILES['fileInput']['error']) {
        case UPLOAD_ERR_OK:
            break;
        case UPLOAD_ERR_NO_FILE:
            throw new RuntimeException('No file sent.');
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            throw new RuntimeException('Exceeded filesize limit.');
        default:
            throw new RuntimeException('Unknown errors.');
    }

    if (!move_uploaded_file(
        $_FILES['fileInput']['tmp_name'],
        '../' . $_POST['pathInput'] . '/' . $_FILES['fileInput']['name']
    )) {
        throw new RuntimeException('Failed to upload file.');
    }


    echo 'File is uploaded successfully.';

} catch (RuntimeException $e) {

    echo $e->getMessage();

}
