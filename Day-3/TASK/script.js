document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const errorMsg = document.getElementById('error-msg');
  
    addBtn.addEventListener('click', addTodo);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });
  
    function addTodo() {
      const task = input.value.trim();
      if (task === '') {
        errorMsg.textContent = 'Please enter a valid task.';
        return;
      }
  
      errorMsg.textContent = '';
  
      const li = document.createElement('li');
      li.textContent = task;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', () => {
        todoList.removeChild(li);
      });
  
      li.appendChild(removeBtn);
      todoList.appendChild(li);
  
      input.value = '';
    }
  });