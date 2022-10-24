// элементы форм
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input')
//радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
// const radioPO = document.querySelectorAll('input[name="PO"]');
// console.log(radioType);
//const options =  document.getElementById('1');
// console.log(options);
// селекты
const formatter = new Intl.NumberFormat('ru');
const totalPriceElement1 = document.querySelector('#total-price1');
const totalPriceElement2 = document.querySelector('#total-price2');

let PM = 0;
let PM2 =0;

// связываем range с текстовым полем
// слушаем событие input
squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
})

//связка текстового поля с range
squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value;
})

// function main() {

//     //score();
//     trueEAF = 1;
//     a1();
//     a2();
//     a3();
//     a4();
//     a5();
//     a6();
//     a7();
//     a8();
//     a9();
//     a10();
//     a11();
//     a12();
//     a13();
//     a14();
//     a15();

//     intermediate();

// };

// function organic(){
// PM = 2.4 * (parseInt(squareInput.value)**1.05);
// TM = 2.5 * (PM**0.38);
// //const formatter = new Intl.NumberFormat('ru');
// totalPriceElement1.innerText = formatter.format(PM);
// totalPriceElement2.innerText = formatter.format(TM);

// }
// function embedded(){
//     PM = 3.0 * (parseInt(squareInput.value)**1.12);
//     TM = 2.5 * (PM**0.35);
//     //const formatter = new Intl.NumberFormat('ru');
//     totalPriceElement1.innerText = formatter.format(PM);
//     totalPriceElement2.innerText = formatter.format(TM);
// }
// function semidetached(){
//     PM = 3.6 * (parseInt(squareInput.value)**1.20);
//     TM = 2.5 * (PM**0.32);
//     //const formatter = new Intl.NumberFormat('ru');
//     totalPriceElement1.innerText = formatter.format(PM);
//     totalPriceElement2.innerText = formatter.format(TM);
// }

// function jFunc(){
//         for(const s of options){
//            if(options.checked){
//                console.log('yes');
//            }
// }
// }

    function calculate() {
     for(const radio of radioType){
        if(radio.checked && radio.value === "1"){
            PM = 2.4 * (parseFloat(squareInput.value)**1.05);
            TM = 2.5 * (PM**0.38);
            //const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
            totalPriceElement2.innerText = formatter.format(TM);
            }
        else if(radio.checked && radio.value === "3"){
            PM = 3.0 * (parseFloat(squareInput.value)**1.12);
            TM = 2.5 * (PM**0.35);
            //const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
            totalPriceElement2.innerText = formatter.format(TM);
            }
        else if(radio.checked && radio.value === "2"){
            PM = 3.6 * (parseFloat(squareInput.value)**1.20);
            TM = 2.5 * (PM**0.32);
            //const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
            totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        // for(const radio of radioPO){
        //     if (radio.checked){
        //         console.log("hello!");
        //         // PM = PM*2;
        //         // totalPriceElement1.innerText = formatter.format(PM);
        //     }
        // }
    }
    
    

    function score() {
        for(const input of inputs){
            input.addEventListener('input', function() {
                calculate();
            })
        }
    }

    score();

