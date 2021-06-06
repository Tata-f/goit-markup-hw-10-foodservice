const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

switcher.addEventListener('change', onSwitcherChange);

function onSwitcherChange() {
  body.classList.toggle(Theme.DARK);

  if (body.classList.contains(Theme.DARK)) {
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('Theme') === Theme.DARK) {
  body.classList.add(Theme.DARK);
  switcher.setAttribute('checked', 'checked');
}
