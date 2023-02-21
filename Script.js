function fadeOut() {
    document.getElementById("title").style.animation = "Opacity 5s";
    document.getElementById("square").style.animation = "moveAndZoom 4s";
}

setTimeout(
    function Redirect() {
        location.replace("https://sizhenchen.github.io/OnBeginnings/entry1_InLife/index1.html");
    }
    ,5000);

setTimeout(
    function Disappear() {
        $(document).ready(function() {$("#text").hide(); })
        $(document).ready(function() {$("#square").hide(); })
    }
    ,5000); 
    






 



