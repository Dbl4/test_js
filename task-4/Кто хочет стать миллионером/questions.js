let questions = {
    // Сюда запишем все что надо отобразить.
    test: "",
    numberQuestion: 0,
    /**
     * Отображает вопросы в консоли.
     */
    giveQuestion() {
        //достаем вопрос из тестера по счетчику(номер вопроса)
        this.test += tester[this.numberQuestion].question;
        this.test += '\n';

        //также достаем варианты ответов из тестера по счетчику
        for (let answer in tester[this.numberQuestion].answers) {
            this.test += `${answer}. ${tester[this.numberQuestion].answers[answer]}`;
            this.test += '\n';
        }

        //увеличиваем счетчик и выводим вопрос в консоль
        this.numberQuestion += 1;
        console.log(this.test);
    },

    clear() {
        // Чистим консоль.
        console.clear();
        // Чистим вопрос.
        this.test = "";
    }
};