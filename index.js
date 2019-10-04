let body= document.querySelector("body"),
arrowLeft = document.querySelector(".prev"),
arrowRight = document.querySelector(".next"),
Pause = document.querySelector(".pauseDiv"),
Play = document.querySelector(".playDiv"),
button = document.querySelector(".darklightButton"),
midSlide = document.querySelector(".mid-slide")
current = 0;

let running = true;
var timer;
let lightColor = false

let images = new Array
let Quotes = new Array
Quotes[0] = "All ends with the beginning"
Quotes[1] = "Someother quote"
Quotes[2] = "And one another quote"
images[2] = './img/adult-architecture-backpack-1251861.jpg';
images[1] = './img/book-chair-close-up-2451568.jpg';
images[0] = './img/boots-bush-casual-2985925.jpg';

function slideLeft() {
  if (current < 1){
      current = 3;
  }
  midSlide.style.animation = "all 0.7s ease-in-out";
  body.style.backgroundImage = `url(${images[current-1]})`;
  midSlide.textContent = `${Quotes[current-1]}`
  console.log(midSlide.textContent)
  current--;
}

function slideRight() {
  console.log(current)
if (current >= 2){
        current = -1;
}
  midSlide.style.animation = "all 0.7s ease-in-out"
  body.style.backgroundImage = `url(${images[current+1]})`;
  midSlide.textContent = `${Quotes[current+1]}`
  current++;
}

arrowLeft.addEventListener("click", function() {
  console.log("left clicked")
  slideLeft();
});

arrowRight.addEventListener("click", function() {
  console.log("rihgt clicked")
  slideRight();
});


function setTimer(){
    timer = setInterval("slideRight()",4000);
  }

Pause.addEventListener("click",function(){
  Pause.style.display = "none";
  Play.style.display = "inline-block";
  clearInterval(timer);
  timer = null;
})

Play.addEventListener("click",function(){
  Pause.style.display = "inline-block";
  Play.style.display = "none";
  slideLeft()
  setTimer()
})

setTimer()



button.addEventListener("click",function(){

  slidder = document.querySelector(".slidder");
  borderNav = document.querySelector("nav");
  sliderNav = document.querySelector(".section-slidder");
  icon = document.querySelectorAll(".slide")
  content = document.querySelectorAll(".content")
  content_a = document.querySelectorAll(".content a")
  

  if (lightColor === true){
    
    button.innerHTML = "Light Mode"
    borderNav.style.borderBottom = "solid 1px black"
    sliderNav.style.borderTop = "1px solid black"
    for (var i = 0; i<icon.length; i++) {
      icon[i].style.color = "white"
    }
    for (var i = 0; i<content.length; i++) {
      content[i].style.backgroundColor = "black"
    }
    for (var i = 0; i<content_a.length; i++) {
      content_a[i].style.color = "white"
        }    
    slidder.style.backgroundColor = "rgba(0,0,0,0.9)";
    lightColor = false;
  }
  else{
    button.innerHTML = "Dark Mode"
    slidder.style.backgroundColor = "rgba(255,255,255,0.8)";
    for (var i = 0; i<icon.length; i++) {
      icon[i].style.color = "black"
    }
    for (var i = 0; i<content.length; i++) {
      content[i].style.backgroundColor = "white"
    }   
    for (var i = 0; i<content_a.length; i++) {
      content_a[i].style.color = "black"
        } 
    borderNav.style.borderBottom = "none"
    sliderNav.style.borderTop = "none"
    lightColor = true
  }
  

})