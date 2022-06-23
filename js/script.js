const mainMenu = document.querySelector('.main-menu');
const settingsMenu = document.querySelector('.settings-menu');
const helpMenu = document.querySelector('.help-menu');

const settingsPrivacyBtn = document.querySelector('#setting-privacy');
const helpSupportBtn = document.querySelector('#help-support');
const backBtnFromSettings = document.querySelector('#back-btn-from-settings');
const backBtnFromHelp = document.querySelector('#back-btn-from-help');

settingsPrivacyBtn.addEventListener('click', () => {
  mainMenu.classList.remove('show');
  settingsMenu.classList.add('show', 'slideLeftToZero');
  setTimeout(() => {
    settingsMenu.classList.remove('slideLeftToZero');
  }, 500);
});
helpSupportBtn.addEventListener('click', () => {
  mainMenu.classList.remove('show');
  helpMenu.classList.add('show', 'slideLeftToZero');
  setTimeout(() => {
    helpMenu.classList.remove('slideLeftToZero');
  }, 500);
});

backBtnFromSettings.addEventListener('click', () => {
  settingsMenu.classList.remove('show');
  mainMenu.classList.add('show', 'slideRightToZero');

  setTimeout(() => {
    mainMenu.classList.remove('slideRightToZero');
  }, 500);
});
backBtnFromHelp.addEventListener('click', () => {
  helpMenu.classList.remove('show');
  mainMenu.classList.add('show', 'slideRightToZero');

  setTimeout(() => {
    mainMenu.classList.remove('slideRightToZero');
  }, 500);
});
