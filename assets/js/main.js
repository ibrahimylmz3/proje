function validateForm() {
    var un = document.loginform.usr.value;
    var pw = document.loginform.pword.value;
    var username = "iyilmazc"; 
    var password = "iyilmazc";
    if ((un == "") || (pw == "")) {    
        alert("form boş geçilemezdir.");
        return false;
    }
    if ((un == username) && (pw == password)) {
        alert("giriş başarılı yoldaş. seni yönlendiriyoruz.");
        window.location.href = "userProfil.html";
        return true;
    }
    else {
        alert ("girdiğiniz kullanıcı adı: "+ un +" veya şifre: "+ pw +" yanlış. tekrar kontrol et.\n Önek Kullanıcı Adı: " + username + " \n Örnek Şifre: " + password + "");
        document.location.reload(true);
        return false;
    }
}

function signinForm(){
    var ad = document.signinForms.ad.value; 
    var soyad = document.signinForms.soyad.value;
    var mail = document.signinForms.mail.value;
    var kAdi = document.signinForms.kAdi.value;
    var sektor = document.signinForms.sektor.value;
    var hakkinizda = document.signinForms.hakkinizda.value;
    if ((ad == "") || (soyad == "") || (mail == "") || (kAdi == "") || (sektor == "") || (hakkinizda == "")) {    
        alert("form boş geçilemezdir.");
        return false;
    }
    else{
        alert("kayıt olmayı başardınız ancak bu bilgileri kayıt edebileceğimiz bir veri tabanımız yok :)");
    }
}
function logo_url() {
    var path = window.location.href;
}
var icerikler = [
    {id:1, aciklama: 'Refarans yazısı - 1', image: 'assets/img/index-pic.jpg'},
    {id:2, aciklama: 'Refarans yazısı - 2', image: 'assets/img/index-pic1.jpg'},
    {id:3, aciklama: 'Refarans yazısı - 3', image: 'assets/img/index-pic2.jpg'},
    {id:4, aciklama: 'Refarans yazısı - 4', image: 'assets/img/index-pic3.jpg'}]

var kategoriler = [
    {id:1, kategoriName: 'kategori - 1', kategoriLink: '#'},
    {id:2, kategoriName: 'kategori - 2', kategoriLink: '#'},
    {id:3, kategoriName: 'kategori - 3', kategoriLink: '#'},
    {id:4, kategoriName: 'kategori - 4', kategoriLink: '#'}]

function sayfaHazir() {
    var site_aciklama = "İbrahim Yılmaz";
    var path = window.location.href;
    var copyright = document.getElementById("copyright").innerHTML = "&copy; Copyright 2018 - <a href='"+ path +"'>" + site_aciklama + "</a> - Tüm Hakları Saklıdır" ;
    var iceriklerim = document.getElementById("iceriklerimiz");
        for (let index = 0; index < icerikler.length; index++) {
            iceriklerim.innerHTML = iceriklerim.innerHTML + '<div class="content-area" id="contentArea">' + '<div class="content-pic"><img src="' + icerikler[index].image + '"></div><div class="content-text">' + icerikler[index].aciklama + '</div><div class="content-button"><a href="#">Devamını Oku</a></div></div>';
        }
    var kategorilerim = document.getElementById("kategorilerimiz");
    kategorilerim.innerHTML = kategorilerim.innerHTML + '<li class="right-li"><a class="right-active">Kategorilerimiz</a></li>';
        for (let index = 0; index < kategoriler.length; index++){
            kategorilerim.innerHTML = kategorilerim.innerHTML + '<li class="right-li"><a target="_blank" href="'+ kategoriler[index].kategoriLink +'">' + kategoriler[index].kategoriName + '</a></li>';
        }
}

var slideIndex = 0;
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