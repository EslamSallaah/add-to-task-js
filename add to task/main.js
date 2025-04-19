function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    // Toggle complete on click
    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });
  
    // Delete on right-click
    li.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      li.remove();
    });
  
    document.getElementById('taskList').appendChild(li);
    taskInput.value='';
  }