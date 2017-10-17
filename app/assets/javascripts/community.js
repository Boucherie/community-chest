document.addEventListener('DOMContentLoaded', function(){

  firstDiv = document.getElementById('container1');
  firstImage = document.getElementById('first-image');
  firstDiv.append(firstImage);

  secondDiv = document.getElementById('container2');
  secondImage = document.getElementById('second-image');
  secondDiv.append(secondImage);

  thirdDiv = document.getElementById('container3');
  thirdImage = document.getElementById('third-image');
  thirdDiv.append(thirdImage);

  fourthDiv = document.getElementById('container4');
  fourthImage = document.getElementById('fourth-image');
  fourthDiv.append(fourthImage);


  function positionImages(){
    firstDiv.style.left = "10%";
    secondDiv.style.left = "30%";
    thirdDiv.style.left = "50%";
    fourthDiv.style.left = "70%";
  }
// addEventListener for clicking on divs - info div, move to next page...
//switch/case function for each scenario

  positionImages();
})
