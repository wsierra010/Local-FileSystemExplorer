<?php
    class document{
        public $name;
        public $extension;
        public $path;
        public $size;
        public $created;
        public $modified;

        function __construct($name, $extension, $path, $size, $created, $modified){
            $this->name = $name;
            $this->extension = $extension;
            $this->path = $path;
            $this->size = $size;
            $this->created = $created;
            $this->modified = $modified;
        }
    }

    class folder extends document{
        public $content;

        function __construct($name, $extension, $path, $content, $size, $created, $modified){
            $this->name = $name;
            $this->extension = $extension;
            $this->path = $path;
            $this->size = $size;
            $this->created = $created;
            $this->modified = $modified;

            $this->content = $content;
        }
    }
?>