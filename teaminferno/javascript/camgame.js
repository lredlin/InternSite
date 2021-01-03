// JavaScript Document

// Provides easy way to replace a single character in a string
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Tracks timing and answer status
var tim = 10;
var rightAnswercount = 0;
var wrongAnswerCount = 0;

// Responses for the first, second and third right answer
function good1() {
    
  // Shows puppy
  document.getElementById("puppy").setAttribute("src", "images/puppy.gif");

}

function good2() {
    
  // Shows balloon
  document.getElementById("balloon").setAttribute("src", "images/baloon.gif");

}

function good3() {
    
  // Shows trophy
  document.getElementById("trophy").setAttribute("src", "images/trophy.gif");

  // Clears buttons after last selection
  document.getElementById("trophy").setAttribute("style", 'margin-left: auto;margin-right: auto;text-align:center;padding-bottom: 200px;display: block;');
  document.getElementById("buttons").parentNode.removeChild(document.getElementById("buttons"));

}

// responses for first, second and third wrong answer
function bad1() {
    
  // Warps webcam video by making it unusually wide
  canvas.setAttribute("style", "width:1000px");
  document.getElementById("container").setAttribute("style", "width:1000px");

}

function bad2() {
    
  // Adds all filters to make the image appear ghostly
  var effect = filters[1];
  if (effect) {
    for (i = 0; i < filters.length; i++) {
      video.classList.add(filters[i]);
      canvas.classList.add(filters[i]);
    }
  }
}

function bad3() {
    
  // Rotates the image and makes it smaller giving it the effect of swirling into nothingness
  canvas.setAttribute("style", "transform:rotate(" + tim + "deg)scale(" + 10 / tim + "," + 20 / tim + ");");
  tim++;
}

// Updates count and calls appropriate function on correct answer
async function rightAnswer() {
  rightAnswercount++;
  switch (rightAnswercount) {
    case 1:
      good1();
      break;
    case 2:
      good2();
      break;
    case 3:
      good3();
      break;

  }
  video.className = '';
  canvas.className = '';
  var effect = filters[iFilter++ % filters.length];
  if (effect) {

    // Disables buttons temporarily to prevent clicks before display of response
    document.querySelector('#filtText').innerHTML = 'Correct!';
    if (document.getElementById('b1') != null) {
      document.getElementById('b1').setAttribute("disabled", "disabled");
      document.getElementById('b2').setAttribute("disabled", "disabled");
    }
    await sleep(1000);
    currQ++;
    if (currQ == 4) {
      if (document.getElementById('b1') != null) {
        document.getElementById('b1').setAttribute("disabled", "disabled");
        document.getElementById('b2').setAttribute("disabled", "disabled");
      }
      await sleep(2000);
      sendOff();
    }
    document.querySelector('#filtText').innerHTML = tree.Questions[currQ].Q;
    if (document.getElementById('b1') != null) {
      document.getElementById('b1').removeAttribute("disabled");
      document.getElementById('b2').removeAttribute("disabled");
    }
  }
}

// Updates trackers and selects response for wrong asnwer
async function wrongAnswer() {
  wrongAnswerCount++;
  video.className = '';
  canvas.className = '';
  var effect = filters[iFilter++ % filters.length];
  if (effect) {
    switch (wrongAnswerCount) {
      case 1:
        bad1();
        break;
      case 2:
        bad1();
        bad2();
        break;
      case 3:
        bad1();
        bad2();
        // Removes buttons after 3 bad selections
     document.getElementById("buttons").parentNode.removeChild(document.getElementById("buttons"));
        setInterval(bad3, 30);
        break;
    }

    // Disables buttons temporarily to prevent pressing during response 
    document.querySelector('#filtText').innerHTML = 'WRONG!';
    if (document.getElementById('b1') != null) {
      document.getElementById('b1').setAttribute("disabled", "disabled");
      document.getElementById('b2').setAttribute("disabled", "disabled");
    }
    await sleep(1000);
    currQ++;
    if (currQ == 4) {
      if (document.getElementById('b1') != null) {
        document.getElementById('b1').setAttribute("disabled", "disabled");
        document.getElementById('b2').setAttribute("disabled", "disabled");
      }
      await sleep(2000);
    
      // Game is complete, returns to home screen
      sendOff();
    }
    document.querySelector('#filtText').innerHTML = tree.Questions[currQ].Q;
    if (document.getElementById('b1') != null) {
      document.getElementById('b1').removeAttribute("disabled");
      document.getElementById('b2').removeAttribute("disabled");
    }
  }
}

// Function with promise to provide time delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Finds level info from URL and sends user back to homescreen with updated page
function sendOff() {
  
  // Obtains URL variables
  urlp = [];
  s = location.toString().split('?');
  if (s != null) {
    s = s[1].split('&');
    for (i = 0; i < s.length; i++) {
      u = s[i].split('=');
      urlp[u[0]] = u[1];
    }
      
    // Updates URL variable to indicate that game is complete
    var y = urlp['currstat'];
    y = y.replaceAt(1, "1");
    console.log(y);
      
    // Creates and submits form to return home
    var x = document.createElement("FORM");
    x.action = 'index.html';
    var charSel = urlp['charSel'];
    x.innerHTML = "<input type='hidden' name='currstat'  value=" + y + "><input type='hidden' name='charSel'  value=" + charSel + ">";
    document.getElementById("container").appendChild(x);
    x.submit();
  }
}

// Selects video element for answer effects
var currQ = 1;
var video = document.querySelector("#videoElement");

// Tree JSON structure storing answers and questions
var tree = {
  "Questions": {
    "1": {
      "Q": "With A/B testing using Adobe Target, customers can test various content combinations,layouts and UX designs which fuel data driven decisions on the most effective web experiences for a set of users",
      "A": "True"
    },
    "2": {
      "Q": "A student internship recruiting agency is looking to group all Business, Computer Science and Engineering students who attend all US universities. Adobe Audience Manager is the best solution for this company.",
      "A": "True"
    },
    "3": {
      "Q": "Adobe Targets main feature is a powerful workspace that makes data useable, readable and shareable to paint a 360 degree view of the customer",
      "A": "False"
    }
  }
};

// Displays question
document.querySelector("#filtText").innerHTML = tree.Questions[currQ].Q;

// Gets the user webcam
if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
      video: true
    })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
var warper = null;
var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

// Custom video filters
var iFilter = 0;
var filters = [
  'grayscale',
  'sepia',
  'blur',
  'brightness',
  'contrast',
  'hue-rotate',
  'hue-rotate2',
  'hue-rotate3',
  'saturate',
  'invert',
  'none'
];

// Draw the video stream at the canvas object
function drawVideoAtCanvas(obj, context) {
  window.setInterval(function () {
    context.drawImage(obj, 0, 0);
  }, 60);
}

// Add event listener for our video's Play function in order to produce video at the canvas
video.addEventListener('play', function () {
  drawVideoAtCanvas(this, context);
  video.style.display = "none";
}, false);

// Adds event listener to determine right or wrong answer  
document.querySelector('#b1').addEventListener('click', function () {

  if (tree.Questions[currQ].A == "True") {
    rightAnswer();
  } else {
    wrongAnswer();
  }


}, false);

// Event listener for button
document.querySelector('#b2').addEventListener('click', function () {

  if (tree.Questions[currQ].A == "False") {
    rightAnswer();
  } else {
    wrongAnswer();
  }
}, false);
