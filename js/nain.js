// элементы форм
const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input')

//радиокнопки
const radioType = document.querySelectorAll('input[name="type"]');
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
// console.log(radioType);

// селекты

const totalPriceElement1 = document.querySelector('#total-price1');
// const totalPriceElement2 = document.querySelector('#total-price2');

// let PM = 0;


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
        // 3 * (parseInt(squareInput.value)**1.12);
        for(const radio of radioType){
            if(radio.checked && radio.value=="1"){
                PM = 3.2 * (parseFloat(squareInput.value)**1.05);
                const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
            }
            else if(radio.checked && radio.value === "2"){
                PM = 3 * (parseFloat(squareInput.value)**1.12);
                const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
                }
            else if(radio.checked && radio.value === "3"){
                PM = 2.8 * (parseFloat(squareInput.value)**1.2);
                const formatter = new Intl.NumberFormat('ru');
            totalPriceElement1.innerText = formatter.format(PM);
                }
        }
    

        for(const radio of radio01){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio02){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio03){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio04){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio05){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio06){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio07){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio08){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio08){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio09){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio10){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio11){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio12){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio13){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio14){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }

        for(const radio of radio15){
            if (radio.checked){
                PM = PM * parseFloat(radio.value);
                const formatter = new Intl.NumberFormat('ru');
                totalPriceElement1.innerText = formatter.format(PM);
            }
        }
    }
    
    

  
        for(const input of inputs){
            input.addEventListener('input', function() {
                calculate();
            })
        }
    

    