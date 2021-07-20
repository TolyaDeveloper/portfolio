const inputs = document.querySelectorAll('[data-focus]');
const form = document.querySelector('.form');
const formPacman = document.querySelector('.pacman--form');
const formSuccess = document.querySelector('.form__success');

inputs.forEach((item) => {
  item.addEventListener('focus', (e) => {
    const target = e.currentTarget;

    target.previousElementSibling.classList.add('active');
  });
  item.addEventListener('blur', (e) => {
    const target = e.currentTarget;

    target.previousElementSibling.classList.remove('active');

    if (target.value.trim()) {
      target.previousElementSibling.classList.add('active');
    }
  });
});

const sendData = async (e) => {
  e.preventDefault();

  formPacman.style.display = 'block';

  const response = await fetch('mail.php', {
    method: 'POST',
    body: new FormData(form),
  });

  if (response.ok) {
    formPacman.style.display = 'none';
    formSuccess.style.display = 'block';
    setTimeout(() => (formSuccess.style.display = 'none'), 5000);
    form.reset();
  } else {
    console.error('Error');
  }
};

form.addEventListener('submit', sendData);
