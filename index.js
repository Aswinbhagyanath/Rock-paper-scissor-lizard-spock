var score = document.querySelector(".score h1").innerHTML;


// while(score>0&&score<25){
// Selecting a picture and displaying it and a random picture by the machine
var noOfPictures = document.querySelectorAll(".pictures").length;
for (i = 0; i < noOfPictures; i++) {
  // Displaying you picked
  document.querySelectorAll(".pictures")[i].addEventListener("click", play);

  function play() {
    document.querySelector(".pentagondiv").classList.add("hide","display");
    document.querySelectorAll(".circle")[0].classList.add("view");
    document.querySelector(".aaa p").classList.add("view");
    var randomnumber = Math.floor(Math.random() * 5);
    var randompic = document.querySelectorAll(".playobjects img")[randomnumber];
    this.classList.remove("pictures");
    var clickedpic = this.classList;
    var background = this.style.background;
    document.querySelector(".aaa img").setAttribute("src", "images/icon-" + clickedpic + ".svg");
    document.querySelector(".aaa img").classList.add("pickedpictures");
    document.querySelector(".aaa img").classList.add(clickedpic + "-background");
    // Displaying the house picked
    if (randompic.classList.contains("pictures")) {
      randompic.classList.remove("pictures");
    }

    var housepic = randompic.classList;

    document.querySelector(".bbb img").setAttribute("src", "images/icon-" + housepic + ".svg");
    document.querySelector(".bbb img").classList.add("pickedpictures");
    document.querySelector(".bbb img").classList.add(housepic + "-background");
    document.querySelectorAll(".circle")[1].classList.add("view");
    document.querySelector(".bbb p").classList.add("view");
    document.querySelector(".bbb p").classList.add("view");

    result(clickedpic, housepic);
    // Score check

  }

}

// function

function result(clickedpic, housepic) {

  if (clickedpic == "lizard") {
    if (housepic == "rock" || housepic == "scissors") {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "YOU LOSE";
      document.querySelector(".bbb").classList.remove("hide","display");
      score--;
      document.querySelector(".score h1").innerHTML=score;
      if(score===0){
        document.querySelector(".winorlose button").classList.add("hide");
        document.querySelector(".winorlose h1").classList.add("hide",);
        document.querySelector(".truimph").style.display="none";
        document.querySelector(".screen").classList.add("blur", "freeze");
        document.querySelector(".truimphorlose").classList.remove("hide","display");
      }
    },150  );
    } else if (housepic == "spock" || housepic == "paper") {setTimeout(function(){
        document.querySelector(".winorlose").classList.remove("hide","display");
        document.querySelector(".winorlose h1").innerHTML = "YOU WIN";
        document.querySelector(".aaa").classList.remove("hide","display");
        score++;
        document.querySelector(".score h1").innerHTML=score;
        if(score===25){
          document.querySelector(".winorlose button").classList.add("hide",);
          document.querySelector(".winorlose h1").classList.add("hide",);
          document.querySelector(".lose").style.display="none";
          document.querySelector(".screen").classList.add("blur", "freeze");
          document.querySelector(".truimphorlose").classList.remove("hide","display");
        }
      },150  );
    } else {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "IT'S A TIE";
    },150  );
    }
  } else if (clickedpic == "spock") {
    if (housepic == "lizard" || housepic == "paper") {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "YOU LOSE";
      document.querySelector(".bbb").classList.remove("hide","display");
      score--;
      document.querySelector(".score h1").innerHTML=score;
      if(score===0){
        document.querySelector(".winorlose button").classList.add("hide");
        document.querySelector(".winorlose h1").classList.add("hide",);
        document.querySelector(".truimph").style.display="none";
        document.querySelector(".screen").classList.add("blur", "freeze");
        document.querySelector(".truimphorlose").classList.remove("hide","display");
      }
    },150  );
    } else if (housepic == "scissors" || housepic == "rock") {setTimeout(function(){
        document.querySelector(".winorlose").classList.remove("hide","display");
        document.querySelector(".winorlose h1").innerHTML = "YOU WIN";
        document.querySelector(".aaa").classList.remove("hide","display");
        score++;
        document.querySelector(".score h1").innerHTML=score;
        if(score===25){
          document.querySelector(".winorlose button").classList.add("hide",);
          document.querySelector(".winorlose h1").classList.add("hide",);
          document.querySelector(".lose").style.display="none";
          document.querySelector(".screen").classList.add("blur", "freeze");
          document.querySelector(".truimphorlose").classList.remove("hide","display");
        }
      },150  );

    } else {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "IT'S A TIE";
    },150  );
    }
  } else if (clickedpic == "rock") {
    if (housepic == "paper" || housepic == "spock") {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "YOU LOSE";
      document.querySelector(".bbb").classList.remove("hide","display");
      score--;
      document.querySelector(".score h1").innerHTML=score;
      if(score===0){
        document.querySelector(".winorlose button").classList.add("hide");
        document.querySelector(".winorlose h1").classList.add("hide",);
        document.querySelector(".truimph").style.display="none";
        document.querySelector(".screen").classList.add("blur", "freeze");
        document.querySelector(".truimphorlose").classList.remove("hide","display");
      }
    },150 );

    } else if (housepic == "lizard" || housepic == "scissors") {setTimeout(function(){
        document.querySelector(".winorlose").classList.remove("hide","display");
        document.querySelector(".winorlose h1").innerHTML = "YOU WIN";
        document.querySelector(".aaa").classList.remove("hide","display");
        score++;
        document.querySelector(".score h1").innerHTML=score;
        if(score===25){
          document.querySelector(".winorlose button").classList.add("hide",);
          document.querySelector(".winorlose h1").classList.add("hide",);
          document.querySelector(".lose").style.display="none";
          document.querySelector(".screen").classList.add("blur", "freeze");
          document.querySelector(".truimphorlose").classList.remove("hide","display");
      }
    },150  );
    } else {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "IT'S A TIE";
    },150  );
    }
  } else if (clickedpic == "paper") {
    if (housepic == "lizard" || housepic == "scissors") {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "YOU LOSE";
      document.querySelector(".bbb").classList.remove("hide","display");
      score--;
      document.querySelector(".score h1").innerHTML=score;
      if(score===0){
        document.querySelector(".winorlose button").classList.add("hide");
        document.querySelector(".winorlose h1").classList.add("hide",);
        document.querySelector(".truimph").style.display="none";
        document.querySelector(".screen").classList.add("blur", "freeze");
        document.querySelector(".truimphorlose").classList.remove("hide","display");
      }
    },150  );
    } else if (housepic == "spock" || housepic == "rock") {setTimeout(function(){
        document.querySelector(".winorlose").classList.remove("hide","display");
        document.querySelector(".winorlose h1").innerHTML = "YOU WIN";
        document.querySelector(".aaa").classList.remove("hide","display");
        score++;
        document.querySelector(".score h1").innerHTML=score;
        if(score===25){
          document.querySelector(".winorlose button").classList.add("hide",);
          document.querySelector(".winorlose h1").classList.add("hide",);
          document.querySelector(".lose").style.display="none";
          document.querySelector(".screen").classList.add("blur", "freeze");
          document.querySelector(".truimphorlose").classList.remove("hide","display");
        }
      },150  );
    } else {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "IT'S A TIE";
    },150  );
    }
  } else if (clickedpic == "scissors") {
    if (housepic == "rock" || housepic == "spock") {setTimeout(function(){
      document.querySelector(".winorlose").classList.remove("hide","display");
      document.querySelector(".winorlose h1").innerHTML = "YOU LOSE";
      document.querySelector(".bbb").classList.remove("hide","display");
      score--;
      document.querySelector(".score h1").innerHTML=score;
      if(score===0){
        document.querySelector(".winorlose button").classList.add("hide");
        document.querySelector(".winorlose h1").classList.add("hide",);
        document.querySelector(".truimph").style.display="none";
        document.querySelector(".screen").classList.add("blur", "freeze");
        document.querySelector(".truimphorlose").classList.remove("hide","display");
      }
    },150  );
    } else if (housepic == "lizard" || housepic == "paper") {setTimeout(function(){
        document.querySelector(".winorlose").classList.remove("hide","display");
        document.querySelector(".winorlose h1").innerHTML = "YOU WIN";
        document.querySelector(".aaa").classList.remove("hide","display");
        score++;
        document.querySelector(".score h1").innerHTML=score;
        if(score===25){
          document.querySelector(".winorlose button").classList.add("hide",);
          document.querySelector(".winorlose h1").classList.add("hide",);
          document.querySelector(".lose").style.display="none";
          document.querySelector(".screen").classList.add("blur", "freeze");
          document.querySelector(".truimphorlose").classList.remove("hide","display");
        }
      },150  );
    } else {setTimeout(function(){
        document.querySelector(".winorlose").classList.remove("hide","display");
        document.querySelector(".winorlose h1").innerHTML = "IT'S A TIE";
      },150  );
  }
  } else {
    console.log("aaaa");
  }

}

