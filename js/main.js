function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + '  ' + lastName; //spabe between the quotes will privide a space between the first and last name. Necessary 

	$('h2'). text('hello ' +  fullName);

	var userAge = prompt('How old are you?');

	userAge = parseInt(userAge); 

	if (userAge >= 18) {
		console.log('User is an adult.');
	} else if (userAge >= 13) {
		console.log('User is a teenager.');
	} else {
		console.log('User is a child.');
	}



	if (firstName === 'General' && lastName != 'Assembly') {
		console.log('Hello General.');
	}


	var faveColour = prompt('What is your favourite colour?').toLowerCase();

	if (faveColour =='red' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {

		$('h2').css('color', faveColour);
	}
}


/*this is a comment*/ // this is also a comment//
/*alert($).js */

// when the page loads//

$(function() { 

	$('img').on('click', askQuestions);

//so the computer knows to load JQUERY by using the $ sign//
	//hide the sections//
	$('h3').next().hide();

	//when the user clocks an h3 heading//
	$('h3').on('click', function() {

		//show or hide the nest element//
		$(this) .next() .slideToggle(400); //refers to the particular heading the user clicks on//
	})
}); //sublime text will underline the corresponding bracked if you hover cursor over it- allows you to see if you have crossed brackets and check mistakes//
