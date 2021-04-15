'use strict'

let game = {

    // здесь будем считать количество набранных очков
    pointSumm: 0,
    points: 10,

    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {
            if (questions.numberQuestion < tester.length) {
                questions.giveQuestion();
            } else {
                console.log(`Игра окончена. Вы набрали: ${game.pointSumm} из ${game.points * tester.length} очков`);
                this.pointSumm = 0;
                questions.numberQuestion = 0;
                if (confirm("Сыграть еще раз?")) {
                    this.run()
                }
                return;
            }
            // Получаем ответ от игрока.
            const variant = answers.getAnswer();

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (variant === null) {
                console.log("Игра окончена.");
                return;
            }
            // Проверяем правильность ответа и считаем набранные очки
            if (variant == tester[questions.numberQuestion - 1].right_answer) {
                this.pointSumm += this.points;
            }

            questions.clear();
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();