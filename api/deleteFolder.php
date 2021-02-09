<?php

$path = '../' . $_GET['path'];

function deleteDirectory($dir){
    if(!file_exists($dir)){
        return true;
    }if(!is_dir($dir)){
        return unlink($dir);
    }

    foreach (scandir($dir) as $item){
        if($item == '.' || $item == '..'){
            continue;
        }if (!deleteDirectory($dir . DIRECTORY_SEPARATOR . $item)){
            return false;
        }
    }

    return rmdir($dir);
}
$result = json_encode(deleteDirectory($path));
echo $result;

?>

