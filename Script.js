function fadeOut() {
    document.getElementById("title").style.animation = "Opacity 5s";
    document.getElementById("square").style.animation = "moveAndZoom 4s";
}

function Redirect() 
{  
    window.location="http://www.newpage.com"; 
} 
document.write("You will be redirected to a new page in 5 seconds"); 
setTimeout('Redirect()', 5000);   



