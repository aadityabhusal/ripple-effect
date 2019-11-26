// Declaring the rippleEffect element(the element for the effect) and the rippleCircle
var rippleEffect = document.getElementsByClassName('rippleEffect');
var mouseInCircle = document.getElementsByClassName('mouseIn');

// This function adds the mouseOut class to the circle 
// and removes the circle after 0.2 seconds
function mouseOut(){
  if(mouseInCircle[0]){ mouseInCircle[0].classList.add('mouseOut');}
  window.setTimeout(function(){ 
    while(mouseInCircle[0]){
      mouseInCircle[0].remove();
    }
  },200);
}

// Getting all the elements containing rippleEffect class
for(var i = 0; i < rippleEffect.length; i++){
  // Checking if the element has 'mouseClick' or 'mouseHover' secondary class
  if(rippleEffect[i].classList.contains('mouseClick')){
    var actionIn = 'mousedown';
    rippleEffect[i].addEventListener('mouseup', mouseOut);
  }else{
    var actionIn = 'mouseenter';
  }
  // Event Listener is added to every rippleEffect element depending upon their secondary class
  rippleEffect[i].addEventListener(actionIn, function(e){
    // Creating a div and giving the id 'rippleCircle'
    circle = document.createElement('div');
    circle.id = 'rippleCircle';
    // Storing the position of the curson in x and y variables
    var x = e.pageX;
    var y = e.pageY;
    // Radius of the circle is 85% of the width of the rippleEffect Element
    var radius = (85/100)*this.offsetWidth;
    // Giving the height, width, top and left value to the circle
    circle.style.width = radius + "px";
    circle.style.height = radius + "px";
    circle.style.top = y - (this.offsetTop + radius/2) + "px";
    circle.style.left = x - (this.offsetLeft + radius/2) + "px";
    // Setting a TimeOut when adding the class 'mouseIn' to the circle
    // so that the transition can work
    setTimeout(function(){
      circle.classList.add('mouseIn');
    },1);
    // Appending the circle to the rippleElement
    this.appendChild(circle);
  });
  // mouseOut function will be called when the mouse pointer is out of the element
  rippleEffect[i].addEventListener('mouseleave', mouseOut);
}