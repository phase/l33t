var bestScore = 0;

var form = document.forms[0];

for(var i = 0; i < form.length; i += 4){
  var radio = document.getElementsByName(form[i].name);
  var highestRadioScore = 0.0;
  for(var j = 0; j < radio.length; j++){
    var radioScore = parseFloat(radio[i].value);
    if(highestRadioScore < radioScore){
      highestRadioScore = radioScore;
    }
  }
  bestScore += highestRadioScore;
}

alert(bestScore);

function submitForm(){
  var form = document.forms[0];
  console.log(form);
  var sum = 0.0;
  
  for(var i = 0; i < form.length; i+=4){
    var v = getRadioCheckedValue(form, form[i].name);
    //alert(form[i].name +": "+ v);
    sum+=v;
  }
  
  alert("Your Score: " + ((sum/bestScore)*100) + "%");
  
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
