<?php
    require ('createFileObject.php');

    $path = $_GET['path'];

    $pathArray=explode('/', $path);
    $file=array_pop($pathArray);
    $dir='';
    foreach($pathArray as $element){
        $dir=$dir.$element.'/';
    }
    $doc=createFileObject($dir, $file, false);

    $myJSON = json_encode( $doc );

    echo $myJSON;

?>
