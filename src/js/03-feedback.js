import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.elements[0];
const messageTextarea = feedbackForm.elements[1];
const LOCALSTORAGE_KEY = 'feedback-form-state';

function changeForm() {
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

const submitForm = event => {
  event.preventDefault();
  if (validateForm()) {
    const {
      elements: { email, message },
    } = event.currentTarget;
    const formObjectData = {
      email: email.value,
      message: message.value,
    };
    console.log(formObjectData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    emailInput.value = '';
    messageTextarea.value = '';
  }
};

function validateForm() {
  const emailValue = emailInput.value.trim(); // Remove leading and trailing spaces
  const messageValue = messageTextarea.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Proszę wypełnić wszystkie pola formularza.');
    return false; // Prevent form submission
  }

  return true; // Allow form submission
}

loadFormState();

const throttledSaveFormState = throttle(changeForm, 500);

emailInput.addEventListener('input', throttledSaveFormState);
messageTextarea.addEventListener('input', throttledSaveFormState);
feedbackForm.addEventListener('submit', submitForm);
