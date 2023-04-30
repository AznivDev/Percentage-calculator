let calcPrecentageInputOne = document.getElementById("calcPrecentageInputOne");
let calcPrecentageInputTwo = document.getElementById("calcPrecentageInputTwo");
let calcPrecentageResult = document.getElementById("calcPrecentageResult");
let calcPrecentageBottomInputOne = document.getElementById("calcPrecentageBottomInputOne");
let calcPrecentageBottomInputTwo = document.getElementById("calcPrecentageBottomInputTwo");
let calcPrecentageBottomResult = document.getElementById("calcPrecentageBottomResult");

function calcPrecentage (){
    calcPrecentageResult.value = parseInt(calcPrecentageInputTwo.value) / 100 * parseInt(calcPrecentageInputOne.value);
    if(isNaN(calcPrecentageResult.value )){
        alert ("Please write a numbers.");
        return;
    }
    return false;
}
function calcPrecentageBottom (){
    calcPrecentageBottomResult.value = parseInt(calcPrecentageBottomInputTwo.value) / 100 * parseInt(calcPrecentageBottomInputOne.value);
    if(isNaN(calcPrecentageBottomResult.value )){
        alert ("Please write a numbers.");
        return;
    }
    return false;
}