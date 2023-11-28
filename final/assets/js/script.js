// to do list
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

taskList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI' && !ev.target.classList.contains('edit-button')) {
        ev.target.classList.toggle('checked');

        if (ev.target.classList.contains('checked')) {
            setTimeout(function() {
                ev.target.style.display = 'none';
            }, 200); 
        } else {
            ev.target.style.display = 'block';
        }
    }

    if (ev.target.tagName === 'BUTTON' && ev.target.classList.contains('edit-button')) {
        var li = ev.target.parentNode;
        var taskText = li.querySelector('span');
        var newText = prompt("Edit task:", taskText.textContent);
        if (newText !== null) {
            taskText.textContent = newText;
        }
    }
}, false);

function addTask() {
    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        var taskText = document.createElement("span");
        taskText.textContent = taskInput.value;
        li.appendChild(taskText);

        var editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add('edit-button');
        li.appendChild(editButton);

        taskList.appendChild(li);
        taskInput.value = "";
    }
}

// toggle

function toggleTheme(){
    let bodyColorfulmode = document.body;
    bodyColorfulmode.classList.toggle("colorful-mode");
}

let colorfulBottom = document.getElementById("toggleButton");
colorfulBottom.onclick = toggleTheme;


// timer

let countdown;
let timerDisplay = document.getElementById('timerDisplay');
let timeInput = document.getElementById('timeInput');
let startButton = document.getElementById('startButton');

function startTimer() {
    clearInterval(countdown);

    let minutes = parseInt(timeInput.value);

    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid positive number for the duration.");
        return;
    }

    let seconds = minutes * 60;

    countdown = setInterval(function () {
        displayTime(seconds);
        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            alert("Time's up!");
            displayTime(0);
            startButton.disabled = false;
        }
    }, 1000);

    startButton.disabled = true;
}

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${String(minutes).padStart(2, '0')}:${String(remainderSeconds).padStart(2, '0')}`;
    timerDisplay.textContent = display;
}
