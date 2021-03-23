'use strict'

/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в дополнительных видео в материалах урока.
*/

const new_products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let is_photos = new_products.filter(function (product) {
    if (product.photos != 0) {
        return product.photos
    };
});

console.log(is_photos);

let price_sorted = new_products.sort(function (product1, product2) {
    if (product1.price > product2.price) {
        return 1;
    } else if (product1.price < product2.price) {
        return -1;
    }
    return 0;
});

console.log(price_sorted);

/*
5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){/* здесь пусто }
*/

for (let i = 0; i < 10; console.log(i++)) { };


/*
6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
*/

let x = "x"
for (let i = 0; i < 20; i++) {
    console.log(x);
    x += "x";
};

