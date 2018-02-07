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

	addEventListenerToButtons("buttonEens", "eens");
	addEventListenerToButtons("buttonGeenVanBeide", "Geen van beide");
	addEventListenerToButtons("buttonOneens", "Oneens");
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
	document.getElementById("questionTitle").innerHTML = subjects[currentSubject].title;
	document.getElementById("questionText").innerHTML = subjects[currentSubject].statement;
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
			if (subjects[currentSubject].parties[i].position === 'ambivalent'){
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