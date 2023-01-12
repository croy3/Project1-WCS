const picPopup = document.getElementById("pic-popup");
const darkBg = document.getElementById("dark-bg");
const picList = document.querySelectorAll("#galerie img");

for( let i = 0; i < picList.length; i++) {
    picList[i].addEventListener("click", function(event) {
        picPopup.src = picList[i].src;
        picPopup.alt = picList[i].alt;
        picPopup.style.visibility = "visible";
        darkBg.style.visibility = "visible";
    }); 
}

darkBg.addEventListener("click", function(event) {
    picPopup.src = "";
    picPopup.alt = "";
    picPopup.style.visibility = "hidden";
    darkBg.style.visibility = "hidden";
}); 