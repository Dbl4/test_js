'use strict'

/*
1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/

// es5

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.show = function () {
    console.log(`${this.name} ${this.price}`);
};

Product.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
    console.log(this.price);
};

let productObj = new Product('Иван', '2500');
console.log(productObj.price);
console.log(productObj.name);
productObj.show();
productObj.make25PercentDiscount();


// es6

class Product_es6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    show() {
        console.log(`${this.name} ${this.price}`);
    }

    make25PercentDiscount() {
        this.price *= 0.75;
        console.log(this.price);
    }
}

let product_es6 = new Product_es6('Иван', '2500');
console.log(product_es6.price);
console.log(product_es6.name);
product_es6.show();
product_es6.make25PercentDiscount();

/*
1.2 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/


//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function () {
    this.text = 'edit text';
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.author = author;
    this.text = text;
    this.date = date;
    this.highlighted = 'False';
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = 'True';
}

let post = new Post('Иван', 'текст', '24.03.2021');
console.log(post.text);
post.edit();
console.log(post.text);
let attachedpost = new AttachedPost('Сергей', 'новый текст', '24.03.2021');
console.log(attachedpost.text);
attachedpost.edit();
console.log(attachedpost.text);
console.log(attachedpost.highlighted);
attachedpost.makeTextHighlighted();
console.log(attachedpost.highlighted);


//es6

class Post_es6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit() {
        this.text = 'edit text';
    }
}

class AttachedPost_es6 extends Post_es6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.author = author;
        this.text = text;
        this.date = date;
        this.highlighted = 'False';
    }

    makeTextHighlighted() {
        this.highlighted = 'True';
    }
}

let post_es6 = new Post_es6('Иван', 'текст', '24.03.2021');
console.log(post_es6.text);
post_es6.edit();
console.log(post_es6.text);
let attachedpost_es6 = new AttachedPost_es6('Сергей', 'новый текст', '24.03.2021');
console.log(attachedpost_es6.text);
attachedpost_es6.edit();
console.log(attachedpost_es6.text);
console.log(attachedpost_es6.highlighted);
attachedpost_es6.makeTextHighlighted();
console.log(attachedpost_es6.highlighted);