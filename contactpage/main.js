var formGiris = document.forms["contactForm"];  
let name = formGiris.name;   
var email = formGiris.email;   
var subject = formGiris.subject;   
var message = formGiris.message;   


formGiris.onsubmit = function() {

debugger;
if(name.value != "" && email.value != "" && subject.value != "" && message.value != ""){

    if(email.value.indexOf("@") >= 0 ){
        alert("Php sayfasına yönlendiriliyorsunuz");
        return true;
    }else{
        alert("Email kutunuzda @ işareti olmalıdır");
        return false;
    }

    

}
else{
    alert("Boş Kutucuk Bırakmayınız");
    return false;
}


}
