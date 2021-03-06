'use strict'

/*
1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/


class Numbers {
    constructor(numb) {
        this.numb = numb;
    }

    chargenumber() {
        if ((Number.isInteger(this.numb)) && (this.numb >= 0) && (this.numb <= 999)) {
            return {
                units: this.numb % 10,
                tens: Math.floor((this.numb / 10)) % 10,
                hundreds: Math.floor((this.numb / 100)) % 10,
            }
        } else {
            console.log("Вы ввели что-то другое")
            return {}
        }
    }
}

let number = new Numbers(123);
console.log(number.numb);
console.log(number.chargenumber());