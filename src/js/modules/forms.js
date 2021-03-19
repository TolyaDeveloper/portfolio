const inputs = document.querySelectorAll('[data-focus]');

inputs.forEach((item) => {
  item.addEventListener('focus', (e) => {
    const target = e.currentTarget;

    target.nextElementSibling.classList.add('active');
  });
  item.addEventListener('blur', (e) => {
    const target = e.currentTarget;

    target.nextElementSibling.classList.remove('active');

    if (target.value.trim()) {
      target.nextElementSibling.classList.add('active');
    }
  });
});
