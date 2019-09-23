'use strict';

var setup = document.querySelector('.setup');
var similar = document.querySelector('.setup-similar');
var MOCK_DATA = {
  names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyeColors: ['black', 'red', 'blue', 'yellow', 'green'],
};
var MOCK_QUANTITY = 4;
var mocks = generateMock(MOCK_QUANTITY, MOCK_DATA);

function getRandomElemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateMock(length, mockDataSet) {
  var wizards = [];
  for (var i = 0; i < length; i++) {
    var mock = {
      name: getRandomElemFromArray(mockDataSet.names) + ' ' + getRandomElemFromArray(mockDataSet.secondNames),
      coatColor: getRandomElemFromArray(mockDataSet.coatColors),
      eyeColor: getRandomElemFromArray(mockDataSet.eyeColors),
    };
    wizards.push(mock);
  }

  return wizards;
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

function renderWizard(mocksList) {
  var wizardsList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0, len = mocksList.length; i < len; i++) {
    var wizardProfile = createWizard(mocksList[i]);
    fragment.appendChild(wizardProfile);
  }
  wizardsList.appendChild(fragment);
}

setup.classList.remove('hidden');
similar.classList.remove('hidden');
renderWizard(mocks);
