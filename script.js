document.addEventListener("DOMContentLoaded", () => {
    const taskTitleInput = document.getElementById("task-title");
    const taskDateInput = document.getElementById("task-date");
    const taskTimeInput = document.getElementById("task-time");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskDisplay = document.getElementById("task-display");
    const scheduledTasksSection = document.getElementById("scheduled-tasks-section");
    const scheduledTasksList = scheduledTasksSection.querySelector(".tasks");
    const settingsBtn = document.getElementById("settings-btn");
    const settingsSection = document.getElementById("settings-section");
    const tasksSection = document.getElementById("tasks-section");
  
    // Function to add a task
    const addTask = () => {
      const taskTitle = taskTitleInput.value.trim();
      const taskDate = taskDateInput.value;
      const taskTime = taskTimeInput.value;
  
      if (taskTitle && taskDate && taskTime) {
        // Add task to the main task list
        const taskElement = document.createElement("li");
        taskElement.innerHTML = `<i class='fas fa-tasks'></i> ${taskTitle} <span>${taskDate} - ${taskTime}</span>`;
        taskDisplay.appendChild(taskElement);
  
        // Add task to the Scheduled Tasks sidebar
        const sidebarTask = document.createElement("div");
        sidebarTask.className = "task";
        sidebarTask.innerHTML = `
          <span class="task-title"><i class="fas fa-tasks"></i> ${taskTitle}</span>
          <span class="task-time">${taskDate} - ${taskTime}</span>`;
        scheduledTasksList.appendChild(sidebarTask);
  
        // Clear the input fields
        taskTitleInput.value = "";
        taskDateInput.value = "";
        taskTimeInput.value = "";
      } else {
        alert("Please fill out all fields to add a task.");
      }
    };
  
    // Add Task Button Event
    addTaskBtn.addEventListener("click", addTask);
  
    // Toggle Settings Section
    settingsBtn.addEventListener("click", () => {
      tasksSection.classList.add("hidden");
      settingsSection.classList.remove("hidden");
    });
  
    document.querySelector(".back-to-tasks").addEventListener("click", () => {
      settingsSection.classList.add("hidden");
      tasksSection.classList.remove("hidden");
    });
  
    // Dropdown Change Event
    document.getElementById("country-select").addEventListener("change", (event) => {
      alert(`Country changed to: ${event.target.value}`);
    });
  
    document.getElementById("language-select").addEventListener("change", (event) => {
      alert(`Language changed to: ${event.target.value}`);
    });
  });
  