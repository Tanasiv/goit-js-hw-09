const formData = { email: '', message: '' };
const form = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';

// Відновлення
const savedFormData = localStorage.getItem(FEEDBACK_FORM_STATE);
if (savedFormData) {
  const parsedFormData = JSON.parse(savedFormData);

  formData.email = parsedFormData.email || '';
  formData.message = parsedFormData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// input
form.addEventListener('input', (e) => {
  if (e.target.name === 'email' || e.target.name === 'message') {
    formData[e.target.name] = e.target.value.trim();

    localStorage.setItem(
      FEEDBACK_FORM_STATE,
      JSON.stringify(formData)
    );
  }
});

// submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(FEEDBACK_FORM_STATE);

  formData.email = '';
  formData.message = '';

  form.reset();
});