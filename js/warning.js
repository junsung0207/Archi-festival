function close_warning(){
  var warning = document.getElementsByClassName("warning")[0].style = "display:none;";
  var warning_close_box = document.getElementsByClassName("warning_close_box")[0].style = "display:none;";
}

function open_warning(){
  var warning = document.getElementsByClassName("warning")[0].style = "display:flex;";
  var warning_close_box = document.getElementsByClassName("warning_close_box")[0].style = "display:block;";
}


var cardpoint = 0;

function pointplus(){
  if(cardpoint == 5){return;}
  cardpoint += 1;
  for(var i =0 ; i < 6 ; i++){
    if(i == cardpoint){
      var cards = document.getElementsByClassName("cardnews")[i].style = "display:block;";
    }
    else{
      var cards = document.getElementsByClassName("cardnews")[i].style = "display:none;";
    }
  }
}

function pointminus(){
  if(cardpoint == 0){return;}
  cardpoint -= 1;
  for(var i =0 ; i < 6 ; i++){
    if(i == cardpoint){
      var cards = document.getElementsByClassName("cardnews")[i].style = "display:block;";
    }
    else{
      var cards = document.getElementsByClassName("cardnews")[i].style = "display:none;";
    }
  }
}

function opencards(){
  var cardnews_container = document.getElementsByClassName("cardnews_container")[0].style = "display:flex;";
}

function closecards(){
  var cardnews_container = document.getElementsByClassName("cardnews_container")[0].style = "display:none;";
}
