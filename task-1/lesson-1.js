"use strict";

/* 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32;
где Tf – температура по Фаренгейту, Tc – температура по Цельсию Задание 1
*/

let Tc = +prompt("Введите Тс: ");
let Tf = (9 / 5) * Tc + 32;
alert(`Температура по Фаренгейту: ${Tf}`);

/* 2. Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").
*/

let name = "Василий";
let admin = name;
console.log(admin);

/* 3. Вывести в консоль значения выражений и объяснить почему получились такие значения используя комментарии к каждому выражению:
*/

let result1 = 10 + 10 + "10";
let result2 = 10 + "10" + 10;
let result3 = 10 + 10 + +"10";
let result4 = 10 / -"";
let result5 = 10 / +"2,5";

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

/*
1. Складываем первые 2 числа получаем 20 и к этим числам добавляем строку (конкатенация), в результате получаем строку "2010".
2. Также складываем число + строка + строка, на выходе получаем строку "101010".
3. Складываем 2 числа и одну строку, при этом к строке добавляем унарный плюс, приводим строку к числу, поэтому конкатенации не происходит и на выходе получаем число 30.
4. Здесь попытка деления числа на строку с унарным минусом, который превращает строку в -0, в результате получаем минус бесконечность.
5. Попытка деления числа на строку, получаем NaN. Причем унарный плюс в данном случае не приводит строку из дробного числа к числу, так как запятая является ограничителем в данном случае и вместо запятой нужно ставить точку.
*/
