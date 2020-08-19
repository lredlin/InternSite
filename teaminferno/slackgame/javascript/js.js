// Stores the question sequence in a JSON object with a tree data structure
var tree = {
  "Root:": {
    "Q": "Okay great!, I have 3 use cases I am working on: An online clothing retailer, a gym company operating around the country, and an international airline. Which would you like to help me with?",
    "isLeaf": "False",
    "Choices": [{
        "Response": "Working with the online clothing retailer sounds fun!",
        "isLeaf": "False",
        "Q": "Okay, an online retailer wants to understand their customer better. They have data from mobile, site and other sources, but still cant understand each customer and their preferences. Which product should I suggest for our client?",
        "Choices": [{
            "Response": "Adobe Analytics!",
            "isLeaf": "False",
            "Q": "How will Adobe Analytics help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Analytics will be the root of personalization delivery for my client and everyone who visits their digital channels. Its powerful ability to gather data from many different touchpoints into understandable and shareable reports is the key for any digital innovation they hope to achieve. I begin by defining their Analytics Cycle to determine how data can be best measured to meet their business objective of increasing hotel bookings. From this point, Analytics turns  millions of data points into actual insight on the Analytics workspace, the most powerful feature of the product. It then fuels the creation of specific audiences and personalization provided by Adobe Target and Adobe Audience Manager. ",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          },
          {
            "Response": "Adobe Target!",
            "isLeaf": "False",
            "Q": "How will Adobe Target help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Target acts as the main delivery of personalized experiences, its large scale abilities for diverse sets of users is even more optimized through its Analytics and Audience Manager integrations. I will begin to optimize my clients use of A4T (Adobe Analytics for Target), from there they can create, test and optimize many different personalization activities using the Analytics workspace to analyze which experiences are best fit for specific audiences. These audiences are derived from the powerful trait assignment capabilities within Adobe Audience Manager.  Since hotels are all about the experience, Im more confident than ever that my client is now able to create a meaningful experience for their users even before they arrive at the hotel, thanks to the personalization delivery power Target and its integrations with Analytics and AAM it provides.",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          },
          {
            "Response": "Adobe Audience Manager!",
            "isLeaf": "False",
            "Q": "How will Adobe Audience Manager help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Audience Manager begins the personalization journey through its ability to create relevant audiences based on data from Adobe Analytics and the management of these audiences for personalization use in Target. Beginning with Analytics, data can be immediately delivered into AAM through server-side fowarding, a process that assigns a code with relevant user traits to each visitor of my clients hotel. This data is important for AAMs main features of informing the client, discovering new audiences for various hotel locations and segmenting users together based on similar traits whether it be couple, business visitors or families. For even more personalization optimization, AAM and Adobe Target work together to create meaningful personalization activities based on created AAM audiences so each visitor can receive relevant content and experiences fit for their hotel searching needs.",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          }
        ]
      },
      {
        "Response": "How about we take a look at the gyms around the country?",
        "isLeaf": "False",
        "Q": "A national gym with many locations across the country is looking to personalize their digital communication. They are not sure what to do with all of the customer data in order to create different marketing approaches applicable to what the customer actually cares about. What product can they use to differentiate their audiences from personalized marketing?",
        "Choices": [{
            "Response": "Adobe Analytics!",
            "isLeaf": "False",
            "Q": "How will Adobe Analytics help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Analytics will be the root of personalization delivery for my client and everyone who visits their digital channels. Its powerful ability to gather data from many different touchpoints into understandable and shareable reports is the key for any digital innovation they hope to achieve. I begin by defining their Analytics Cycle to determine how data can be best measured to meet their business objective of increasing hotel bookings. From this point, Analytics turns  millions of data points into actual insight on the Analytics workspace, the most powerful feature of the product. It then fuels the creation of specific audiences and personalization provided by Adobe Target and Adobe Audience Manager. ",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          },
          {
            "Response": "Adobe Target!",
            "isLeaf": "False",
            "Q": "How will Adobe Target help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Target acts as the main delivery of personalized experiences, its large scale abilities for diverse sets of users is even more optimized through its Analytics and Audience Manager integrations. I will begin to optimize my clients use of A4T (Adobe Analytics for Target), from there they can create, test and optimize many different personalization activities using the Analytics workspace to analyze which experiences are best fit for specific audiences. These audiences are derived from the powerful trait assignment capabilities within Adobe Audience Manager.  Since hotels are all about the experience, Im more confident than ever that my client is now able to create a meaningful experience for their users even before they arrive at the hotel, thanks to the personalization delivery power Target and its integrations with Analytics and AAM it provides.",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          },
          {
            "Response": "Adobe Audience Manager!",
            "isLeaf": "False",
            "Q": "How will Adobe Audience Manager help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Audience Manager begins the personalization journey through its ability to create relevant audiences based on data from Adobe Analytics and the management of these audiences for personalization use in Target. Beginning with Analytics, data can be immediately delivered into AAM through server-side fowarding, a process that assigns a code with relevant user traits to each visitor of my clients hotel. This data is important for AAMs main features of informing the client, discovering new audiences for various hotel locations and segmenting users together based on similar traits whether it be couple, business visitors or families. For even more personalization optimization, AAM and Adobe Target work together to create meaningful personalization activities based on created AAM audiences so each visitor can receive relevant content and experiences fit for their hotel searching needs.",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          }
        ]
      },
      {
        "Response": "Id love to help with the international airline!",
        "isLeaf": "False",
        "Q": "An international airline that travels to locations all around the world has a bunch of different ideas for their website, email and mobile app design, but they have no way of knowing what experience is better for their defined audiences. What product would be best to use to test different experiences and determine which type engages the customer the most throughout the data?",
        "Choices": [{
            "Response": "Adobe Analytics!",
            "isLeaf": "False",
            "Q": "How will Adobe Analytics help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Analytics will be the root of personalization delivery for my client and everyone who visits their digital channels. Its powerful ability to gather data from many different touchpoints into understandable and shareable reports is the key for any digital innovation they hope to achieve. I begin by defining their Analytics Cycle to determine how data can be best measured to meet their business objective of increasing hotel bookings. From this point, Analytics turns  millions of data points into actual insight on the Analytics workspace, the most powerful feature of the product. It then fuels the creation of specific audiences and personalization provided by Adobe Target and Adobe Audience Manager. ",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          },
          {
            "Response": "Adobe Target!",
            "isLeaf": "False",
            "Q": "How will Adobe Target help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Target acts as the main delivery of personalized experiences, its large scale abilities for diverse sets of users is even more optimized through its Analytics and Audience Manager integrations. I will begin to optimize my clients use of A4T (Adobe Analytics for Target), from there they can create, test and optimize many different personalization activities using the Analytics workspace to analyze which experiences are best fit for specific audiences. These audiences are derived from the powerful trait assignment capabilities within Adobe Audience Manager.  Since hotels are all about the experience, Im more confident than ever that my client is now able to create a meaningful experience for their users even before they arrive at the hotel, thanks to the personalization delivery power Target and its integrations with Analytics and AAM it provides.",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          },
          {
            "Response": "Adobe Audience Manager!",
            "isLeaf": "False",
            "Q": "How will Adobe Audience Manager help my client understand their customer better?",
            "Choices": [{
              "Response": "Adobe Audience Manager begins the personalization journey through its ability to create relevant audiences based on data from Adobe Analytics and the management of these audiences for personalization use in Target. Beginning with Analytics, data can be immediately delivered into AAM through server-side fowarding, a process that assigns a code with relevant user traits to each visitor of my clients hotel. This data is important for AAMs main features of informing the client, discovering new audiences for various hotel locations and segmenting users together based on similar traits whether it be couple, business visitors or families. For even more personalization optimization, AAM and Adobe Target work together to create meaningful personalization activities based on created AAM audiences so each visitor can receive relevant content and experiences fit for their hotel searching needs.",
              "isLeaf": "True",
              "FinalR": "Wow, you are so smart! Cant wait to work with you!"
            }]
          }
        ]
      }
    ]
  }
};

