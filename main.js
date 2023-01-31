
function NavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
    x.className += " responsive";
    } else {
    x.className = "topnav";
    }
    }
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("myTopnav").style.width = "100%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "0%";
    document.getElementById("roll_back").style.display = "block";
    } else {
    document.getElementById("myTopnav").style.width = "80%";
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header").style.top = "2rem";
    document.getElementById("roll_back").style.display = "none";
    }
    }

    var myIndex = 0;
    carousel();
    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 2 seconds
    }
    
    var imageAddr = "images/slide_1.jpg"; 
    var downloadSize = 289059;
    function ShowProgressMessage(msg) {
    if (console) {
    if (typeof msg == "string") {
    console.log(msg);
    } else {
    for (var i = 0; i < msg.length; i++) {
    console.log(msg[i]);
    }
    }
    }
    }
    function InitiateSpeedDetection() {
    ShowProgressMessage("Please wait...");
    window.setTimeout(MeasureConnectionSpeed, 1);
    };    
    if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
    } else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
    }
    function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
    endTime = (new Date()).getTime();
    showResults();
    }
    download.onerror = function (err, msg) {
    ShowProgressMessage("Invalid image, or error downloading");
    }
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(0);
    if(speedMbps<="1"){
    document.getElementById("banner").style.display='none';
    document.getElementById("container").style.marginTop='20vh';
    }
    }
    }

    $(function() {
    var $clientslider = $('#clientlogo');
    var clients = $clientslider.children().length;
    var clientwidth = (clients * 220); 
    $clientslider.css('width', clientwidth);
    var rotating = true;
    var clientspeed = 1800;
    var seeclients = setInterval(rotateClients, clientspeed);
    $(document).on({
    mouseenter: function() {
    rotating = false;
    },
    mouseleave: function() {
    rotating = true;
    }
    }, '#ourclients');
    function rotateClients() {
    if (rotating != false) {
    var $first = $('#clientlogo li:first');
    $first.animate({
    'margin-left': '-33%'
    }, 2000, function() {
    $first.remove().css({
    'margin-left': '0px'
    });
    $('#clientlogo li:last').after($first);
    });
    }
    }
    });