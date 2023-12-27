x = 0;
y = 0;

draw_apple = "";
apple = "";
speak_data = "";
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
   to_number = Number(content);

if(Number.isInteger(to_number)){
  draw_apple = "set";
  document.getElementById("status").innerHTML = "Started drawing apple";
} else{
document.getElementById("status").innerHTML = "The speak has not recognised a number";
 }

}


function preload(){
  apple =  loadImage("apple.png")
}


function setup() {
 canvas = createCanvas(900, 600);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i = 1; i <= to_numnber; i++){
      x = Math.floor(Math.random()*850);
      y = Math.floor(Math.random()*550);
      image(apple, x, y, 50, 50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number+" apples drawn";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

