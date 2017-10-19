document.addEventListener('DOMContentLoaded', function(){
  // append images to divs to tie behaviour together
  textDiv = document.querySelector('.text-option-display');
  divTextOne = document.querySelector('#selection-one');
  divTextTwo = document.querySelector('#selection-two');
  divTextThree = document.querySelector('#selection-three');
  divTextFour = document.querySelector('#selection-four');

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
  // initial test
  function positionImages(){
    firstDiv.style.left = "10%";
    secondDiv.style.left = "30%";
    thirdDiv.style.left = "50%";
    fourthDiv.style.left = "70%";
  }
  positionImages();

  // toggle innerHTML on and off
  function showTextOne(){divTextOne.style.display = "block";}
  function showTextTwo(){divTextTwo.style.display = "block";}
  function showTextThree(){divTextThree.style.display = "block";}
  function showTextFour(){divTextFour.style.display = "block";}

  function removeTextOne(){divTextOne.style.display = "none";}
  function removeTextTwo(){divTextTwo.style.display = "none";}
  function removeTextThree(){divTextThree.style.display = "none";}
  function removeTextFour(){divTextFour.style.display = "none";}

  firstDiv.addEventListener('mouseover', showTextOne);
  secondDiv.addEventListener('mouseover', showTextTwo);
  thirdDiv.addEventListener('mouseover', showTextThree);
  fourthDiv.addEventListener('mouseover', showTextFour);

  firstDiv.addEventListener('mouseleave', removeTextOne);
  secondDiv.addEventListener('mouseleave', removeTextTwo);
  thirdDiv.addEventListener('mouseleave', removeTextThree);
  fourthDiv.addEventListener('mouseleave', removeTextFour);


  // addEventListener for clicking on divs - info div, move to next page...
  //switch/case function for each scenario
  function removeAllPreviousListeners(){
    firstDiv.removeEventListener('click', cloneSceneA);
    firstDiv.removeEventListener('mouseover', showTextOne);
    secondDiv.removeEventListener('click', cloneSceneB);
    secondDiv.removeEventListener('mouseover', showTextTwo);
    thirdDiv.removeEventListener('click', cloneSceneC);
    thirdDiv.removeEventListener('mouseover', showTextThree);
    fourthDiv.removeEventListener('click', cloneDScene);
    fourthDiv.removeEventListener('mouseover', showTextFour);
  }

  

  function cloneSceneA(e){
    var storyBoard = document.getElementById('board1');
    let clone = storyBoard.cloneNode(true);
    clone.id = "board2";
    document.body.appendChild(clone);
    removeAllPreviousListeners();
  }

  function cloneSceneB(e){
    var storyBoard = document.getElementById('board1');
    let clone = storyBoard.cloneNode(true);
    clone.id = "board2";
    document.body.appendChild(clone);
    removeAllPreviousListeners();
  }

  function cloneSceneC(e){
    var storyBoard = document.getElementById('board1');
    let clone = storyBoard.cloneNode(true);
    clone.id = "board2";
    document.body.appendChild(clone);
    removeAllPreviousListeners();
  }

  function cloneDScene(e){
    var storyBoard = document.getElementById('board1');
    let clone = storyBoard.cloneNode(true);
    clone.id = "board2";
    document.body.appendChild(clone);
    removeAllPreviousListeners();

  }

  firstDiv.addEventListener('click', cloneSceneA);
  secondDiv.addEventListener('click', cloneSceneB);
  thirdDiv.addEventListener('click', cloneSceneC);
  fourthDiv.addEventListener('click', cloneDScene);

})
