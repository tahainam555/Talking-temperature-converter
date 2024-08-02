const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");
let temp;
let input;

function speak(text) {
    // var text = `${input} after conversion is ${temp}`;
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }

function convert(){
    if(toFahrenheit.checked){
        input = Number(textBox.value);
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32 ;
        result.textContent = temp.toFixed(1) + "°F";        //toFixed() for precision  
        speak(`${input} degree Celcius after conversion is ${temp} degree Fahrenheit`);
    }
    else if(toCelcius.checked){
        input = Number(textBox.value);
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9) ;
        result.textContent = temp.toFixed(1) + "°C";        //toFixed() for precision
        speak(`${input} degree Fahrenheit after conversion is ${temp} degree Celcius`);
    }
    else{
        result.textContent = "Select a Unit!";
        speak(`Please select a unit`);
    }
}


