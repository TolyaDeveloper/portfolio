const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const t = e.currentTarget.getAttribute('href');

    document.querySelector(t).scrollIntoView({
      block: 'start',
      behaviour: 'smooth',
    });
  });
});