document.querySelector(".winorlose button").addEventListener("click", playAgain);

function playAgain() {


  document.querySelector(".winorlose").classList.add("hide","display");
  document.querySelector(".pentagondiv").classList.remove("hide","display");
  document.querySelectorAll(".circle")[0].setAttribute("class", "circle");
  document.querySelectorAll(".circle")[0].classList.add("hide","display");
  document.querySelectorAll(".circle")[1].setAttribute("class", "circle");
  document.querySelectorAll(".circle")[1].classList.add("hide","display");
  document.querySelector(".aaa img").setAttribute("src", "");
  document.querySelector(".bbb img").setAttribute("src", "");
  document.querySelector(".aaa").classList.add("hide");
  document.querySelector(".bbb").classList.add("hide");
  document.querySelector(".bbb1 p").classList.remove("view");
  document.querySelector(".aaa1 p").classList.remove("view");
  for (i = 0; i < noOfPictures; i++) {
    if (document.querySelectorAll(".playobjects img")[i].classList.contains("pictures") === false) {
      document.querySelectorAll(".playobjects img")[i].classList.add("pictures");
    }
  }
  if(score===0){
    document.querySelector(".screen").classList.add("blur", "freeze");
    document.querySelector(".truimphorlose").classList.remove("hide","display");
    document.querySelector(".winorlose button").classList.add("hide");
    document.querySelector(".truimph").style.display="none";
  }
  if(score===25){
    document.querySelector(".screen").classList.add("blur", "freeze");
    document.querySelector(".truimphorlose").classList.remove("hide","display");
    document.querySelector(".winorlose button").classList.add("hide");
    document.querySelector(".lose").style.display="none";
  }
}

// Rules button
document.querySelector(".rulesbutton").addEventListener("click", showRules);
function showRules(){
  document.querySelector(".screen").classList.add("blur", "freeze");
  document.querySelector(".rules").classList.remove("hide","display");
}

// Close icon on rules sheet
document.querySelector(".close").addEventListener("click", hideRules);
function hideRules(){
  document.querySelector(".screen").classList.remove("blur", "freeze");
  document.querySelector(".rules").classList.add("hide","display");
}
