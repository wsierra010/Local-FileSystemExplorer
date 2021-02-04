<?php
    require ('documentClass.php');
    function createFileObject( $dir, $file, $getDirecoryContent=true ){

        $path = $dir . '/' . $file;
        $path_info = pathinfo( $path );
            $created= filectime ( '../' . $path );
            $modified = filemtime ( '../' . $path );
        $doc = null;
        $size = 0;
        if( isset( $path_info['extension'] ) ){
            $size = filesize( '../' . $path);
            $doc = new document( $file, $path_info['extension'], $path, $size, $created, $modified );
        }else{
            $files = [];
            if( $getDirecoryContent ) {
                $files = getFilesFromFolder( $path );
                $size = $files[ 1 ];
                $content = $files[ 0 ];
            }else{
                $size = calculateSize( $path );
                $content = null;
            }

            $doc = new folder( $file, 'folder', $path, $content, $size, $created, $modified );
        }
        return $doc;
    }

    function calculateSize( $path ){
        $path_info = pathinfo( $path );
        $size = 0;
        if( isset( $path_info['extension'] ) ){
            $size = filesize('../' . $path);
        }else{
            $rootFiles = scandir('../' . $path);
            foreach( $rootFiles as $file ){
                if( $file!='.' && $file!='..' ){
                    $size += calculateSize( $path. '/' . $file);
                }
            }
        }
        return $size;
    }
?>