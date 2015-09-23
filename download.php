<?php

$img = $_GET['path'];

header("Content-type:image/png");
header("Content-disposition:attachment;filename=canvasoutput.png");

readfile($img);

?>
