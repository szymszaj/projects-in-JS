document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const startButton = document.getElementById("start");
    const resetButton = document.getElementById("reset");
    const pomodoroDurationInput = document.getElementById("pomodoro-duration");
    const settingsIcon = document.getElementById("settings-icon");
    const settingsPanel = document.getElementById("settings-panel");
    const applySettingsButton = document.getElementById("apply-settings");
    const clockColorInput = document.getElementById("clock-color");
    const taskNameInput = document.getElementById("task-name");
    const themeSelector = document.getElementById("theme-selector");
    const reportButton = document.getElementById("report-button");
    const reportContainer = document.getElementById("report-container");
    const reportTable = document.getElementById("report-table");
  
    reportButton.addEventListener("click", function () {
      // Po kliknięciu przycisku "Raporty", pokaż lub ukryj kontener raportów
      if (reportContainer.style.display === "none" || reportContainer.style.display === "") {
        reportContainer.style.display = "block";
      } else {
        reportContainer.style.display = "none";
      }
    });
  
    function addReport() {
      const pomodoroDuration = pomodoroDurationInput.value;
      const taskName = taskNameInput.value;
      const currentTime = getCurrentTime();
  
      const newRow = reportTable.querySelector("tbody").insertRow();
      const cell1 = newRow.insertCell(0);
      const cell2 = newRow.insertCell(1);
      const cell3 = newRow.insertCell(2);
  
      cell1.innerHTML = pomodoroDuration + " minutes";
      cell2.innerHTML = taskName;
      cell3.innerHTML = currentTime;
    }
  
    // Funkcja do pobierania aktualnego czasu
    function getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    }
  
    let timer;
    let timeInSeconds = parseInt(pomodoroDurationInput.value) * 60;
    let isRunning = false;
  
    function updateDisplay() {
      const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, "0");
      const seconds = (timeInSeconds % 60).toString().padStart(2, "0");
      display.textContent = `${minutes}:${seconds}`;
      display.style.color = clockColorInput.value;
    }
  
    function startTimer() {
      if (!isRunning) {
        isRunning = true;
        startButton.textContent = "Pause";
  
        timer = setInterval(function () {
          if (timeInSeconds <= 0) {
            clearInterval(timer);
            isRunning = false;
            startButton.textContent = "Start";
            alert("Pomodoro completed!");
            addReport(); // Dodaj raport po zakończeniu pomodoro
          } else {
            timeInSeconds--;
            updateDisplay();
          }
        }, 1000);
      } else {
        clearInterval(timer);
        isRunning = false;
        startButton.textContent = "Resume";
      }
    }
  
    function resetTimer() {
      clearInterval(timer);
      isRunning = false;
      startButton.textContent = "Start";
      timeInSeconds = parseInt(pomodoroDurationInput.value) * 60;
      updateDisplay();
    }
  
    //prawa strona
    function toggleSettingsPanel() {
      if (settingsPanel.style.right === "-300px") {
        settingsPanel.style.right = "0";
      } else {
        settingsPanel.style.right = "-300px";
      }
    }
  
    function applySettings() {
      timeInSeconds = parseInt(pomodoroDurationInput.value) * 60;
      updateDisplay();
      toggleSettingsPanel();
    }
  
    const slider = document.getElementById("theme-slider");
    const handle = document.querySelector(".slider-handle");
  
    function toggleTheme(theme) {
      const body = document.body;
      if (theme === "dark") {
        body.style.backgroundColor = "rgb(25, 27, 51)";
        handle.style.transform = "translateX(30px)";
      handle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
      body.style.backgroundColor = "#fff";
      handle.style.transform = "translateX(0)";
      handle.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  slider.addEventListener("click", () => {
    const body = document.body;
    const currentTheme = body.style.backgroundColor === "rgb(25, 27, 51)" ? "light" : "dark";
    toggleTheme(currentTheme);
  });

  startButton.addEventListener("click", startTimer);
  resetButton.addEventListener("click", resetTimer);
  settingsIcon.addEventListener("click", toggleSettingsPanel);
  applySettingsButton.addEventListener("click", applySettings);

  updateDisplay();

  // Tworzymy tabelę raportów
  const reportTable1 = document.createElement("table");
  reportTable1.className = "report-table";
  reportTable1.style.display = "none";

  function addReport() {
    const pomodoroDuration = pomodoroDurationInput.value;
    const taskName = taskNameInput.value;
    const currentTime = getCurrentTime();

    const newRow = reportTable.querySelector("tbody").insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.innerHTML = pomodoroDuration + " minutes";
    cell2.innerHTML = taskName;
    cell3.innerHTML = currentTime;
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  reportButton.addEventListener("click", function () {
    addReport();
    reportTable.style.display = "block";
  });

  const reportContainer1 = document.getElementById("report-container");
  reportContainer1.appendChild(reportTable);
});
