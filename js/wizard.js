'use strict';

// Wizards generation
(function () {
  function createWizards() {
    var mocks = window.mock.mocks;
    var fragment = document.createDocumentFragment();
    for (var i = 0, len = mocks.length; i < len; i++) {
      var wizardProfile = createWizard(mocks[i]);
      fragment.appendChild(wizardProfile);
    }
    return fragment;
  }

  function createWizard(mockData) {
    var wizardTemplate = document.querySelector('#similar-wizard-template');
    var element = wizardTemplate.cloneNode(true).content;
    var name = element.querySelector('.setup-similar-label');
    var coat = element.querySelector('.wizard-coat');
    var eyes = element.querySelector('.wizard-eyes');
    name.textContent = mockData.name;
    coat.style.fill = mockData.coatColor;
    eyes.style.fill = mockData.eyeColor;
    return element;
  }

  function renderWizards() {
    var wizardsListElem = document.querySelector('.setup-similar-list');
    var wizards = createWizards();
    wizardsListElem.appendChild(wizards);
  }

  renderWizards();
})();

// Wizard customization
(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var coat = setupWizard.querySelector('.wizard-coat');
  var eyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  function changeWizardSetting(elem, colors, styleProperty, inputName) {
    var color = window.util.changeColor(elem, colors, styleProperty);
    window.util.changeInputValue(inputName, color);
  }

  coat.addEventListener('click', function () {
    changeWizardSetting(coat, window.mock.data.coatColors, 'fill', 'coat-color');
  });

  eyes.addEventListener('click', function () {
    changeWizardSetting(eyes, window.mock.data.eyesColors, 'fill', 'eyes-color');
  });

  fireball.addEventListener('click', function () {
    changeWizardSetting(fireball, window.mock.data.fireballColors, 'background', 'fireball-color');
  });
})();
