import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

// Deklaruj obiekt z właściwościami "email" i "message"
let formData = {
  email: '',
  message: '',
};

function saveFormState() {
  formData.email = emailInput.value;
  formData.message = messageTextarea.value;

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function loadFormState() {
  const savedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedData) {
    formData = savedData;
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

function clearFormState() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {
    email: '',
    message: '',
  };
  emailInput.value = '';
  messageTextarea.value = '';
}

function validateForm() {
  const emailValue = formData.email.trim();
  const messageValue = formData.message.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Proszę wypełnić wszystkie pola formularza.');
    return false;
  }

  return true;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (validateForm()) {
    clearFormState();
    console.log('Formularz został wysłany. Dane wyczyszczone.');
  }
});

loadFormState();

const throttledSaveFormState = throttle(saveFormState, 500);

emailInput.addEventListener('input', throttledSaveFormState);
messageTextarea.addEventListener('input', throttledSaveFormState);
