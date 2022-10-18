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
        else if(radio.checked && radio.value === "2"){
            PM = 3.0 * (parseFloat(squareInput.value)**1.12);
            TM = 2.5 * (PM**0.35);
            //const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
            totalPriceElement2.innerText = formatter.format(TM);
            }
        else if(radio.checked && radio.value === "3"){
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
// function intermediate() {

//     // let selectedvalue = document.getElementById("selector").value;

//     // let number = document.getElementById("counter").value;
//     // let num = parseInt(number);

//     if(radio.checked && radio.value === "1"){
//         PM2 = EAF* 3.2 * (parseInt(squareInput.value)**1.05);
//     }
//     else if(radio.checked && radio.value === "2"){
//         PM2 = EAF* 3.0 * (parseInt(squareInput.value)**1.12);
//     }
//     else if(radio.checked && radio.value === "3"){
//         PM2 = EAF* 2.8 * (parseInt(squareInput.value)**1.20);
//     }

//     //const formatter = new Intl.NumberFormat('ru');
//     totalPriceElement1.innerText = formatter.format(PM2);
// }

// function a1() {
//     let selectedvalue = document.getElementById("1").value;

//     if (selectedvalue == 'verylow') {
//         EAF = 0.75;
//     } else if (selectedvalue == 'low') {
//         EAF = 0.88;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.15;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.4;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a2() {
//     let selectedvalue = document.getElementById("2").value;

//     if (selectedvalue == 'low') {
//         EAF = 0.94;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.08;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.16;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a3() {
//     let selectedvalue = document.getElementById("3").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 0.7;
//     } else if (selectedvalue == 'low') {
//         EAF = 0.85;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.15;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.3;
//     }
//     else if (selectedvalue == 'critical') {
//         EAF = 1.65;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a4() {
//     let selectedvalue = document.getElementById("4").value;

//     if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.11;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.3;
//     } else if (selectedvalue == 'critical') {
//         EAF = 1.66;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a5() {
//     let selectedvalue = document.getElementById("5").value;

//     if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.06;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.21;
//     } else if (selectedvalue == 'critical') {
//         EAF = 1.56;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a6() {
//     let selectedvalue = document.getElementById("6").value;

//     if (selectedvalue == 'low') {
//         EAF = 0.87;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.15;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.3;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a7() {
//     let selectedvalue = document.getElementById("7").value;

//     if (selectedvalue == 'low') {
//         EAF = 0.87;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.07;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.15;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a8() {
//     let selectedvalue = document.getElementById("8").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.46;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.19;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.86;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 0.71;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a9() {
//     let selectedvalue = document.getElementById("9").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.29;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.13;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.91;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 0.82;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a10() {
//     let selectedvalue = document.getElementById("10").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.42;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.17;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.86;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 0.7;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a11() {
//     let selectedvalue = document.getElementById("11").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.21;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.1;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.9;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a12() {
//     let selectedvalue = document.getElementById("12").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.14;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.07;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.95;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a13() {
//     let selectedvalue = document.getElementById("13").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.24;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.1;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.91;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 0.82;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a14() {
//     let selectedvalue = document.getElementById("14").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.24;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.1;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 0.91;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 0.83;
//     }
//     trueEAF = trueEAF * EAF;
// }
// function a15() {
//     let selectedvalue = document.getElementById("15").value;
//     if (selectedvalue == 'verylow') {
//         EAF = 1.23;
//     } else if (selectedvalue == 'low') {
//         EAF = 1.08;
//     } else if (selectedvalue == 'average') {
//         EAF = 1;
//     } else if (selectedvalue == 'high') {
//         EAF = 1.04;
//     } else if (selectedvalue == 'veryhigh') {
//         EAF = 1.1;
//     }
//     trueEAF = trueEAF * EAF;
// }
