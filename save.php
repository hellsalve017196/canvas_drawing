<?php

  $data = $_POST['img'];

  $data = str_replace('data:image/png;base64','',$data); // cleaning data type
  $data = str_replace(' ','+',$data); // + initialy replace with space,we have to revert it

  $img = base64_decode($data);

  $path = 'images/'.uniqid().'.png';

  if(file_put_contents($path,$img))
  {
      echo $path;
  }
  else {
      echo 'error occured';
  }

?>
