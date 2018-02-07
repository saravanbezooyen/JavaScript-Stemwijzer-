var currentSubject = 0;
var showOpinons = document.getElementById("showOpinons");

window.onload = function(){	 
	console.log("window.onload:init");
	changeContent();

	document.getElementById("buttonEens").addEventListener("click", function() {
		currentSubject++;
		changeContent();
		showOpinons.style.display = "none";
	});

	document.getElementById("buttonGeenVanBeide").addEventListener("click", function() {
		currentSubject++;
		changeContent();
		showOpinons.style.display = "none";
	})

	document.getElementById("buttonOneens").addEventListener("click", function() {
		currentSubject++;
		changeContent();
		showOpinons.style.display = "none";
	})

	document.getElementById("buttonSkipQuestion").addEventListener("click", function() {
		currentSubject++;
		changeContent();
		showOpinons.style.display = "none";
	})

	document.getElementById("buttonGoBack").addEventListener("click", function() {
		if(currentSubject <! 0) {
			location.reload();				
		}
		currentSubject--;
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
		if (subjects[currentSubject].parties[i].position == 'pro') {
			document.getElementById("eensOpinon").innerHTML = subjects[currentSubject].parties[i].name;
				document.getElementById("eensExplanation").innerHTML = subjects[currentSubject].parties[i].explanation;
			} 
		else {
			if (subjects[currentSubject].parties[i].position == 'ambivalent'){
				document.getElementById("geenVanBeideOpinon").innerHTML = subjects[currentSubject].parties[i].name ;
				document.getElementById("iconOnClick").addEventListener("click", function() {
					document.getElementById("geenVanBeideExplanation").innerHTML = subjects[currentSubject].parties[i].explanation;
				})
			} 
			else {
				if (subjects[currentSubject].parties[i].position == 'contra') {
					document.getElementById("oneensOpinon").innerHTML = subjects[currentSubject].parties[i].name;
					document.getElementById("iconOnClick").addEventListener("click", function() {
						document.getElementById("oneensExplanation").innerHTML = subjects[currentSubject].parties[i].explanation;
					})
				}
			}
		}
	}
}
