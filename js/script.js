var currentSubject = 0;
var showOpinons = document.getElementById("showOpinons");
var choices = [];
var currentNr = 0;

window.onload = function(){	 
	changeContent();

	function addEventListenerToButtons(btnId, choice) {
		document.getElementById(btnId).addEventListener("click", function() {
			currentSubject++;
			changeContent();
			showOpinons.style.display = "none";
			choices[currentNr] = choice;
			
			currentNr++;

			/*var x = document.getElementById("myCheck").checked;
		    if (x == true) {
		    	finalParty.result++;	    	
		    }	*/
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
	}

	


	/*var x = document.getElementById("checkboxParties").checked;
    if (x == true) {
    	parties = partiesArray[i];	    	
    }	*/

}

function results(){
	

	var array = [];

	for (i = 0; i < parties.length; i++) {
        if (document.getElementById(parties[i].name).checked) {
            array[i].push(parties[i].name);
            console.log('test');
        }
    }

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
				array[partyNr].push(parties[partyNr].result);

				function compare(a,b) {
				  if (b.result < a.result)
				    return -1;
				  if (b.result > a.result)
				    return 1;
				  return 0;
				}

				array.sort(compare);
			} 	
		}
	}
	console.log(array);

	for (var i = 0; i < array.length; i++) {
		var partiesResultsPara = document.createElement("div");
		var partiesName = document.createTextNode(array[i]);
		partiesResultsPara.appendChild(partiesName);
		partiesResultsPara.className += " partyName";

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
		}
	}
}