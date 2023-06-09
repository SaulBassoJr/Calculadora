function insertButon(number){
    var captureNumber = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = captureNumber + number;
}

function clearCalc(){
    document.getElementById('result').innerHTML = "";
}

function backSpace(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1); //vai ler todos os caractere do campo e diminuir 1
}

function calculate(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    } else {
        document.getElementById('result').innerHTML = "Não há valores"
    }
}