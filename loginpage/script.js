var formGiris = document.forms["login-form"];  
let username = formGiris.username;     
var password = formGiris.password;
const sys_username = "selim@ogr.sakarya.edu.tr";
const sys_password = "selim";

formGiris.onsubmit = function() {

debugger;
if(username.value != "" && password.value != ""){

    if(username.value.indexOf("@ogr.sakarya.edu.tr") >= 0 ){
       if(sys_username == username.value && sys_password == password.value){
         alert("Php sayfasına yönlendiriliyorsunuz");
         return true;
       }else{
         alert("Kullanıcı adınız veya şifreniz hatalı");
         return false;
       }
        
    }else{
        alert("Kullanıcı adınız (....@ogr.sakarya.edu.tr) şeklinde olmalıdır");
        return false;
    }

    

}
else{
    alert("Boş Kutucuk Bırakmayınız");
    return false;
}


}
