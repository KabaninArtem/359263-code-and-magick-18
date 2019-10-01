'use strict';

var DEFAULT_DIALOG_POSITION = {
  top: '80px',
  left: '50%',
};

function openSetup() {
  setup.style.top = DEFAULT_DIALOG_POSITION.top;
  setup.style.left = DEFAULT_DIALOG_POSITION.left;
  setup.classList.remove('hidden');
}

function closeSetup() {
  setup.classList.add('hidden');
}

var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var setupClose = document.querySelector('.setup-close');
var setup = document.querySelector('.setup');
var userName = document.querySelector('.setup-user-name');
var similar = document.querySelector('.setup-similar');

setupOpen.addEventListener('click', openSetup);
setupOpenIcon.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, openSetup);
});
setupClose.addEventListener('click', closeSetup);
setupClose.addEventListener('keydown', function (evt) {
  window.util.isEnterEvent(evt, closeSetup);
});

userName.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});
document.addEventListener('keydown', function (evt) {
  window.util.isEscEvent(evt, closeSetup);
});
similar.classList.remove('hidden');
