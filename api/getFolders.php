<?php
    require ('createFileObject.php');
    $dir = $_GET['path'];

    $files = getFilesFromFolder($dir)[0];

    function getFilesFromFolder($dir){

        $rootFiles = scandir( '../' . $dir );
        $filesInFolder = [];
        $size = 0;
        foreach( $rootFiles as $file ){
            if( $file!='.' && $file!='..' ){
                $doc = createFileObject($dir, $file);
                $size += $doc->size;
                array_push( $filesInFolder, $doc );
            }
        }
        return [ $filesInFolder, $size ];

    }

    $myJSON = json_encode( $files );
    echo $myJSON;

?>