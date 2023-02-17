function fadeOut() {
    document.getElementById("title").style.animation = "Opacity 5s";
    document.getElementById("square").style.animation = "moveAndZoom 4s";

}

let O = document.getElementById("title").style.opacity.valueOf;

if(O == 0){
    function Redirect() {  
        window.location="http://www.newpage.com"; 
    } 
}



 



