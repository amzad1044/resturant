
//Wow js
new WOW().init();

/*smooth scrolling*/
var TopOffset = 85;
$('a[data-smooth]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - TopOffset
          }, 1000);
          return false;
        }
      }
    });

/*Registration form validation*/
//First Name
function checkFirstName(){
	var fName 	= $('#firstName').val();
	var reg 	= /^([A-Za-z -.]{2,10})+$/;

	if(reg.test(fName))
	{
		$('#firstNameError').text(' ');
		return true;
	}
	else
	{
		$('#firstNameError').text('First name is not valid!');
		return false;
	}
}

$('#firstName').keyup(function(){
	checkFirstName();
});


//Last Name

function checkLastName(){
	var lName 	= $('#lastName').val();
	var reg 	= /^([A-Za-z -.]{2,10})+$/;

	if(reg.test(lName))
	{
		$('#lastNameError').text(' ');
		return true;
	}
	else
	{
		$('#lastNameError').text('Last name is not valid.');
		return false;
	}
}
$('#lastName').keyup(function(){
	checkLastName();
});

//password Validatoin
function checkPassword() {
    var password = $('#password').val();
    var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
    if(reg.test(password)){
        $('#passwordError').text(' ');
        return true;
    } else {
        $('#passwordError').text('Pasword is not valid.');
        return false;
    }
}

$('#password').keyup(function () {
   checkPassword();
});

//Show password
$('#showPassword').click(function(){
	var attr 	= $('#password').attr('type');
	if(attr == 'password')
	{
		$('#password').attr('type','text');
	}
	else
	{
		$('#password').attr('type','password');
	}
});

//confirm password
function checkConPassword(){
	var conPass 	= $('#conPassword').val();
	var password 	= $('#password').val();
	if(password == conPass)
	{
		$('#conPasswordError').text(' ');
		return true;
	}
	else
	{
		$('#conPasswordError').text('Password did not match.');
		return false;
	}
}

$('#conPassword').keyup(function(){
	checkConPassword();
});



//Email validation
function checkMail(){
	var mail= $('#mail').val();
	var reg = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if(reg.test(mail))
	{
		$('#mailError').text(' ');
		return true;
	}
	else
	{
		$('#mailError').text('Email must be valid');
		return false;
	}

}
$('#mail').keyup(function(){
	checkMail();
});

$('#form').submit(function(){
	if(checkFirstName()== true && checkLastName()==true &&
	  checkPassword()== true && checkConPassword()==true && checkMail()==true)
	{
		return true;
	} 
	else
	{
		return false;
	}
});

/*portfolio*/
/*portfolio*/
/*portfolio*/
/*portfolio*/
(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });

    $('.card').mouseenter(function(){

        $(this).find('.card-overlay').css({'top': '-100%'});
        $(this).find('.card-hover').css({'top':'0'});

    }).mouseleave(function(){

        $(this).find('.card-overlay').css({'top': '0'});
        $(this).find('.card-hover').css({'top':'100%'});

    });

})(jQuery);


/*To scroll Return top */
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
//Home user login
/*To scroll Return top */
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*End To scroll Return top */


/*Booking*/

$('select').niceSelect();

        // Date Picker
        jQuery('#datepicker').datetimepicker({
            timepicker:false,
            format:'d-m-Y',
        });

        // Time Picker
        jQuery('#datepicker2').datetimepicker({
            datepicker:false,
            format:'H:i'
        });




        /*------------------
		Brands Slider
	--------------------*/
	$('.brands-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		margin : 40,
		autoplay: true,
		responsive : {
			0 : {
				items: 2,
			},
			480 : {
				items: 3,
			},
			768 : {
				items: 5,
			}
		}
	});


