console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", function(event) {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 500;
  canvasEl.height = 500;

  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);

  window.ctx = ctx;
});


import MovingObject from "./moving_objects.js";
// const MovingObject = require('./moving_objects.js')["MovingObject"];

window.MovingObject = MovingObject;
