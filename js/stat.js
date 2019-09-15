'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP = 10;
var BAR_GAP = 50;
var FONT_SIZE = 16;
var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
var PLAYER_NAME = 'Вы';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000000';
  ctx.font = FONT_SIZE + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderText(ctx, 'Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2);
  renderText(ctx, 'Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP * 2 + FONT_SIZE);

  for (var i = 0; i < names.length; i++) {
    var currentBarHeight = (BAR_HEIGHT * times[i]) / maxTime;
    var barColor = names[i] === PLAYER_NAME ? PLAYER_COLOR : 'hsl(240, 100%, ' + Math.floor(Math.random() * 100) + '%)';

    renderText(ctx, Math.floor(times[i]) + '', CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + GAP * 2, CLOUD_Y + GAP * 3 + FONT_SIZE * 2 + BAR_HEIGHT - currentBarHeight);
    ctx.fillStyle = barColor;
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + GAP * 2, CLOUD_Y + GAP * 3 + FONT_SIZE * 3 + BAR_HEIGHT - currentBarHeight, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    renderText(ctx, names[i], CLOUD_X + (BAR_WIDTH + BAR_GAP) * i + GAP * 2, CLOUD_Y + GAP * 3 + FONT_SIZE * 3 + BAR_HEIGHT + GAP);
  }
};
