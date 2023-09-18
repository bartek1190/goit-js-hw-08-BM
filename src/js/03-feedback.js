import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

function saveFormState() {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function loadFormState() {
  const formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (formData) {
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
}

function clearFormState() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
  emailInput.value = '';
  messageTextarea.value = '';
}

emailInput.addEventListener('input', saveFormState);
messageTextarea.addEventListener('input', saveFormState);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  clearFormState();
  console.log('Formularz został wysłany. Dane wyczyszczone.');
});

loadFormState();

const throttledSaveFormState = throttle(saveFormState, 500);

emailInput.addEventListener('input', throttledSaveFormState);
messageTextarea.addEventListener('input', throttledSaveFormState);
