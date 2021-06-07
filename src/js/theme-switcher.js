const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switcher = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

switcher.addEventListener('change', onSwitcherChange);

function updateWindow() {
  if (localStorage.getItem('Theme') === Theme.DARK) {
    switcher.checked = true;
  } else {
    switcher.checked = false;
  }
}

function onSwitcherChange() {
  if (!switcher.checked) {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);
  } else {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);
  }
}

updateWindow();
onSwitcherChange();