// Turns the tree into an object for traversal
tree = JSON.stringify(tree);
tree = JSON.parse(tree);
console.log(tree);

// Root to start traversal
var curr = tree["Root:"];

// Variables to track status
var pressed = false;
var consultant = document.createElement("div");
var client = document.createElement("div");
var currMessage = 0;
var message = "hello";
var today = new Date();
var time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" : "") + "" + today.getMinutes();
var clienthtml = "";
var consultanthtml = "";
var charSel;

// Retrieves character image from url
urlp = [];
s = location.toString().split('?');
if (typeof (s[1]) != "undefined") {
  s = s[1].split('&');
  for (i = 0; i < s.length; i++) {
    u = s[i].split('=');
    urlp[u[0]] = u[1];
  }
  charSel = urlp['charSel'];
}

// Starts slack message process
var climessage = "";
var conmessage = "";
var currSel = 0;
var starter = document.createElement("div");
begin();

// Function to begin message sequence
async function begin() {

  // Sleep function used to control timing
  await sleep(1000);

  // Gets time and presents initial client message
  today = new Date();
  climessage = "You look like you work at Adobe! Can you help me find SaaS products to recommend to my clients?";
  time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" : "") + "" + today.getMinutes();
  clienthtml = "<div class='container' id = " + currMessage + "><img src='./images/client.PNG' alt='Avatar' style='width:100%;'><p>" + climessage + "</p><span class='time-right'>" + time + "</span></div>";
  starter.innerHTML = clienthtml;
  document.getElementById("chat").appendChild(starter);
  starter = document.createElement("div");

  // Prompts user for intial intern message
  await sleep(1500);
  var starMess = "Sure, Ill do my best!";
  var star = "<div class='container' id = s" + currMessage + "><img src='./images/" + charSel + ".png' alt='Avatar' class = 'right' ><p id = p" + currMessage + ">Select an option</p><div id = 'buttons'>";

  // Displays message
  star = star + "<button type='button' onclick='start(" + currMessage + ", \"" + starMess + "\", " + currSel + ")'>" + starMess + "</button>";
  star = star + "</div><span class='time-left'>" + time + "</span></div>";
  starter.innerHTML = star;
  document.getElementById("chat").appendChild(starter);
}

