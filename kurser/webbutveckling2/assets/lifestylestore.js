
/*===checkout button function===*/

function checkout_button(){
	if (window.confirm("This function doesn't work yet. Do you want to proceed to checkoutpage?")){
		window.location.href="checkout.html"
	}
}


/*===smooth scroll to destination anchor===*/

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
});

/*===When clicking add to cart on product===*/

function add_product(){
	alert("have to work this one out for a while");
	
	
	
}

/*===Form validation===*/

function validate_form(){
	//Collecting value from ID element
	var firstName= document.getElementById("firstName").value;
	var lastName= document.getElementById("lastName").value;
	var email = document.getElementById("formEmail").value;
	var phone = document.getElementById("phonenumber").value;
	var message = document.getElementById("message").value;
	
	
	//If the first name doesn't contain any characters
	if (firstName.length == 0){
		alert("You have to add a first name");
		return false;
		}
	//if last name doesn't contain any characters
	if (lastName.length == 0){
		alert("You have to add a last name")
		
		return false;
	}
	//Checking if email contains correct characters
	var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    var isValid = pattern.test(email);
    if (isValid == false){
        alert("You have to add an valid email adress")
        return false;
    }
	
	
	//If phonenumber is a number
	var phoneNumb = isNaN(document.getElementById("phonenumber").value);
	if (phoneNumb == true){
		alert("You need to use numbers in your phonenumber");
	}
	
	//Checking if there is written anything in the message
	if (message.length == 0){
		alert("you need to write a message for us to read.")
	}
	
	else{
		window.open("thankyou.html");
	}
}

/*=== When fulfilling a purchase ===*/

function purchase(){
	alert("Sorry, this doesn't work yet");
}

function book(){
	alert("Sorry, this doesn't work yet");
}


var currentPage = document.location.href.substring(document.location.href.lastIndexOf("/")+1, document.location.href.length);

if (currentPage == "index.html"){

/*===Slideshows on travel===*/
"use strict";

var i = 0; //startindex travel images Whistler
var x = 0; //Startindex travel images Davos
var z = 0; //Startindex travel images St Anton
var y = 0; //Startindex travel images Zermatt
var imagesWhistler = [];
var imagesDavos = [];
var imagesAnton = [];
var imagesZermatt = [];

var time = 5000; //Time to change image 

//List of images
imagesWhistler[0] = "files/travel/whistler/whistler1.jpg";
imagesWhistler[1] = "files/travel/whistler/whistler2.jpg";
imagesWhistler[2] = "files/travel/whistler/whistler3.jpg";
imagesWhistler[3] = "files/travel/whistler/whistler4.jpg";

imagesDavos[0] = "files/travel/davos/davos1.jpg";
imagesDavos[1] = "files/travel/davos/davos2.jpg";
imagesDavos[2] = "files/travel/davos/davos3.jpg";
imagesDavos[3] = "files/travel/davos/davos4.jpg";

imagesAnton[0] = "files/travel/anton/stanton1.jpg";
imagesAnton[1] = "files/travel/anton/stanton2.jpg";
imagesAnton[2] = "files/travel/anton/stanton3.jpg";
imagesAnton[3] = "files/travel/anton/stanton4.jpg";

imagesZermatt[0] = "files/travel/zermatt/zermatt1.jpg";
imagesZermatt[1] = "files/travel/zermatt/zermatt2.jpg";
imagesZermatt[2] = "files/travel/zermatt/zermatt3.jpg";
imagesZermatt[3] = "files/travel/zermatt/zermatt4.jpg";


//Function to auto change images
//For whistler images
function travelImg_1() {
	document.travel1.src = imagesWhistler[i];
	
	if(i < imagesWhistler.length - 1){
		i++;
	}
	else {
		i = 0;
	}
	
	setTimeout("travelImg_1()", time);
	
}
//For Davos images
function travelImg_2() {
	document.travel2.src = imagesDavos[i];
	
	if(x < imagesDavos.length - 1){
		x++;
	}
	else {
		x = 0;
	}
	
	setTimeout("travelImg_2()", time);
}
//For St Anton images
function travelImg_3() {
	document.travel3.src = imagesAnton[i];
	
	if(y < imagesAnton.length - 1){
		y++;
	}
	else {
		y = 0;
	}
	
	setTimeout("travelImg_3()", time);	
	
}
//For Zermatt images
function travelImg_4() {
	document.travel4.src = imagesZermatt[i];
	
	if(z < imagesZermatt.length - 1){
		z++;
	}
	else {
		z = 0;
	}
	
	setTimeout("travelImg_4()", time);		
	
}

/* Creating a collection function to load on start */
function start(){
	travelImg_1();
	travelImg_2();
	travelImg_3();
	travelImg_4();
}
window.onload = start;


/*==== Function for back to top button===*/

// When the user scrolls down 20px from the top of the document, show the button

window.addEventListener('scroll', scrollFunction);
//window.addEventListener('scroll', stickyNavigation);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
}
// When the user clicks on the button, scroll to the top of the document


function topFunction() {
    document.body.scrollTop = 0
	document.documentElement.scrollTop = 0;
}


//sticky navigation bar on scroll

/*


var navbar = document.getElementById("navigation");
var sticky = navbar.offsetTop;

if (typeof sticky !== 'undefined'){
	sticky = 30;
}

function stickyNavigation() {
	
	if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
*/