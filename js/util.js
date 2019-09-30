'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

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
    changeInputValue: function (inputName, inputValue) {
      var input = document.querySelector('input[name=' + inputName + ']');
      input.value = inputValue;
    },
    changeColor: function (elem, colors, property) {
      var color = this.getRandomFromArray(colors);
      elem.style[property] = color;

      return color;
    }
  };
})();
