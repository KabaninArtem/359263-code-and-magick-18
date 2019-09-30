'use strict';

(function () {
  var DATA = {
    names: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
    secondNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
    coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColors: ['black', 'red', 'blue', 'yellow', 'green'],
    fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
  };
  var QUANTITY = 4;

  function generateMock(length, mockDataSet) {
    var wizards = [];
    for (var i = 0; i < length; i++) {
      var mock = {
        name: window.util.getRandomFromArray(mockDataSet.names) + ' ' + window.util.getRandomFromArray(mockDataSet.secondNames),
        coatColor: window.util.getRandomFromArray(mockDataSet.coatColors),
        eyeColor: window.util.getRandomFromArray(mockDataSet.eyesColors),
      };
      wizards.push(mock);
    }

    return wizards;
  }

  window.mock = {
    data: DATA,
    mocks: generateMock(QUANTITY, DATA)
  };
})();
