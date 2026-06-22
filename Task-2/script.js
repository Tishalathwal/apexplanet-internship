const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;

  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  if (email.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!email.value.includes('@') || !email.value.includes('.')) {
    emailError.textContent = 'Please enter a valid email.';
    isValid = false;
  }

  if (message.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  if (isValid) {
    successMsg.textContent = 'Form submitted successfully!';
    form.reset();
  }
});

// to-do list

const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoError = document.getElementById('todoError');

addBtn.addEventListener('click', function () {
  const taskText = todoInput.value.trim();
  todoError.textContent = '';

  if (taskText === '') {
    todoError.textContent = 'Please enter a task.';
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  todoInput.value = '';
});

todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});