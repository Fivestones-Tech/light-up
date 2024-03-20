  const menuBtn = document.querySelector('#open-icon');
  const closeBtn = document.querySelector('#close-icon');
  const menu = document.querySelector('.nav-links .links');


  menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
  });

  closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
});


const swiper = new Swiper('.swiper', {
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});