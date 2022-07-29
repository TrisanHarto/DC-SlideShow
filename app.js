let posters = ['poster1.png','poster2.png','poster3.png','poster4.png','poster5.png'];
let i =0;
function slideShow() {
    document.getElementById("poster").src=posters[i];
    if(i<posters.length-1){
        i++;
    }
    else {
        i=0;
    }
    setTimeout("slideShow()" , 1000);
}
window.onload = slideShow;