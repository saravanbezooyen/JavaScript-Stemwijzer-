var currentSubject = 0;
var showOpinons = document.getElementById("showOpinons");
var choices = [];
var currentNr = 0;
var selectedPartiesArray = [];

window.onload = function(){	 
	changeContent();

	function addEventListenerToButtons(btnId, choice) { // remembers the choice by every question
		document.getElementById(btnId).addEventListener("click", function() {
			currentSubject++;
			changeContent();
			showOpinons.style.display = "none";
			choices[currentNr] = choice;			
			currentNr++;
		    console.log(choices);		
		});
	}

	addEventListenerToButtons("buttonEens", "pro");
	addEventListenerToButtons("buttonGeenVanBeide", "ambivalent");
	addEventListenerToButtons("buttonOneens", "contra");
	addEventListenerToButtons("buttonSkipQuestion", "");

	document.getElementById("buttonGoBack").addEventListener("click", function() { // if you go a question back
		if(currentSubject <! 0) {
			location.reload();				
		}
		currentSubject--;
		currentNr--;
		showOpinons.style.display = "none";
		changeContent();
	})
}

function startFunction() {
    var startButton = document.getElementById("buttonStart");
    var containerQuestion = document.getElementById("containerQuestion");
    if (containerQuestion.style.display === "block") {
        containerQuestion.style.display = "none";
    } 
    else {
        containerQuestion.style.display = "block";
        startButton.style.display = "none";
    }
}

function changeContent() { // change the questions
	if(currentSubject >= subjects.length) {
		selectParties();
	}
	else {
		document.getElementById("questionTitle").innerHTML = subjects[currentSubject].title;
		document.getElementById("questionText").innerHTML = subjects[currentSubject].statement;
		document.getElementById("myCheck").checked = false;
	}
}

function partiesOpinion() { // sorts the party opinion by the correct position
    if (showOpinons.style.display === "block") {
        showOpinons.style.display = "none";
    } 
    else {
        showOpinons.style.display = "block";
    }

	for(var i = 0; i < subjects[currentSubject].parties.length; i++) {
		if (subjects[currentSubject].parties[i].position === 'pro') {
			var eensPara = document.createElement("p");
			var eensOpinon = document.createTextNode(subjects[currentSubject].parties[i].name);
			var explanationEens = document.createTextNode(subjects[currentSubject].parties[i].explanation);
			eensPara.appendChild(eensOpinon,explanationEens);

			var elementEens = document.getElementById("opinonInnerEens");
			elementEens.appendChild(eensPara);
			elementEens.appendChild(explanationEens);
		} 
		else {
			if (subjects[currentSubject].parties[i].position == 'ambivalent'){
				var geenVanBeidePara = document.createElement("p");
				var geenVanBeideOpinon = document.createTextNode(subjects[currentSubject].parties[i].name);
				var explanationGeenVanBeide = document.createTextNode(subjects[currentSubject].parties[i].explanation);
				geenVanBeidePara.appendChild(geenVanBeideOpinon,explanationGeenVanBeide);

				var elementGeenVanBeide = document.getElementById("opinonInnerGeenVanBeide");
				elementGeenVanBeide.appendChild(geenVanBeidePara);
				elementGeenVanBeide.appendChild(explanationGeenVanBeide);
			} 
			else {
				if (subjects[currentSubject].parties[i].position === 'contra') {
					var oneensPara = document.createElement("p");
					var oneensOpinon = document.createTextNode(subjects[currentSubject].parties[i].name);
					var explanationOneens = document.createTextNode(subjects[currentSubject].parties[i].explanation);
					oneensPara.appendChild(oneensOpinon,explanationOneens);

					var elementOneens = document.getElementById("opinonInnerOneens");
					elementOneens.appendChild(oneensPara);
					elementOneens.appendChild(explanationOneens);
				}
			}
		}
	}	
}

function selectParties() {  // select the parties before seeing the results
	removeElement('buttonEens');
	removeElement('buttonGeenVanBeide');
	removeElement('buttonOneens');
	removeElement('showOpinons');
	removeElement('headerPartiesOpinion');
	removeElement('questionText');
	removeElement('myCheck');
	removeElement('checkboxQuestion');
	removeElement("buttonSkipQuestion");
	removeElement("buttonGoBack");
	
	document.getElementById("questionTitle").innerHTML = 'Kies je partijen'; // change title

	var buttonSelectBigParties = document.getElementById("buttonSelectBigParties");
    var buttonResults = document.getElementById("buttonResults");
    if (buttonResults.style.display === "block") {
        buttonResults.style.display = "none";
        buttonSelectBigParties.style.display = "none";
    } 
    else {
        buttonResults.style.display = "block";
        buttonSelectBigParties.style.display = "block";
    }

	for (var i = 0; i < parties.length; i++) { // create checkboxes
		var div = document.createElement('div');
		div.innerHTML = '<input type="checkbox" id="' + parties[i].name + '"/>' + ' '+ parties[i].name;

		var containerQuestion = document.getElementById("containerQuestion");
		containerQuestion.appendChild(div);

		document.getElementById(parties[i].name).onclick = function(event) { // check if party name is the same as id name and add property to object
			var finalParty = parties.find(function findParty(party){
				return party.name == event.target.getAttribute('id');
			});

		    if (document.getElementById(parties[i].name).checked) { // check if checkbox is checked or not
		    	finalParty.isChecked = true;
		    } else {
		    	finalParty.isChecked = false;
		    }
		}
	}
}

function calculateScores() {
	for (var partyNr in parties){
		parties[partyNr].result = 0;
	}

	// looping through the made choices
	for (var i = 0; i < choices.length; i++) {
		var currentSubject = subjects[i];
		// length of the parties
		var numberOfParties = currentSubject.parties.length;
		var currentChoice = choices[i];

		// looping through the parties
		for (var partyNr = 0; partyNr < numberOfParties; partyNr++) {
			var currentParty = currentSubject.parties[partyNr];

			// is het standpunt van de huidige partij gelijk aan de ingevoerde keuze die bij het standpunt hoort?
			if (currentParty.position === currentChoice) {

				// zoek de partij waar ik nu mee bezig ben in de array van partijen waar ik de score in ga bijhouden
				var finalParty = parties.find(function findParty(party){
					return party.name == currentParty.name;
				});

				// hoog de sore met 1 op voor definalParty.result partij
				finalParty.result++;
			} 	
		}
	}

	parties.sort(function(party1, party2){
		return party2.result - party1.result;
	});
}

function renderResults() {
	document.getElementById("questionTitle").innerHTML = 'Resultaten';

	for (var i = 0; i < parties.length; i++) {
		if(parties[i].isChecked = true) {
			console.log('succes');
			var partiesResultsPara = document.createElement("div");
			var partiesName = document.createTextNode(parties[i].name + ' = ' + parties[i].result);
			partiesResultsPara.appendChild(partiesName);

			var containerQuestion = document.getElementById("containerQuestion");
			containerQuestion.appendChild(partiesResultsPara);
		}
	}
}

function results(){
	calculateScores();
	renderResults();
}


function removeElement(btnId) {
    var elem = document.getElementById(btnId);
    elem.parentNode.removeChild(elem);
    return false;
}

function selectAllBigParties() {
	for (var i = 0; i < parties.length; i++) {		
		if (parties[i].size > 9) {
			document.getElementById(parties[i].name).checked = true;
			var bigParty = {name: parties[i].name, result: 0};
			selectedPartiesArray.push(bigParty);
		}
	}

	console.dir(selectedPartiesArray);
}
