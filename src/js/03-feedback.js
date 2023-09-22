import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const checkStorage = localStorage.getItem(LOCALSTORAGE_KEY);
if (checkStorage) {
  formData = JSON.parse(checkStorage);
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

const throttledSave = throttle(data => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}, 500);

function saveFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  throttledSave(formData);
}
feedbackForm.addEventListener('input', saveFormData);

const submitForm = eventSent => {
  eventSent.preventDefault();
  const {
    elements: { email, message },
  } = eventSent.currentTarget;
  const formObjectData = {
    email: email.value,
    message: message.value,
  };
  console.log(formObjectData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  formData = {
    email: '',
    message: '',
  };
  feedbackForm.reset();
};
feedbackForm.addEventListener('submit', submitForm);
