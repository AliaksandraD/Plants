console.log(' [+] При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50\n [+] Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50\n [+] В разделе contacts реализован select с выбором городов +25');
// console.log(' [+] Вёрстка соответствует макету. Ширина экрана 768px +24\n [+] Вёрстка соответствует макету. Ширина экрана 380px +24\n [+] Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n [+-] На ширине экрана 380рх и меньше реализовано адаптивное меню +22 \n   * при клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, также скрытие меню происходит если сделать клик вне данного окна -4 ')
console.log('Итого: 125/100');


// Рабочая
// let btnS = document.getElementsByClassName("button-service");
// for (let i = 0; i < btnS.length; i++) {
//     btnS[i].onclick = function () {
//         this.classList.toggle("buttonSjs");
//     };
// }

// РАБОЧАЯ 2
// const buttonS = document.querySelectorAll('.btnservice-container .button-service');

// const gardening = document.querySelector('#Garden_care .servises-item');
// const planting = document.querySelectorAll('#Planting .servises-item');

// for (i=0; i<buttonS.length; i++){
//      buttonS[i].onclick = BTNSactive;
//     //  if (buttonS[0].classList("buttonSjs")) {
//     //     alert("lflfl");
//     //     // gardeningActive();
//     //  };

// }
// function BTNSactive(){
//     this.classList.toggle("buttonSjs");
// }

// function gardeningActive() {
//     let lawn = document.getElementsByName("Lawn");
//     lawn.addClass("servises-item-blur");   
// }


// // частично рабочая
// const btnS = document.getElementsByClassName("button-service");
// for (let i = 0; i < btnS.length; i++) {

//     let gardens = document.querySelectorAll('.servises-item-garden')
//     let lawn = document.querySelectorAll('.servises-item-lawn')
//     let planting = document.querySelectorAll('.servises-item-planting')

//     btnS[0].addEventListener('click', GardenActive);
//     btnS[1].addEventListener('click', LawnActive);
//     btnS[2].addEventListener('click', PlantingActive);


//     // function GardenActive() {
//     //     this.classList.add('button-service-active')

//     //     if (btnS[0].classList.contains('button-service-active')) {
//     //         gardens.forEach(item => item.classList.contains('servises-item-garden'));
//     //         lawn.forEach(item => item.classList.toggle('servises-item-blur'));
//     //         planting.forEach(item => item.classList.toggle('servises-item-blur'));
//     //         // this.classList.add('button-service-active')
//     //     }else if (btnS[0].classList.contains('button-service-active') || btnS[1].classList.contains('button-service-active')){
//     //         planting.forEach(item => item.classList.toggle('servises-item-blur'));
            
//     //     } else if (gardens.classList.contains('servises-item-blur')){
//     //         lawn.forEach(item => item.classList.toggle('servises-item-lawn'));
//     //         planting.forEach(item => item.classList.toggle('servises-item-planting'));
//     //         btnS[0].classList.contains('button-service')
//     //         btnS[0].classList.remove('button-service-active')
//     //     }

//     // }

//     function GardenActive() {
//         this.classList.add('button-service-active')

//         if (btnS[0].classList.contains('button-service-active')) {
//             lawn.forEach(item => item.classList.toggle('servises-item-blur'));
//             planting.forEach(item => item.classList.toggle('servises-item-blur'));
//             gardens.forEach(item => item.classList.toggle('servises-item-garden'));
//             // this.classList.add('button-service-active')
//         }else if (btnS[0].classList.contains('button-service-active') || btnS[1].classList.contains('button-service-active')){
//             planting.forEach(item => item.classList.toggle('servises-item-blur'));
//             btnS[2].classList.remove('button-service-active')
            
//         } else if (btnS[0].classList.contains('button-service')){
//             lawn.forEach(item => item.classList.toggle('servises-item-lawn'));
//             planting.forEach(item => item.classList.toggle('servises-item-planting'));
//             gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//         }

//     }

//     function LawnActive() {
//         this.classList.add('button-service-active')

//         if (btnS[1].classList.contains('button-service-active')) {
//             gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//             planting.forEach(item => item.classList.toggle('servises-item-blur'));
//             lawn.forEach(item => item.classList.toggle('servises-item-lawn'))
//         }else if (btnS[1].classList.contains('button-service-active') || btnS[2].classList.contains('button-service-active')){
//             gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//             btnS[0].classList.remove('button-service-active')
            