// Uses promise to provide set time delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Starts sequence after initial messages
async function start(num, mess) {

  // Tracks user button status
  pressed = false;
  document.getElementById("p" + num).childNodes[0].nodeValue = mess;
  var par = document.getElementById('buttons').parentElement

  // Removes buttons after pressed to display message
  par.removeChild(document.getElementById('buttons'));
  var p = document.createElement("p");
  pressed = true;

  // Current selection
  currSel = 0;

  // Tells whether sequence is complete
  var complete = true;

  // Waits after user response and displays client response
  await sleep(1000);
  client = document.createElement("div");
  climessage = curr.Q;
  console.log(curr.Q);
  clienthtml = "<div class='container' id = " + currMessage + "><img src='./images/client.PNG' alt='Avatar' style='width:100%;'><p>" + climessage + "</p><span class='time-right'>" + time + "</span></div>";
  client.innerHTML = clienthtml;
  document.getElementById("chat").appendChild(client);

  // Tracks movement through tree
  currMessage++;

  // Updates time
  today = new Date();
  time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" : "") + "" + today.getMinutes();
  await sleep(1000);

  // Displays user choices
  var selections = document.createElement("div");
  var choices = curr.Choices;
  var s = "<div class='container' id = s" + currMessage + "><img src='./images/" + charSel + ".png' alt='Avatar' class = 'right' style='width:100%;'><p id = p" + currMessage + ">Select an option</p><div id = 'buttons'>";
  choices.forEach(function (item, index) {
    var add = String(item.Response);
    console.log(curr);
    s = s + "<button type='button'  onclick='removeButtons(" + currMessage + ", \"" + add + "\", " + index + ")'>" + item.Response + "</button>";
    console.log(s);
  });
  s = s + "</div><span class='time-left'>" + time + "</span></div>";

  // Moves through tree after user selects option
  selections.innerHTML = s;
  document.getElementById("chat").appendChild(selections);
  currMessage++;
  today = new Date();
  time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" : "") + "" + today.getMinutes();
}

