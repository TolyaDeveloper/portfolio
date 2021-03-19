const sidenav = document.querySelector('.sidenav');
const burger = document.querySelector('.hamburger');
const closeSidenavBtn = sidenav.querySelector('.close-sidenav');

const closeSidenav = (selector) => {
  selector.classList.remove('active');
  document.body.classList.remove('no-scroll');
};

const openSidenav = (selector) => {
  selector.classList.add('active');
  document.body.classList.add('no-scroll');
};

burger.addEventListener('click', () => {
  openSidenav(sidenav);
});

closeSidenavBtn.addEventListener('click', () => {
  closeSidenav(sidenav);
});

window.addEventListener('keyup', (e) => {
  if (e.code === 'Escape' && sidenav.matches('.active')) {
    closeSidenav(sidenav);
  }
});

sidenav.addEventListener('click', (e) => {
  if (
    e.target.matches('.sidenav__overlay') ||
    e.target.matches('.menu__link')
  ) {
    closeSidenav(sidenav);
  }
});
