function start() {
  selectOptionMenu();
}
//this funciton creates a menu to select options
function selectOptionMenu() {
  document.getElementById("timerBtn").addEventListener("click", function () {
    document.getElementById("timerSection").style.display = "block";
  });

  // Clicking the start button actually runs the time
  document.getElementById("startTimerBtn").addEventListener("click", function () {
    var inputMinutes = document.getElementById("minuteInput").value;
    var timeRemaining = parseFloat(inputMinutes) * 60 * 1000;
    var audio = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");
    var timerId = setInterval(() => {
      timeRemaining -= 1000;
      var secondsLeft = timeRemaining / 1000;

      document.getElementById("timerDisplay").innerText = secondsLeft;
      if (timeRemaining <= 0) {
        clearInterval(timerId);
        audio.play();

      }
    }, 1000);
  });

  document.getElementById("musicBtn").addEventListener("click", function () {
    document.getElementById("musicSection").style.display = "block";
    playMusic();
  });



}

function playMusic() {
  setupMusic();
}

function setupMusic() {
  document.getElementById("lofiBtn").addEventListener("click", function () {
    document.getElementById("lofiMusic").src = "https://www.youtube.com/embed/JCKBaJDRMw4";
    document.getElementById("lofiMusic").style.display = "block";
  });

  document.getElementById("whiteNoiseBtn").addEventListener("click", function () {
    document.getElementById("whiteNoise").src = "https://www.youtube.com/embed/Og40mpl8VNc";
    document.getElementById("whiteNoise").style.display = "block";
  });
}



















// Run the app once at the very bottom
start();
