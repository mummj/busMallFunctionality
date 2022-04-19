'use strict'
//Varibles pulled from my HTML

const picContainerElement = document.getElementById('centerContent');
const firstPicElement = document.getElementById('imgContainer1');
const secondPicElement = document.getElementById('imgContainer2');
const thridPicElement = document.getElementById('imgContainer3');
const firstPicTitle = document.getElementById('img1title');
const secondPicTitle = document.getElementById('img2title');
const thirdPicTitle = document.getElementById('img3title');

//constructor function
function Image(name, imgPath,){
  this.name = name;
  this.imgPath = imgPath;
  this.clicks = 0;
  this.views = 0;
}

Image.allImages = [];

Image.allImages.push(new Image('Banana', './images/banana.jpg'));
Image.allImages.push(new Image('Bathroom', './images/bathroom.jpg'));
Image.allImages.push(new Image('Boots', './images/boots.jpg'));
Image.allImages.push(new Image('Breakfast', './images/breakfast.jpg'));
Image.allImages.push(new Image('Bubblegum', './images/bubblegum.jpg'));
Image.allImages.push(new Image('Chair', './images/chair.jpg'));
Image.allImages.push(new Image('Cthulhu', './images/cthulhu.jpg'));
Image.allImages.push(new Image('Dog-duck', './images/dog-duck.jpg'));
Image.allImages.push(new Image('Dragon', './images/dragon.jpg'));
Image.allImages.push(new Image('Pen', './images/pen.jpg'));
Image.allImages.push(new Image('Pet-sweep', './images/pet-sweep.jpg'));
Image.allImages.push(new Image('Scissors', './images/scissors.jpg'));
Image.allImages.push(new Image('Shark', './images/shark.jpg'));
Image.allImages.push(new Image('Sweep', './images/sweep.png'));
Image.allImages.push(new Image('Tauntaun', './images/tauntaun.jpg'));
Image.allImages.push(new Image('Unicorn', './images/unicorn.jpg'));
Image.allImages.push(new Image('Water-can', './images/water-can.jpg'));
Image.allImages.push(new Image('Wine-glass', './images/wine-glass.jpg'));

console.log(Image.allImages);