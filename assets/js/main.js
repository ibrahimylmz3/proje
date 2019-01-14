var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
    function kontrol(text) {
        var username, pass, text ; 
        username= document.getElementById("k_adi").value.length;
        pass= document.getElementById("pass").value.length;
        
        if (username == 0 || pass == 0) {    
        text= "Kullanıcı adı veya şifre boş";
        }
        else if (pass < 6) {
        text= "Sifre 6 karakterden kısa";
        }
        else if (username < 3 || username > 20) {    
        text= "Kullanici adi 3-20 karakter arasında olmalıdır"; 
        }
        else {    
        text= "Giriş Başarılı" ;
        console.log("Profil sayfasına yönlendiriliyorsunuz");
        window.location.href = "userProfil.html";
        }
        document.getElementById("result").innerHTML = text;
  }
