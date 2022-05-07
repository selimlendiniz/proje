<?php
    if(isset($_GET['submit'])){
        echo "Adınız Soy Adınız: \n" .$_GET['name']. "<br />" ;
        echo "Email Adresiniz: \n" .$_GET['email']. "<br />";
        echo "Konu Başlığı: \n" .$_GET['subject']. "<br />";
        echo "Mesaj: \n" .$_GET['message']. "<br />";

        header("refresh:3 ; /webproje/homepage/index.html");
    }

?>