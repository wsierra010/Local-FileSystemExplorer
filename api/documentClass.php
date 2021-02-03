<?php
    class document{
        public $name;
        public $extension;
        public $path;

        function __construct($name, $extension, $path){
            $this->name = $name;
            $this->extension = $extension;
            $this->path = $path;
        }
    }

    class folder extends document{
        public $content;

        function __construct($name, $extension, $path, $content){
            $this->name = $name;
            $this->extension = $extension;
            $this->path = $path;
            $this->content = $content;
        }
    }
?>