//         } else if (btnS[1].classList.contains('button-service')){
//             lawn.forEach(item => item.classList.toggle('servises-item-blur'));
//             planting.forEach(item => item.classList.toggle('servises-item-planting'));
//             gardens.forEach(item => item.classList.toggle('servises-item-garden'));
//         }

//     }

//     function PlantingActive() {
//         this.classList.add('button-service-active')

//         if (btnS[2].classList.contains('button-service-active')) {
//             gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//             planting.forEach(item => item.classList.toggle('servises-item-planting'));
//             lawn.forEach(item => item.classList.toggle('servises-item-blur'))
//         }else if (btnS[2].classList.contains('button-service-active') || btnS[0].classList.contains('button-service-active')){
//             lawn.forEach(item => item.classList.toggle('servises-item-blur'));
//             btnS[1].classList.remove('button-service-active')
            
//         } else if (btnS[2].classList.contains('button-service')){
//             lawn.forEach(item => item.classList.toggle('servises-item-lawn'));
//             planting.forEach(item => item.classList.toggle('servises-item-blur'));
//             gardens.forEach(item => item.classList.toggle('servises-item-garden'));
//         }

//     }
    


//     // function LawnActive() {
//     //     this.classList.add('button-service-active')
        
//     //     if (btnS[1].classList.contains('button-service-active')) {
//     //         gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//     //         lawn.forEach(item => item.classList.contains('servises-item-lawn'));
//     //         planting.forEach(item => item.classList.toggle('servises-item-blur'));
//     //         this.classList.toggle('button-service-active')
//     //     }else if (btnS[1].classList.contains('button-service-active') || btnS[2].classList.contains('button-service-active')){
//     //         gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//     //     } else if (lawn.classList.contains('servises-item-blur')){
//     //         gardens.forEach(item => item.classList.toggle('servises-item-garden'));
//     //         planting.forEach(item => item.classList.toggle('servises-item-planting'));
//     //         btnS[1].classList.contains('button-service')
//     //     }

//     // }
    

//     // function PlantingActive() {
//     //     this.classList.add('button-service-active')
        
//     //     if (btnS[2].classList.contains('button-service-active')) {
//     //         gardens.forEach(item => item.classList.toggle('servises-item-blur'));
//     //         lawn.forEach(item => item.classList.toggle('servises-item-blur'));
//     //         planting.forEach(item => item.classList.contains('servises-item-planting'));
//     //         this.classList.toggle('button-service-active')

//     //     }else if (btnS[2].classList.contains('button-service-active') || btnS[0].classList.contains('button-service-active')){
//     //         lawn.forEach(item => item.classList.toggle('servises-item-blur'));
//     //     } else if (planting.classList.contains('servises-item-blur')){
//     //         gardens.forEach(item => item.classList.toggle('servises-item-garden'));
//     //         lawn.forEach(item => item.classList.toggle('servises-item-lawn'));
//     //         btnS[2].classList.contains('button-service')
//     //     }

//     // }
// }






const btnS = document.getElementsByClassName("button-service");
for (let i = 0; i < btnS.length; i++) {
    let gardens = document.querySelectorAll('.servises-item-garden')
    let lawn = document.querySelectorAll('.servises-item-lawn')
    let planting = document.querySelectorAll('.servises-item-planting')

    // for Gardens    
    btnS[0].onclick = function () {
        if (btnS[1].classList.contains('button-service-active') && btnS[2].classList.contains('button-service-active')) {
        } else if (btnS[1].classList.contains('button-service-active') || btnS[2].classList.contains('button-service-active')) {
            btnS[0].classList.toggle('button-service-active');
            gardens.forEach(item => item.classList.toggle('servises-item-blur'));
        } else {
            btnS[0].classList.toggle('button-service-active');
            lawn.forEach(item => item.classList.toggle('servises-item-blur'));
            planting.forEach(item => item.classList.toggle('servises-item-blur'));
        }}
// for Lawn
        btnS[1].onclick = function () {
            if (btnS[0].classList.contains('button-service-active') && btnS[2].classList.contains('button-service-active')) {
            } else if (btnS[0].classList.contains('button-service-active') || btnS[2].classList.contains('button-service-active')) {
                btnS[1].classList.toggle('button-service-active');
                lawn.forEach(item => item.classList.toggle('servises-item-blur'));
            } else {
                btnS[1].classList.toggle('button-service-active');
                gardens.forEach(item => item.classList.toggle('servises-item-blur'));
                planting.forEach(item => item.classList.toggle('servises-item-blur'));

            }
        }
// for Planting
        btnS[2].onclick = function () {
            if (btnS[0].classList.contains('button-service-active') && btnS[1].classList.contains('button-service-active')) {
            } else if (btnS[0].classList.contains('button-service-active') || btnS[1].classList.contains('button-service-active')) {
                btnS[2].classList.toggle('button-service-active');
                planting.forEach(item => item.classList.toggle('servises-item-blur'));
            } else {
                btnS[2].classList.toggle('button-service-active');
                gardens.forEach(item => item.classList.toggle('servises-item-blur'));
                lawn.forEach(item => item.classList.toggle('servises-item-blur'));

            }
        }


}




