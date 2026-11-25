const ALARM_URL =
  "https://actions.google.com/sounds/v1/alarms/beep_short.ogg";


//this will get the elements created in index.html and elements created later in this program

const elements = {
  timerButton: document.getElementById("timerBtn"),
  timerSection: document.getElementById("timerSection"),
  minuteInput: document.getElementById("minuteInput"),
  startTimerButton: document.getElementById("startTimerBtn"),
  timerDisplay: document.getElementById("timerDisplay"),

  musicButton: document.getElementById("musicBtn"),
  musicSection: document.getElementById("musicSection"),
  lofiButton: document.getElementById("lofiBtn"),
  lofiPlayer: document.getElementById("lofiMusic"),
  whiteNoiseButton: document.getElementById("whiteNoiseBtn"),
  whiteNoisePlayer: document.getElementById("whiteNoise"),
  toDoButton: document.getElementById("toDoBtn"),
  toDoSection: document.getElementById("toDoSection"),
  addTaskBtn: document.getElementById("addTaskBtn"),
};

let timerId = null;
//this function will show the timer when the button is clicked
function showTimer() {
  elements.timerSection.style.display = "block";
}
//this function powers the timer and will play a sound when the timer is done
function startTimer() {
  const minutes = Number(elements.minuteInput.value);

  if (!Number.isFinite(minutes) || minutes <= 0) {
    elements.timerDisplay.textContent = "Enter a number greater than 0";
    return;
  }

  if (timerId !== null) {
    clearInterval(timerId);
  }

  let timeRemaining = minutes * 60 * 1000;
  const alarm = new Audio(ALARM_URL);

  elements.timerDisplay.textContent = timeRemaining / 1000;

  timerId = setInterval(() => {
    timeRemaining -= 1000;
    elements.timerDisplay.textContent = Math.max(0, timeRemaining / 1000);

    if (timeRemaining <= 0) {
      clearInterval(timerId);
      timerId = null;
      alarm.play();
    }
  }, 1000);
}
//this function will show the music section when clicked
function showMusic() {
  elements.musicSection.style.display = "block";
}
//this function grabs the Lofi Music from Youtube
function playLofi() {
  elements.lofiPlayer.src =
    "https://www.youtube.com/embed/JCKBaJDRMw4";
  elements.lofiPlayer.style.display = "block";
}
//this function grabs white noise from Youtube
function playWhiteNoise() {
  elements.whiteNoisePlayer.src =
    "https://www.youtube.com/embed/Og40mpl8VNc";
  elements.whiteNoisePlayer.style.display = "block";
}
//this function adds event listeners to the elements created
function setupEventListeners() {
  elements.timerButton.addEventListener("click", showTimer);
  elements.startTimerButton.addEventListener("click", startTimer);
  elements.musicButton.addEventListener("click", showMusic);
  elements.lofiButton.addEventListener("click", playLofi);
  elements.whiteNoiseButton.addEventListener("click", playWhiteNoise);
  elements.toDoButton.addEventListener("click", unhideToDoSection);
  elements.addTaskBtn.addEventListener("click", addToDoItem);
  
}
//this function will show the To Do List section when the button is clicked
function unhideToDoSection() {
  elements.toDoSection.style.display = "block";
}
//this function adds the listed to do item with a checkbox
function addToDoItem(){
  const listName = document.getElementById("taskInput").value;
  const listedtask = document.createElement("li");
  const taskList = document.getElementById("taskList");
  taskList.appendChild(listedtask);
  listedtask.textContent = listName;
  const checkbox = document.createElement("input"); 
  listedtask.appendChild(checkbox);

  
  checkbox.type = "checkbox";
}








setupEventListeners();
