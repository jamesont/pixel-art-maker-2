'use strict';

window.onload = function run() {
  makePallet(undefined, 20);
  makeCanvas(20, 20, 20);
  // alert('im a thing');
};

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

  for (let i = 0; i < myColors.length; i++) {
    var pallet = document.getElementById('pallet');

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
  var canvas = document.getElementById('canvas');

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      var newDiv = document.createElement('div');

      newDiv.style.height = pixels + 'px';
      newDiv.style.width = pixels + 'px';
      newDiv.className = 'canvas-pixel';
      container.appendChild(newDiv);
    }
  }

}

function errorHandler() {
  if (event.target === event.currentTarget) {
    return;
  }
  brushColor = event.target.style.backgroundColor;
}

function setBrushColorHandler(event) {
  // Never set the brush color to the pallets bg color
  if (event.target === event.currentTarget) {
    return;
  }
  brushColor = event.target.style.backgroundColor;
}
