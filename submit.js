var bestScore = 10.0;

function submitForm(){
  var form = document.forms[0];
  console.log(form);
  var sum = 0.0;
  
  for(var i = 0; i < form.length; i++){
    console.log(form[i]);
    sum += getRadioCheckedValue(form[i].name);
  }
  
  alert("Your Score: " + sum);
  
}

function getRadioCheckedValue(radio_name){

 var oRadio = document.forms[0].elements[radio_name];
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
