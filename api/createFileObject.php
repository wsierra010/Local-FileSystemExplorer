<?php
    require ('documentClass.php');
    function createFileObject($dir, $file, $getDirecoryContent=true){

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
            $files=[];
            if($getDirecoryContent){
                $files=getFilesFromFolder($path);
                $size = $files[1];
                $content = $files[0];
            }else{
                $size = 0;
                $content = [];
            }
            
            $doc=new folder($file, 'folder', $path, $content, $size, $created, $modidied);
        }
        return $doc;
    }
?>