'use strict';

let col1;
let col2;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
  noStroke();
  col1 = color(59, 59, 59);
  col2 = color(300, 59, 59)
}

function draw() {
  fill(col1);
  rect(10, 10, 100, 100);
  fill(col2);
  colorMode(RGB);
  rect(700, 10, 100, 100);
  fill(lerpColor(col1, col2, 0.25));
  rect(lerp(10, 700, 0.25), 10, 100, 100);
  fill(lerpColor(col1, col2, 0.5));
  rect(lerp(10, 700, 0.5), 10, 100, 100);
  fill(lerpColor(col1, col2, 0.75));
  rect(lerp(10, 700, 0.75), 10, 100, 100);
  colorMode(HSB);

  fill(col1);
  rect(10, 120, 100, 100);
  fill(col2);
  rect(700, 120, 100, 100);
  fill(lerpColor(col1, col2, 0.25));
  rect(lerp(10, 700, 0.25), 120, 100, 100);
  fill(lerpColor(col1, col2, 0.5));
  rect(lerp(10, 700, 0.5), 120, 100, 100);
  fill(lerpColor(col1, col2, 0.75));
  rect(lerp(10, 700, 0.75), 120, 100, 100);
}
