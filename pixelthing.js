'use strict';

const PALLET_PIXEL_CLASS = 'pallet-pixel';
const CANVAS_PIXEL_CLASS = 'canvas-pixel';

window.onload = function run() {
  makePallet(undefined, 20);
  makeCanvas(20, 20, 20);
  // alert('im a thing');
};

var brushColor = '';

function makePallet(myColors, pixels = 10) {

  var newDiv = '';
  if (myColors === undefined) {
    var myColors = [
      "aqua", "black", "blue", "fuchsia",
      "gray", "green", "lime",
      "maroon", "navy", "olive", "purple",
      "red", "teal", "yellow"
    ];
  }

  var pallet = document.getElementById('pallet');

  for (let i = 0; i < myColors.length; i++) {
    newDiv = document.createElement('div');
    newDiv.style.height = pixels + 'px';
    newDiv.style.width = pixels + 'px';
    newDiv.style.backgroundColor = myColors[i];
    newDiv.className = 'pallet-pixel';
    pallet.appendChild(newDiv);
  }

  let twoThirdsWidth = Math.floor(2 * window.innerWidth / 3);
  pallet.style.width = Math.min(twoThirdsWidth, myColors.length * (pixels + 2)) + 'px';

  pallet.addEventListener('click', setBrushColorHandler);
}

function makeCanvas(height = 10, width = 10, pixels = 20) {

  var canvas = document.getElementById('container');

  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      var canvasDiv = document.createElement('div');

      canvasDiv.style.height = pixels + 'px';
      canvasDiv.style.width = pixels + 'px';
      canvasDiv.className = 'canvas-pixel';

      canvas.appendChild(canvasDiv);
    }
  }
  canvas.style.width = ((width) * (pixels + 2)) + 'px';
  canvas.style.height = ((height) * (pixels + 2)) + 'px';
  canvas.addEventListener('click', setBackgroundColorHandler);

}

function setBackgroundColorHandler(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  event.target.style.borderColor = brushColor;
  event.target.style.backgroundColor = brushColor;
}

function setBrushColorHandler(event) {
  if (event.target === event.currentTarget) {
    return;
  }
  brushColor = event.target.style.backgroundColor
}

$('')
