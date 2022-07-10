let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
const phraseArray = [
    `Не вышло`,
    `Вы загадали неправильное число!\n\u{1F914}`,
    `Я сдаюсь..\n\u{1F92F}`,
    
]
const victory = [
    `Я всегда угадываю\n\u{1F60E}`,
    `Это было просто =) `,
    `Давай ещё ! `,
]

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})
document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || answerNumber === minValue){
            const rand =  -0.5 +  Math.random() * (3);
            const phraseRandom = Math.round(rand);
            answerField.innerText = phraseArray[phraseRandom];
        gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil(( maxValue - ( maxValue - minValue)/2));
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
});

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || answerNumber === maxValue){
            const rand =  -0.5 +  Math.random() * (3);
            const phraseRandom = Math.round(rand);
            answerField.innerText = phraseArray[phraseRandom];
          

       
        gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }   
});


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        
            const rand =  -0.5 +  Math.random() * (3);
            const phraseRandom = Math.round(rand);
            answerField.innerText = victory[phraseRandom];
            
}   
});




document.getElementById('btnRetry').addEventListener('click', ()=> {
    window.location.reload();
})