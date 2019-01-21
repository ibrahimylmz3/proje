var refPage1 = [{id:1, image: '../assets/img/index-pic.jpg', refText: 'Lorem ipsum dolor sit amet...', personelPic: '../assets/img/pers-pic.png', personelComment: 'test yorum', yonlendirURL: '#' }]
var refPage2 = [{id:1, image: '../assets/img/index-pic.jpg', refText: 'Lorem ipsum dolor sit amet...', personelPic: '../assets/img/pers-pic.png', personelComment: 'test yorum', yonlendirURL: '#' }]
var refPage3 = [{id:1, image: '../assets/img/index-pic.jpg', refText: 'Lorem ipsum dolor sit amet...', personelPic: '../assets/img/pers-pic.png', personelComment: 'test yorum', yonlendirURL: '#' }]
var refPage4 = [{id:1, image: '../assets/img/index-pic.jpg', refText: 'Lorem ipsum dolor sit amet...', personelPic: '../assets/img/pers-pic.png', personelComment: 'test yorum', yonlendirURL: '#' }]

function refsayfaHazir() {
    var iceriklerim = document.getElementById("icerikler1");
        for (let index = 0; index < refPage1.length; index++) {
            iceriklerim.innerHTML = iceriklerim.innerHTML + '<div class="icerik-pic">' + '<img src="' + refPage1[index].image + '" style="width:100%">' + '</div>' + '<div class="icerik-text">' + refPage1[index].refText + '</div>' + '<div class="comment-area-comment">' + '<div class="comment-pic">' + '<img src="' + refPage1[index].personelPic + '"> ' + ' </div> ' + '<div class="comment-text"> ' + refPage1[index].personelComment +  '</div>' + '<div class="comment-button">' + '<a href="' + refPage1[index].yonlendirURL + '">Cevapla</a></div>' + '</div>';
        }
    var iceriklerim = document.getElementById("icerikler2");
        for (let index = 0; index < refPage2.length; index++) {
            iceriklerim.innerHTML = iceriklerim.innerHTML + '<div class="icerik-pic">' + '<img src="' + refPage2[index].image + '" style="width:100%">' + '</div>' + '<div class="icerik-text">' + refPage2[index].refText + '</div>' + '<div class="comment-area-comment">' + '<div class="comment-pic">' + '<img src="' + refPage2[index].personelPic + '"> ' + ' </div> ' + '<div class="comment-text"> ' + refPage2[index].personelComment +  '</div>' + '<div class="comment-button">' + '<a href="' + refPage2[index].yonlendirURL + '">Cevapla</a></div>' + '</div>';
        }  
    var iceriklerim = document.getElementById("icerikler3");
        for (let index = 0; index < refPage3.length; index++) {
            iceriklerim.innerHTML = iceriklerim.innerHTML + '<div class="icerik-pic">' + '<img src="' + refPage3[index].image + '" style="width:100%">' + '</div>' + '<div class="icerik-text">' + refPage3[index].refText + '</div>' + '<div class="comment-area-comment">' + '<div class="comment-pic">' + '<img src="' + refPage3[index].personelPic + '"> ' + ' </div> ' + '<div class="comment-text"> ' + refPage3[index].personelComment +  '</div>' + '<div class="comment-button">' + '<a href="' + refPage3[index].yonlendirURL + '">Cevapla</a></div>' + '</div>';
        }
        var iceriklerim = document.getElementById("icerikler4");
        for (let index = 0; index < refPage4.length; index++) {
            iceriklerim.innerHTML = iceriklerim.innerHTML + '<div class="icerik-pic">' + '<img src="' + refPage4[index].image + '" style="width:100%">' + '</div>' + '<div class="icerik-text">' + refPage4[index].refText + '</div>' + '<div class="comment-area-comment">' + '<div class="comment-pic">' + '<img src="' + refPage4[index].personelPic + '"> ' + ' </div> ' + '<div class="comment-text"> ' + refPage4[index].personelComment +  '</div>' + '<div class="comment-button">' + '<a href="' + refPage4[index].yonlendirURL + '">Cevapla</a></div>' + '</div>';
    	} 
}
