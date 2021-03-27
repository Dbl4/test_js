let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [2, 4, 6, 8, 7, 3, 1, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (2, 4, 6, 1, 7, 3 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6, 1, 7, 3 или 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        // Чтобы игрок не выходил за рамки поля, добавим условие на каждый case
        switch (direction) {
            case 2:
                if (nextPosition.y == 9) {
                    nextPosition.y
                    break
                }
                nextPosition.y++;
                break;
            case 4:
                if (nextPosition.x == 0) {
                    nextPosition.x
                    break
                }
                nextPosition.x--;
                break;
            case 6:
                if (nextPosition.x == 9) {
                    nextPosition.x
                    break
                }
                nextPosition.x++;
                break;
            case 8:
                if (nextPosition.y == 0) {
                    nextPosition.y
                    break
                }
                nextPosition.y--;
                break;
            case 1:
                if ((nextPosition.y == 9) || (nextPosition.x == 0)) {
                    nextPosition.y;
                    nextPosition.x;
                    break;
                }
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 9:
                if ((nextPosition.y == 0) || (nextPosition.x == 9)) {
                    nextPosition.y;
                    nextPosition.x;
                    break;
                }
                nextPosition.y--;
                nextPosition.x++;
                break;
            case 7:
                if ((nextPosition.y == 0) || (nextPosition.x == 0)) {
                    nextPosition.y;
                    nextPosition.x;
                    break;
                }
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 3:
                if ((nextPosition.y == 9) || (nextPosition.x == 9)) {
                    nextPosition.y;
                    nextPosition.x;
                    break;
                }
                nextPosition.y++;
                nextPosition.x++;
                break;
        }

        return nextPosition;
    },
};