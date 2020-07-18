window.onscroll = function() {myFunction()};



// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

console.log(sticky);
// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    
  } else {
    header.classList.remove("sticky");
    
  }
}

// $(window).scroll(function(e){ 
//   var $el = $('.fixedElement'); 
//   var isPositionFixed = ($el.css('position') == 'fixed');
//   console.log($el,isPositionFixed,$(this).scrollTop());
//   if ($(this).scrollTop() > 200 && !isPositionFixed){ 
//     $el.css({'position': 'fixed', 'top': '0px'}); 
//   }
//   if ($(this).scrollTop() < 200 && isPositionFixed){
//     $el.css({'position': 'static', 'top': '0px'}); 
//   } 
// });

function openCity(cityName, elmnt,name) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(cityName).style.display = "block";
  var className = document.getElementsByClassName(name)
  var classNames = document.getElementsByClassName("tablinks")
  
  for (i = 0; i < classNames.length; i++) {
    
    classNames[i].style.borderBottom= "none";
  }

  for (i = 0; i < className.length; i++) {
    className[i].style.borderBottom= "2px solid grey";
  }

  // Add the specific color to the button used to open the tab content
  
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

