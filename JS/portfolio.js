//these functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//this function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex) ;

//this function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//this function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); //takes all elements in "mySlides" and stores them an in array
    var dots = document.getElementsByClassName("dot"); //taes all elements in "dot" and stores them in variable array
    if (n > slides.length) {slideIndex = 1}; //if n is greater than the length of array slideshow is set to 1
    if (n < 1) {slideIndex = slides.length}; //if n is less than 1 slideindex is set to length of array
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; //loop takes each item in array and sets display to none
    } 
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //for loop takes each item in array "dots" and removes active 
    }
    slides[slideIndex - 1].style.display = "block"; //displays images in slideshow
    dots[slideIndex - 1].className += " active"; // adds active styling to the dots associated w/ the image
}

//this code will create close the contact form when the user clicks off of it
//the first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event) {
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") &&
    !event.target.closest(".contact")) {
        closeForm()
    }
}, false)