'use strict';

(function () {
  function load(url, onLoad, onError) {
    var xhr = createXhr(url, 'GET', onLoad, onError);
    xhr.send();
  }

  function save(data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = createXhr(URL, 'POST', onLoad, onError);
    xhr.send(data);
  }

  function createXhr(URL, type, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open(type, URL);

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    return xhr;
  }

  window.backend = {
    load: load,
    save: save
  };
})();
