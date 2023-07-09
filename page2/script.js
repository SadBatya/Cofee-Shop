const filterBox = document.querySelectorAll('.menu__card');
const filterButtonsItem = document.querySelector('.buttons');
const buttons = filterButtonsItem.querySelectorAll('li');

filterButtonsItem.addEventListener('click', (event) => {
  if (event.target.tagName !== 'LI') return false;

  buttons.forEach((btn) => {
    btn.style.opacity = 0.6;
  });

  event.target.style.opacity = 1;

  let filterClass = event.target.dataset['f'];
  filterBox.forEach((elem) => {
    elem.classList.remove('hide');
    if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
      elem.classList.add('hide');
    }
  });
});
