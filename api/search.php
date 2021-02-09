<?php

// files and folders from root
// store the path for each file and folder


// recursive scandir

// echo array to search
    
    require ('getFolders.php');
    $dir = $_GET['path'];
    //$dir = 'root'
   
    function searchInFolder($path){
        $searchArray = [];
        $content = scandir('../' . $path);
        foreach($content as $file){
            if ($file != '.' && $file != '..') {        
                array_push($searchArray, createFileObject($path, $file));         
            }
        }
        return $searchArray;
        
    }

    $result = json_encode(searchInFolder($dir));
    echo $result;
?>