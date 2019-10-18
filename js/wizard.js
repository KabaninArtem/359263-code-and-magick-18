'use strict';

// Wizards generation
(function () {
  var loadWizards = window.backend.load;
  var getRandomArray = window.util.getRandomArray;
  var errorHandler = window.util.makeError;
  var WIZARDS_GET_URL = 'https://js.dump.academy/code-and-magick/data';

  function successHandler(wizards) {
    var fragment = document.createDocumentFragment();
    var wizardsSmall = getRandomArray(wizards);
    wizardsSmall.length = 4;
    for (var i = 0, len = wizardsSmall.length; i < len; i++) {
      var wizardProfile = createWizard(wizardsSmall[i]);
      fragment.appendChild(wizardProfile);
    }
    renderWizards(fragment);
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

  function renderWizards(wizards) {
    var wizardsListElem = document.querySelector('.setup-similar-list');
    wizardsListElem.appendChild(wizards);
  }

  loadWizards(WIZARDS_GET_URL, successHandler, errorHandler);
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
