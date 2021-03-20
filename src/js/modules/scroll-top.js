const scrollBtn = document.querySelector('.scroll-top');
const root = document.documentElement;

window.addEventListener('scroll', () => {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollBtn.classList.add('active');
  } else {
    scrollBtn.classList.remove('active');
  }
});

scrollBtn.addEventListener('click', () => {
  root.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
