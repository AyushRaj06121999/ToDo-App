async function addTask() {
  const task = document.getElementById('taskInput').value;
  await fetch('http://backend:5000/tasks', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ task })
  });
  loadTasks();
}

async function loadTasks() {
  const res = await fetch('http://backend:5000/tasks');
  const tasks = await res.json();
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t.task;
    list.appendChild(li);
  });
}

loadTasks();
