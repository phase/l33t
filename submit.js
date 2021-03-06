$.get("http://jdf2.org/phaseViewCount/index.php", function(count){
  $("#hitcount").html(count);
});

var bestScore = 0.0;

$(document).ready(function(){
var form = document.forms[0];

$(".question").toArray().forEach(function(element, index, array) {
  $(element).hide(100);
});

for(var i = 0; i < 10; i++){
  showRandom();
}
for(var i = 0; i < form.length; i += 4){
  if(isHidden(i/4 + 1)) continue;
  var radio = document.getElementsByName(form[i].name);
  var highestRadioScore = 0.0;
  for(var j = 0; j < radio.length; j++){
    var radioScore = parseFloat(radio[j].value);
    if(highestRadioScore < radioScore){
      highestRadioScore = radioScore;
    }
  }
  bestScore += highestRadioScore;
}

});

function submitForm(){
  var form = document.forms[0];
  console.log(form);
  var sum = 0.0;
  
  for(var i = 0; i < form.length; i+=4){
    var v = getRadioCheckedValue(form, form[i].name);
    //alert(form[i].name +": "+ v);
    sum+=v;
  }
  
  alert("Your Score: " + parseInt(((sum/bestScore)*100)) + "%");
  
}

function getRadioCheckedValue(form, radio_name){
 var oRadio = document.getElementsByName(radio_name);
 console.log(radio_name);
 for(var i = 0; i < oRadio.length; i++){
   if(oRadio[i].checked){
         console.log(oRadio[i]);
         console.log(oRadio[i].value);
         return parseFloat(oRadio[i].value);
   }
 }
 return 0;
}

function showRandom(){
 var r = Math.floor((Math.random() * 10) + 1);
 if(isHidden(r)) showRandom();
 else $(".question").eq(r-1).show(100);
}

function isHidden(i){
  return $(".question").eq(i-1).css('display') == 'none';
}
