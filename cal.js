
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}


function clearDisplay() {
    document.getElementById('display').value = '';
}


function calculateResult() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
function goback(){
document.getElementById('display').value =display.value.slice(0,-1);
}
function cmtom(){
document.getElementById('display').value=display.value*0.01;
}