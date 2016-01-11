
var counter = 1;
var counter2 = 0;
var direction = "upward";
var direction2 = "upward";
var go = false;
createjs.Sound.registerSound("Body.mp3", "Body");
createjs.Sound.addEventListener("fileload", handleFileLoad);

function handleFileLoad(event){
  console.log(event)
  createjs.Sound.play(event.id, {loop:-1});
  animate();
}

function animate(){

  var makeitgo = setInterval(function(){

    var to = "#container div:nth-child(" + counter + ")";

    if(direction === "upward"){

      $(to).removeClass("down");
      $(to).addClass("up");

      counter++

      if(counter === 13){
        counter = 1;
        direction = "downward";
        go = true;
      }
    } else if(direction === "downward"){

      $(to).removeClass("up");
      $(to).addClass("down");

      counter++

      if(counter === 13){
        counter = 1;
        direction = "upward";
      }
    }

    if(go){

      var to2 = "#container-2 div:nth-child(" + (counter2) + ")";

      if(direction2 === "upward"){

        $(to2).removeClass("down");
        $(to2).addClass("up");

        counter2++

        if(counter2 === 13){
          counter2 = 1;
          direction2 = "downward";
        }
      } else if(direction2 === "downward"){

        $(to2).removeClass("up");
        $(to2).addClass("down");

        counter2++

        if(counter2 === 13){
          counter2 = 1;
          direction2 = "upward";
        }
      }
    }


  }, 250)

}


$(document).ready(function(){


  animate();

})
