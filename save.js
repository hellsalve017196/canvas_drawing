var save = document.getElementById("save");

var saveImage = function () {
    var data = canvas.toDataURL();

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {
      if(req.readyState == 4 && req.status == 200)
      {
          document.getElementById("downloadframe").src = 'download.php?path='+req.responseText;
      }
    }

    req.open('POST','save.php',true);
    req.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    req.send("img="+data);
}

save.addEventListener('click',saveImage);
