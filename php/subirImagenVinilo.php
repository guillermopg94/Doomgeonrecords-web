<?php



    if ($_FILES["foto"]["error"] > 0) {
        echo "Error: " . $_FILES["foto"]["name"] . "<br>";
    } else {
        echo $_FILES["foto"]["name"];
      
    }
    if (file_exists("../assets/vinilos/" . $_FILES["foto"]["name"])) {
    
    } else {
        move_uploaded_file(
            $_FILES["foto"]["tmp_name"],
            "../assets/vinilos/" . $_FILES["foto"]["name"]
        );
        chmod("../assets/vinilos/" . $_FILES["foto"]["name"], 0777);

    }

   header("location:../admin.html");
?>