// Function called after user selects response
async function response(currSel) {
  await sleep(1000);

  // Client response is displayed
  client = document.createElement("div");
  climessage = curr.Q;
  console.log("here");
  clienthtml = "<div class='container' id = " + currMessage + "><img src='./images/client.PNG' alt='Avatar' style='width:100%;'><p>" + climessage + "</p><span class='time-right'>" + time + "</span></div>";
  client.innerHTML = clienthtml;
  document.getElementById("chat").appendChild(client);
  currMessage++;
  today = new Date();
  time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" : "") + "" + today.getMinutes();
  await sleep(1000);

  // New options are appended to buttons
  var selections = document.createElement("div");
  var choices = curr.Choices;
  var s = "<div class='container' id = s" + currMessage + "><img src='./images/" + charSel + ".png' alt='Avatar' class = 'right' style='width:100%;'><p id = p" + currMessage + ">Select an option</p><div id = 'buttons'>";
  choices.forEach(function (item, index) {
    var add = String(item.Response);
    s = s + "<button type='button'  onclick='removeButtons(" + currMessage + ", \"" + add + "\", " + index + ")'>" + item.Response + "</button>";
    console.log(s);
  });
  s = s + "</div><span class='time-left'>" + time + "</span></div>";

  // Updates date and moves through tree
  selections.innerHTML = s;
  document.getElementById("chat").appendChild(selections);
  currMessage++;
  today = new Date();
  time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" : "") + "" + today.getMinutes();
}

// Used for ease of replacing a character in a string
String.prototype.replaceAt = function (index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

// Checks if buttons have been pressed
function checkFlag() {
  if (pressed === false) {
    window.setTimeout(checkFlag, 100);
  } else {
    return;
  }
}

// Final response function
async function fResponse(currSel) {

  // Waits then displays final response
  await sleep(2000);
  client = document.createElement("div");
  climessage = curr.FinalR;
  clienthtml = "<div class='container' id = " + currMessage + "><img src='./images/client.PNG' alt='Avatar' style='width:100%;'><p>" + climessage + "</p><span class='time-right'>" + time + "</span></div>";
  client.innerHTML = clienthtml;
  document.getElementById("chat").appendChild(client);
  await sleep(2000);

  // Gets level from URL then uses form to return with win code 
  urlp = [];
  s = location.toString().split('?');
  if (s != null) {
    s = s[1].split('&');
    for (i = 0; i < s.length; i++) {
      u = s[i].split('=');
      urlp[u[0]] = u[1];
    }
    var y = urlp['currstat'];
    y = y.replaceAt(2, "1");
    console.log(y);
    var x = document.createElement("FORM");
    x.action = '../index.html';
    var charSel = urlp['charSel'];
    x.innerHTML = "<input  name='currstat'  value=" + y + "><input type='hidden' name='charSel'  value=" + charSel + ">";
    document.getElementById("chat").appendChild(x);
    x.submit();
  }
}

// Removes buttons when a choice is selected
async function removeButtons(num, mess, index) {
  if ((typeof index) !== "number") {
    index = 0;
  }
  document.getElementById("p" + num).childNodes[0].nodeValue = mess;
  var par = document.getElementById('buttons').parentElement
  par.removeChild(document.getElementById('buttons'));
  var p = document.createElement("p");
  pressed = true;
  console.log(index);
  currSel = index;
  curr = curr.Choices[currSel];
  console.log(curr.isLeaf);

  // Determines place on tree and moves chat through next sequence
  if (curr.isLeaf == "True") {
    console.log("here1");
    fResponse(currSel);
  } else {
    response(currSel);
  }
}
