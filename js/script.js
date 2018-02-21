var currentSubject = 0;
var showOpinons = document.getElementById("showOpinons");
var choices = [];
var currentNr = 0;
var bigPartiesArray = [];

window.onload = function(){	 
	changeContent();

	function addEventListenerToButtons(btnId, choice) {
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

	document.getElementById("buttonGoBack").addEventListener("click", function() {
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

function changeContent() {
	if(currentSubject >= subjects.length) {
		selectParties();
	}
	else {
		document.getElementById("questionTitle").innerHTML = subjects[currentSubject].title;
		document.getElementById("questionText").innerHTML = subjects[currentSubject].statement;
		document.getElementById("myCheck").checked = false;
	}
}

function partiesOpinion() {
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

function selectParties() {
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
	
	document.getElementById("questionTitle").innerHTML = 'Kies je partijen';

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

	for (var i = 0; i < parties.length; i++) {
		var div = document.createElement('div');
		div.innerHTML = '<input type="checkbox" id="' + parties[i].name + '"/>' + ' '+ parties[i].name;

		var containerQuestion = document.getElementById("containerQuestion");
		containerQuestion.appendChild(div);

		document.getElementById(parties[i].name).onclick = function(event) {
		    if (this.checked) {
		    	var bigParty = {name: event.target.getAttribute('id'), result: 0};
				bigPartiesArray.push(bigParty);
				console.dir(bigPartiesArray);
		    } else {
		    	if (this.checked = false) {
		    		var index = array.indexOf(event.target.getAttribute('id'));
					    array.splice(index, 1);
					 	console.dir(bigPartiesArray);

		    	}
		    }
		}
	}
}

/*function OnChangeCheckbox (checkbox) {
 	for (var i = 0; i < parties.length; i++) {
	    if (checkbox.checked) {
	    	var bigParty = {name: parties[i].name, result: 0};
			bigPartiesArray.push(bigParty);
		}
	}
	console.dir(bigPartiesArray);
}*/



function results(){
	var array = [];

	/*for (i = 0; i < parties.length; i++) {
        if (document.getElementById(parties[i].name).checked) {
            array.push(parties[i].name);
            console.log('test');
        }
    }*/

	for (var i = 0; i < parties.length; i++) {
		removeElement(parties[i].name);
	}


	for (var partyNr in parties){
		parties[partyNr].result = 0;
	}

	var partyName = '';
	function findParty(party){
		return parties.name === partyName;
	}
	 
	document.getElementById("questionTitle").innerHTML = 'Resultaten';

	for (var i = 0; i < choices.length; i++) {
		var currentSubject = subjects[i];
		var numberOfParties = currentSubject.parties.length;
		var currentChoice = choices[i];

		for (var partyNr = 0; partyNr < numberOfParties; partyNr++) {
			var currentParty = currentSubject.parties[partyNr];

			if (currentParty.position === currentChoice) {
				partyName = parties.name;
				var finalParty = parties.find(findParty);
				finalParty.result++;
				bigPartiesArray.push(parties[partyNr].result);

				bigPartiesArray.sort(function(a, b){
					return b - a
				});
			} 	
		}
	}
	console.log(bigPartiesArray);

	for (var i = 0; i < bigPartiesArray.length; i++) {
		var partiesResultsPara = document.createElement("div");
		var partiesName = document.createTextNode(bigPartiesArray[i].name + ' = ' + bigPartiesArray[i].result);
		partiesResultsPara.appendChild(partiesName);
		partiesResultsPara.className += partyName;

		var containerQuestion = document.getElementById("containerQuestion");
		containerQuestion.appendChild(partiesResultsPara);
	}
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
			bigPartiesArray.push(bigParty);
		}
	}

	console.dir(bigPartiesArray);
}