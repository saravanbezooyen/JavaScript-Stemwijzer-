function startFunction() {
    var startButton = document.getElementById("buttonStart");
    var containerQuestion = document.getElementById("containerQuestion");
    if (containerQuestion.style.display === "none") {
        containerQuestion.style.display = "block";
    } else {
        containerQuestion.style.display = "none";
    }
}