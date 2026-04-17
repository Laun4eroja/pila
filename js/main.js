const offset = 1000;
const scrollUp = document.querySelector('.scroll-top');
const getTop = () => window.pageYOset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-top--show');
  } else {
    scrollUp.classList.remove('scroll-top--show');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});