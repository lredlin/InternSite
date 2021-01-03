// JavaScript Document
window.addEventListener("DOMContentLoaded", function () {

  // Checks url and updates game status
  urlp = [];
  s = location.toString().split('?');
  if (typeof (s[1]) != "undefined") {
    s = s[1].split('&');
    for (i = 0; i < s.length; i++) {
      u = s[i].split('=');
      urlp[u[0]] = u[1];
    }
      
    // currstat and charSel variables store the games won and user selected character respectively
    document.getElementById("currstat").value = urlp['currstat'];
    document.getElementById("currstat2").value = urlp['currstat'];
    document.getElementById("currstat3").value = urlp['currstat'];
    document.getElementById("charSel").value = urlp['charSel'];
    document.getElementById("charSel2").value = urlp['charSel'];
    document.getElementById("charSel3").value = urlp['charSel'];

    // Determines character selection and updates CSS with image
    pickChar(urlp['charSel']);

    // Updates button panel and background based on level
    // 1 win yields the "Associate Level", 2 yields "Senior level", 3 yields "CEO level"
    if (parseInt(urlp['currstat']) == 1 || parseInt(urlp['currstat']) == 100 || parseInt(urlp['currstat']) == 10) {
      document.body.style = "background: url('images/AssociateLevel.jpg') no-repeat;";

      console.log(document.body.style);
    }
      
    // Removes front page buttons depending on which games the user has won
    if (urlp['currstat'].charAt(0) == 1) {
      document.getElementById("btngrp").removeChild(document.getElementById("matchform1"));
    }

    if (urlp['currstat'].charAt(1) == 1) {

      document.getElementById("btngrp").removeChild(document.getElementById("matchform2"));

    }
    if (urlp['currstat'].charAt(2) == 1) {
      document.getElementById("btngrp").removeChild(document.getElementById("matchform3"));

    }
      
    // "Associate Level" 
    if (urlp['currstat'] == '110' || urlp['currstat'] == '101' || urlp['currstat'] == '011') {
      document.body.style = "background: url('images/SeniorLevel.jpg') no-repeat;";
    }
    
    // "CEO Level", in this case the buttons are all removed and a celebration animation is set
    if (urlp['currstat'] == '111') {
      document.body.style = "background: url('images/CEOLevel.jpg') no-repeat;";
      document.getElementById("cong").style.visibility = "visible";
      var element = document.getElementById("charIm");
      element.parentNode.removeChild(element);
      element = document.getElementById("butt");
      element.parentNode.removeChild(element);
    }
  } // Case of new game with no wins yet
    else {
    document.getElementById("currstat").value = "000";
    document.getElementById("currstat2").value = "000";
    document.getElementById("currstat3").value = "000";
  }
}, false);

// Places character based on user selection
function pickChar(charSel) {
  document.getElementById("charIm").src = "images/" + charSel + ".png";
  if (charSel == "M1") {
    console.log("here");
    document.getElementById("charIm").style.width = "10%";
    document.getElementById("charIm").style.height = "20%";
    document.getElementById("charIm").style.marginLeft = "675px";
    document.getElementById("charIm").style.marginTop = "550px";

  }
}

// Toggles help screen
function toggleHelp() {
  if (document.getElementById("help").style.visibility == "" || document.getElementById("help").style.visibility == "hidden") {
    document.getElementById("help").style.visibility = "visible";
    document.getElementById("butt").textContent = "Close";
  } else if (document.getElementById("help").style.visibility == "visible") {
    document.getElementById("help").style.visibility = "hidden";
    document.getElementById("butt").textContent = "Click here to learn more about SaaS solutions!";
  }
}
