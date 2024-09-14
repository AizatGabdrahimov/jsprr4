'use strict'
//  1
function ChetNums() {

    let a = prompt('Введите начальное число','1')
    let b = prompt('Введите конечное число','10')

    let res = ''

    for(let i = a; i <= b; i++) {
        if(i % 2 == 0 ) {
            res += i + ', '
        }
    }

    alert(`Четные числа в этом диапазоне: ${res}`)

}

ChetNums()
// 2
let x = 0
while (x < 3) {
    alert(`number ${x}`)
    x++
}

// 3
let z

do {
    z = prompt('Введите число больше 10', '1')
} while(z !== null && z <= 10);

// 4
function min() {
    let c = prompt('Введите число (C)', '1')
    let d = prompt('Введите число (D)', '2')

    let q
    if(c > d) {
        q = d
    }
    else {
        q = c
    }
    
    alert("Меньшее число: "+q)
}

min()

// 5
const ask = (question, yes, no) => {
    confirm(question) ? yes() : no();
  };
  
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы не согласились.")
  );  

// 6

const checkAge = () => (parseInt(prompt("Ваш возраст:", ""), 10) > 18) || confirm("А родители то разрешили?");
checkAge();