//PRICE

let accordion = document.getElementsByClassName('accordion');
let accBtN = document.getElementsByClassName('accordion-btn');

for (i = 0; i < accBtN.length; i++) {
    accBtN[i].addEventListener('click', accToggle, false);
}
function accToggle() {
    let accClass = this.parentNode.className;
    for (i = 0; i < accordion.length; i++) {
        accordion[i].className = 'accordion close'
    }
    if (accClass == 'accordion close') {
        this.parentNode.className = 'accordion open'
    }

}



// CONTACTS

let select = function () {
    let selectHead = document.querySelectorAll('.select-head');
    let selectItem = document.querySelectorAll('.select-item ');


    selectHead.forEach(item => {
        item.addEventListener('click', selectOpen);


    });
    function selectOpen() {
        this.parentElement.classList.toggle('activeTown');
        this.classList.toggle('select-head-active')
        let activeI = document.querySelector('.select-icon')
        activeI.classList.toggle('activeicon')

    }


    selectItem.forEach(item => {
        item.addEventListener('click', CityToggle)
    })


    //for Canandaigua

    let Canandaigua = document.querySelector('#Canandaigua');
    let CanandaiguaCont = document.querySelector('#CanandaiguaCont');
    Canandaigua.addEventListener('click', CanandaiguaContOpen)

    function CanandaiguaContOpen() {
        CanandaiguaCont.style.display = 'block';
        NewYorkCont.style.display = 'none';
        YonkersCont.style.display = 'none';
        SherrillCont.style.display = 'none';
    }
    //for NewYork
    let NewYork = document.querySelector('#NewYork');
    let NewYorkCont = document.querySelector('#NewYorkCont');
    NewYork.addEventListener('click', NewYorkContOpen)

    function NewYorkContOpen() {
        CanandaiguaCont.style.display = 'none';
        NewYorkCont.style.display = 'block';
        YonkersCont.style.display = 'none';
        SherrillCont.style.display = 'none';
    }

    //for Yonkers
    let Yonkers = document.querySelector('#Yonkers');
    let YonkersCont = document.querySelector('#YonkersCont');
    Yonkers.addEventListener('click', YonkersContOpen)

    function YonkersContOpen() {
        CanandaiguaCont.style.display = 'none';
        NewYorkCont.style.display = 'none';
        YonkersCont.style.display = 'block';
        SherrillCont.style.display = 'none';
    }

    //for Sherrill
    let Sherrill = document.querySelector('#Sherrill');
    let SherrillCont = document.querySelector('#SherrillCont');
    Sherrill.addEventListener('click', SherrillContOpen)

    function SherrillContOpen() {
        CanandaiguaCont.style.display = 'none';
        NewYorkCont.style.display = 'none';
        YonkersCont.style.display = 'none';
        SherrillCont.style.display = 'block';
    }


}

function CityToggle() {
    let City = this.innerText;
    select = this.closest('.select');
    currentCity = select.closest('.select').querySelector('.select-current-value');
    currentCity.innerText = City;
    select.classList.remove('activeTown');
    const active = document.querySelector('#SelectHead');
    const activeClass = active.classList;
    const res = activeClass.replace("select-head", "select-head-active2")

    const IconActiveOpened = document.querySelector('#selectoricon')
    IconActiveOpened.classList.toggle("activeicon")

}

select();