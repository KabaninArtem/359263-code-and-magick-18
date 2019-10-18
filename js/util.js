'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  function generateRandomValue(max, min) {
    min = min || 0;
    return Math.floor(min + Math.random() * (max - min));
  }

  window.util = {
    isEscEvent: function isEscEvent(evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function isEnterEvent(evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomFromArray: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    getRandomArray: function (array) {
      return array.slice(0, generateRandomValue(array.length));
    },
    changeInputValue: function (inputName, inputValue) {
      var input = document.querySelector('input[name=' + inputName + ']');
      input.value = inputValue;
    },
    changeColor: function (elem, colors, property) {
      var color = this.getRandomFromArray(colors);
      elem.style[property] = color;

      return color;
    },
    makeError: function (errorMessage) {
      var node = document.createElement('div');
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
      node.style.position = 'absolute';
      node.style.left = 0;
      node.style.right = 0;
      node.style.fontSize = '30px';

      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    }
  };
})();
