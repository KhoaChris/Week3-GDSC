const total = document.getElementById('total');
const inputFirstNum= document.getElementById('input-first-num');
const inputSecondNum= document.getElementById('input-sec-num');

const sumBtn=document.getElementById('sum-btn');
const subBtn=document.getElementById('sub-btn');
const mulBtn=document.getElementById('mul-btn');
const divBtn=document.getElementById('div-btn');

let totalNum = 0;

sumBtn.onclick = function () {
    totalNum = parseInt(inputFirstNum.value) + parseInt(inputSecondNum.value);
    total.innerHTML = 'Total: ' + totalNum;
}

subBtn.onclick = function () {
    totalNum = parseInt(inputFirstNum.value) - parseInt(inputSecondNum.value);
    total.innerHTML = 'Total: ' + totalNum;
}

mulBtn.onclick = function () {
    totalNum = parseInt(inputFirstNum.value) * parseInt(inputSecondNum.value);
    total.innerHTML = 'Total: '+ totalNum;
}

divBtn.onclick = function () {
    totalNum = parseInt(inputFirstNum.value) / parseInt(inputSecondNum.value);
    total.innerHTML = 'Total: '+ totalNum;
}
