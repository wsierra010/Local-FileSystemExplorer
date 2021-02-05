<?php
    $path = '../' . $_GET['path'];

    if( mkdir($path) ){
        echo 'true';
    }else {
        echo 'false';
    }