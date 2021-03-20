const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add('loaded');
  document.body.classList.remove('no-scroll');
});
