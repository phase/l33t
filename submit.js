var bestScore = 10.0;

function submitForm(){
  var form = document.forms[0];
  
  var sum = 0.0;
  
  for(var i = 0; i < form.length; i++){
    sum += getRadioCheckedValue(form[i].name);
  }
  
  alert("Your Score: " + sum/bestScore);
  
}

function getRadioCheckedValue(radio_name){

 var oRadio = document.forms[0].elements[radio_name];
 
 for(var i = 0; i < oRadio.length; i++){

   if(oRadio[i].checked){
         console.log(radio_name);
         return parseFloat(oRadio[i].value);
   }
 }
 return 0;
}
