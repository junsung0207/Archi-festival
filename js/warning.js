// $( window ).on( "load", function() {
//    console.log( "로딩성공" );
//    $(".loading").css("visibility","hidden");
//  });


//---------------맥 OS
if(navigator.platform.match("Mac") !== null) {
      var body = document.getElementsByTagName('body')[0].style = "font-family: 'AppleM', sans-serif !important;";
      var title = document.getElementById("Maintext").style = "font-family: 'AppleM', sans-serif !important; line-height:80px;";
      var title = document.getElementById("Suptext").style = "font-family: 'AppleM', sans-serif !important; line-height:8px;";
}


// --------------main페이지 이동 ---------
function gotomain(){
  alert("링크는 당일 축제 시작 전 공개됩니다.");
}

function close_warning(){
  var warning = document.getElementsByClassName("warning")[0].style = "display:none;";
  var warning_close_box = document.getElementsByClassName("warning_close_box")[0].style = "display:none;";
}

function open_warning(){
  var warning = document.getElementsByClassName("warning")[0].style = "display:flex;";
  var warning_close_box = document.getElementsByClassName("warning_close_box")[0].style = "display:block;";
}

function open_choosen(){
  var choosen = document.getElementsByClassName("choosen")[0].style = "display:flex;";
}

function close_choosen(){
  var choosen = document.getElementsByClassName("choosen")[0].style = "display:none;";
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


function openposter(){
  var cardnews_container = document.getElementsByClassName("poster_container")[0].style = "display:flex;";
}

function closeposter(){
  var cardnews_container = document.getElementsByClassName("poster_container")[0].style = "display:none;";
}

function opengifts(){
  var cardnews_container = document.getElementsByClassName("gifts_container")[0].style = "display:flex;";
}

function closegifts(){
  var cardnews_container = document.getElementsByClassName("gifts_container")[0].style = "display:none;";
}

function openminimap(){
  var cardnews_container = document.getElementsByClassName("minimap_container")[0].style = "display:flex;";
}

function closeminimap(){
  var cardnews_container = document.getElementsByClassName("minimap_container")[0].style = "display:none;";
}
