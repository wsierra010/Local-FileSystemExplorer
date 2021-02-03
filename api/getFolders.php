<?php
    require ('documentClass.php');

    $dir = 'root';
    $files = getFilesFromFolder($dir);

    function getFilesFromFolder($dir){

        $rootFiles = scandir('../' . $dir);
        $filesInFolder=[];

        foreach( $rootFiles as $file ){

            if( $file!='.' && $file!='..' ){
                $path = $dir . '/' . $file;
                $path_info = pathinfo( $path );
                if( isset( $path_info['extension'] ) ){
                    $doc=new document($file, $path_info['extension'], $path);
                    array_push($filesInFolder, $doc);
                }else{
                    $content = getFilesFromFolder($path);
                    $doc=new folder($file, 'folder', $path, $content);
                    array_push($filesInFolder, $doc);
                }
            }
        }

        return $filesInFolder;

    }

    $myJSON = json_encode( $files );
    echo $myJSON;

?>