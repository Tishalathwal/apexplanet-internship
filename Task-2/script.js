const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMsg = document.getElementById('successMsg');

// Email format validation using regex
function isValidEmail(email) {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

// Form submit event
contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  // Clear previous errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  let isValid = true;

  // Check name field
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Check email field
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Check message field
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message is required.';
    isValid = false;
  }

  // If all fields are valid, show success message
  if (isValid) {
    successMsg.textContent = '✅ Form submitted successfully! Thank you.';
    contactForm.reset(); // Clear the form
  }
});


// ===== DYNAMIC TO-DO LIST =====

const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const todoError = document.getElementById('todoError');

// Add task when button is clicked
addBtn.addEventListener('click', function () {
  const taskText = todoInput.value.trim();

  // Clear previous error
  todoError.textContent = '';

  // Validate input - don't add empty tasks
  if (taskText === '') {
    todoError.textContent = 'Please enter a task before adding.';
    return;
  }

  // Create new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Delete the task when delete button is clicked
  deleteBtn.addEventListener('click', function () {
    todoList.removeChild(li);
  });

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Append list item to the to-do list
  todoList.appendChild(li);

  // Clear input field
  todoInput.value = '';
  todoInput.focus();
});

// Also allow adding tasks by pressing Enter key
todoInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});