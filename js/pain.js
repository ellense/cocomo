// элементы форм
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input')

//радиокнопки

const radio01 = document.querySelectorAll('input[name="01"]');
const radio02 = document.querySelectorAll('input[name="02"]');
const radio03 = document.querySelectorAll('input[name="03"]');
const radio04 = document.querySelectorAll('input[name="04"]');
const radio05 = document.querySelectorAll('input[name="05"]');
const radio06 = document.querySelectorAll('input[name="06"]');
const radio07 = document.querySelectorAll('input[name="07"]');
const radio08 = document.querySelectorAll('input[name="08"]');
const radio09 = document.querySelectorAll('input[name="09"]');
const radio10 = document.querySelectorAll('input[name="10"]');
const radio11 = document.querySelectorAll('input[name="11"]');
const radio12 = document.querySelectorAll('input[name="12"]');
const radio13 = document.querySelectorAll('input[name="13"]');
const radio14 = document.querySelectorAll('input[name="14"]');
const radio15 = document.querySelectorAll('input[name="15"]');
const radio16 = document.querySelectorAll('input[name="16"]');
const radio17 = document.querySelectorAll('input[name="17"]');
const radio18 = document.querySelectorAll('input[name="18"]');
const radio19 = document.querySelectorAll('input[name="19"]');
const radio20 = document.querySelectorAll('input[name="20"]');
const radio21 = document.querySelectorAll('input[name="21"]');
const radio22 = document.querySelectorAll('input[name="22"]');




// селекты

const totalPriceElement1 = document.querySelector('#total-price1');
const totalPriceElement2 = document.querySelector('#total-price2');



// связываем range с текстовым полем
// слушаем событие input
squareRange.addEventListener('input', function(){
    squareInput.value = squareRange.value;
})

//связка текстового поля с range
squareInput.addEventListener('input', function(){
    squareRange.value = squareInput.value;
})



    function calculate() {
        let PM = 0;
        let TM = 0;
        let s = 0;
        for(const radio of radio01){
            if (radio.checked){
                s = s + parseFloat(radio.value);
                PM = 2.45 * (parseFloat(squareInput.value)**(0.91+0.01*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(s);
            }
        }

        for(const radio of radio02){
            if (radio.checked){
                s = s + parseFloat(radio.value);
                PM = 2.45 * (parseFloat(squareInput.value)**(0.91+0.01*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(s);
            }
        }

        for(const radio of radio03){
            if (radio.checked){
                s = s + parseFloat(radio.value);
                PM = 2.45 * (parseFloat(squareInput.value)**(0.91+0.01*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(s);
            }
        }
        for(const radio of radio04){
            if (radio.checked){
                s = s + parseFloat(radio.value);
                PM = 2.45 * (parseFloat(squareInput.value)**(0.91+0.01*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(s);
            }
        }
        for(const radio of radio05){
            if (radio.checked){
                s = s + parseFloat(radio.value);
                PM = 2.45 * (parseFloat(squareInput.value)**(0.91+0.01*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(s);
            }
        }

        for(const radio of radio06){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }
        for(const radio of radio07){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio08){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio09){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio10){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio11){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio12){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio13){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio14){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio15){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio16){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio17){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio18){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio19){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio20){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio21){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }

        for(const radio of radio22){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                TM = 3.67 * (PM**(0.28 + 0.002*s));
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
                totalPriceElement2.innerText = formatter.format(TM);
            }
        }
        
    }
    
        for(const input of inputs){
            input.addEventListener('input', function() {
                calculate();
            })
        }