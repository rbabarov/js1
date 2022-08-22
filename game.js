let num = Math.floor(Math.random() * 1000);
let count = 1;
while (true) {
    let user_num = prompt("За какое количество попыток удаете число от 0 до 999? Введите число:")
    if (user_num === 'q') {
        alert("Игра окончена.");
        break;
    } else if (isNaN(user_num) || user_num < 0 || user_num > 999) {
        alert("Некорректное значение!");
    } else if (+user_num < num) {
        alert("Ваше число меньше, чем загадано. Играем дальше!");
        count += 1;
    } else if (+user_num > num) {
        alert("Ваше число больше, чем загадано. Играем дальше!");
        count += 1;
    } else if (+user_num === num) {
        alert(`Вы угадали! Сделано попыток - ${count}`);
        break;
    }
}