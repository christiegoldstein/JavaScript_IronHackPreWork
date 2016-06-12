var user = {};
var responses = [];

function question1() {
  var name = prompt('What is your name?');
  user.name = name;
}

question1();

function question2() {
	var firstQuestion = prompt('Command+Shift+J is a shortcut to get to the Google Chrome Console if you have a Mac.');

	if(firstQuestion.toLowerCase() === 'yes'){
		firstQuestion = true;
	}
	else if(firstQuestion.toLowerCase() === 'no'){
		firstQuestion = false; 
	}
	else{
		//throw an error until answer is either yes or no
		alert('Please answer: yes or no');
		return question2();     //to repeat the question
	}

	//add response to array 
	responses.push(firstQuestion);
}

question2();

function question3() {
  var secondQuestion = prompt('What was the original name for JavaScript: Java, LiveScript, JavaLive, or ScriptyScript?');
  secondQuestion = secondQuestion.toLowerCase();
  switch (secondQuestion) {
    case "java":
    	secondQuestion = false;
    	break;
    case "livescript":
    	secondQuestion = true;
    	break;
    case "javalive":
   		secondQuestion = false;
   		break;
   	case "scriptyscript":
   		secondQuestion = false;
   		break;
   	default:
   		secondQuestion = false;
  }
  responses.push(secondQuestion);
}

question3();

function question4(){
	var thirdQuestion = prompt('Is coding fun?');

	if(thirdQuestion.toLowerCase() === 'yes'){
		thirdQuestion = true;
	}
	else if(thirdQuestion.toLowerCase() === 'no'){
		thirdQuestion = false; 
	}
	else{
		//throw an error until answer is either yes or no
		alert('Please answer: yes or no');
		return question4();     //to repeat the question
	}
	responses.push(thirdQuestion);
}

question4();

function question5() {
  var fourthQuestion = prompt('Where in Florida is IronHack located: Gainesville, Ocala, Tampa, Miami?');
  fourthQuestion = fourthQuestion.toLowerCase();
  switch (fourthQuestion) {
    case "gainesville":
    	fourthQuestion = false;
    	break;
    case "ocala":
    	fourthQuestion = false;
    	break;
    case "tampa":
   		fourthQuestion = false;
   		break;
   	case "miami":
   		fourthQuestion = true;
   		break;
   	default:
   		fourthQuestion = false;
  }
  responses.push(fourthQuestion);
}
question5();

console.log(responses);
evaluate(responses);

function evaluate(responsesArray) {
	console.log(responsesArray);

	// declare two variables to store the totals
	var t_total = 0;
	var f_total = 0;

	// populate the “totals” variables from the “responsesArray”
	for(var i = 0; i < responsesArray.length; i ++){
		if(responsesArray[i] === true){
			t_total++;
		}
		if(responsesArray[i] === false){
			f_total++;
		}
	}

	console.log(t_total);



	// save the “totals” variables inside the user object
	user.total_true = t_total;
	user.total_false = f_total;

	// call showResults
	showResults();
}

function showResults() {

	// display the user results
	console.log(user);

}
