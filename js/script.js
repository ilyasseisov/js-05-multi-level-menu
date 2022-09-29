// Variables
const mainMenu = document.querySelector('.main-menu');
const settingsMenu = document.querySelector('.settings-menu');
const helpMenu = document.querySelector('.help-menu');

const settingsPrivacyBtn = document.querySelector('#setting-privacy');
const helpSupportBtn = document.querySelector('#help-support');
const backBtnFromSettings = document.querySelector('#back-btn-from-settings');
const backBtnFromHelp = document.querySelector('#back-btn-from-help');

// Functions

const addClass = (className, element) => {
  element.classList.add(className);
};
const removeClass = (className, element) => {
  element.classList.remove(className);
};
const removeClassDelayed = (className, element, delay) => {
  setTimeout(() => {
    removeClass(className, element);
  }, delay);
};

const goToSettings = () => {
  removeClass('show', mainMenu);
  addClass('show', settingsMenu);
  addClass('slideLeftToZero', settingsMenu);
  removeClassDelayed('slideLeftToZero', settingsMenu, 500);
};

const goToHelp = () => {
  removeClass('show', mainMenu);
  addClass('show', helpMenu);
  addClass('slideLeftToZero', helpMenu);
  removeClassDelayed('slideLeftToZero', helpMenu, 500);
};

const goFromSettings = () => {
  removeClass('show', settingsMenu);
  addClass('show', mainMenu);
  addClass('slideRightToZero', mainMenu);
  removeClassDelayed('slideRightToZero', mainMenu, 500);
};

const goFromHelp = () => {
  removeClass('show', helpMenu);
  addClass('show', mainMenu);
  addClass('slideRightToZero', mainMenu);
  removeClassDelayed('slideRightToZero', mainMenu, 500);
};

// Event Listeners
settingsPrivacyBtn.addEventListener('click', goToSettings);
helpSupportBtn.addEventListener('click', goToHelp);
backBtnFromSettings.addEventListener('click', goFromSettings);
backBtnFromHelp.addEventListener('click', goFromHelp);
