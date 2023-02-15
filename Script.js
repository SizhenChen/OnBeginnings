function fadeOut() {
    document.getElementById("title").style.animation = "Opacity 5s";
    document.getElementById("square").style.animation = "moveAndZoom 4s";
    
        $(window).load(function () {
            window.setTimeout(function () {
                window.location.href = "https://www.google.co.in";
            }, 5000)
        });
    
}




