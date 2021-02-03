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
                $created=0;
                $modidied = filemtime ('../' . $path);
                if( isset( $path_info['extension'] ) ){
                    $size = filesize('../' . $path);
                    $doc=new document($file, $path_info['extension'], $path, $size, $created, $modidied);
                    array_push($filesInFolder, $doc);
                }else{
                    $size = 0;
                    $content = getFilesFromFolder($path);
                    $doc=new folder($file, 'folder', $path, $content, $size, $created, $modidied);
                    array_push($filesInFolder, $doc);
                }
            }
        }

        return $filesInFolder;

    }

    $myJSON = json_encode( $files );
    echo $myJSON;

?>