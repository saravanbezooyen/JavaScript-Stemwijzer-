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
			console.log(choices);
			currentNr++;
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
		results();
	}
	else {
		document.getElementById("questionTitle").innerHTML = subjects[currentSubject].title;
		document.getElementById("questionText").innerHTML = subjects[currentSubject].statement;
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

			/*if (eensExplanation.style.display === "none") {
		        eensExplanation.style.display = "block";
		    } 
		    else {
		        eensExplanation.style.display = "none";
		    }*/
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


				/*if (document.getElementById("geenVanBeideExplanation").style.display === "none") {
		        document.getElementById("geenVanBeideExplanation").style.display = "block";
			    } 
			    else {
			        document.getElementById("geenVanBeideExplanation").style.display = "none";
			    }*/
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

					//document.getElementById("oneensOpinon").innerHTML = subjects[currentSubject].parties[i].name;

					/*if (document.getElementById("oneensExplanation").style.display === "none") {
				        document.getElementById("oneensExplanation").style.display = "block";
				    } 
				    else {
				        document.getElementById("oneensExplanation").style.display = "none";
				    }*/
				}
			}
		}
	}
	
}

function results(){
	removeElement('buttonEens');
	removeElement('buttonGeenVanBeide');
	removeElement('buttonOneens');
	removeElement('buttonSkipQuestion');
	removeElement('showOpinons');
	removeElement('headerPartiesOpinion');
	removeElement('questionText');

	 
	document.getElementById("questionTitle").innerHTML = 'Resultaten';

	// loop door de choices
	var finalResults = [];
	var count = 0;


	for (var i = 0; i < choices.length; i++) {
		if (subjects[i].parties[i].position == choices[i]) {
			finalResults[i] = parties[i].name + count;
			count++;
		}

	}
		// haal het juist subject op (subject op dezelfde positie in array als positie van de choice in de array)
		// loop door de parties uit het opgehaalde subject
			// als antwoord overeenkomt, tel 1 op bij resultaat van die partij in de results array


	/*for(var j = 0; j <= parties.length; j++) {
		for(var i = 0; choices[i] == subjects[i].parties[j].position; i++){
			var partiesResultsPara = document.createElement("p");
			var partiesName = document.createTextNode(parties[j].name);
			partiesResultsPara.appendChild(partiesName);

			var containerQuestion = document.getElementById("containerQuestion");
			containerQuestion.appendChild(partiesResultsPara);
		}
	}*/

	

}

function removeElement(btnId) {
    var elem = document.getElementById(btnId);
    elem.parentNode.removeChild(elem);
    return false;
}