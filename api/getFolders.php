<?php
    require ('documentClass.php');

    $dir = 'root';
    $files = getFilesFromFolder($dir)[0];

    function getFilesFromFolder($dir){

        $rootFiles = scandir('../' . $dir);
        $filesInFolder=[];
        $size=0;
        foreach( $rootFiles as $file ){
            if( $file!='.' && $file!='..' ){
                $doc=createFileObject($dir, $file);
                $size+=$doc->size;
                array_push($filesInFolder, $doc);
            }
        }
        return [$filesInFolder, $size];

    }

    function createFileObject($dir, $file){

        $path = $dir . '/' . $file;
        $path_info = pathinfo( $path );
        $created= filectime ('../' . $path);
        $modidied = filemtime ('../' . $path);
        $doc=null;
        $size=0;
        if( isset( $path_info['extension'] ) ){
            $size = filesize('../' . $path);
            $doc=new document($file, $path_info['extension'], $path, $size, $created, $modidied);
        }else{
            $files=getFilesFromFolder($path);
            $size = $files[1];
            $content = $files[0];
            $doc=new folder($file, 'folder', $path, $content, $size, $created, $modidied);
        }
        return $doc;
    }

    $myJSON = json_encode( $files );
    echo $myJSON;

?>