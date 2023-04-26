//alert ( 'Hello World')
// let admin;
// let name;
// name = "Джон";
// admin = name;
// alert(admin);

// const ourPlanet = "Earth";
// const userOnline = userOnline;

// let userName = prompt("Введите имя:")
// alert(`Your name ${userName}`)

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(+a + +b); // 12

// let officialName = prompt("Какое официальное название JavaScript?", "")
//
//     if (officialName == "ECMAScript") {
//         alert("Верно")
//     }
//     else {
//         alert("Не верно")
//     }

// let number = prompt("Number", "")
//     if (number > 0) {
//         alert(1)
//     }
//         else if (number < 0) {
//             alert(-1)
//     }
//         else if (number == 0) {
//             alert(0)
// }

//let result = (a + b < 4) ? 'Мало' : 'Много';
// let login = prompt('Введите логин', '')
// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравстсвуйте' :
//         (login == '') ? 'Нет логина' : ''

// let age = prompt('Введите возраст:');
// if (age >= 14 && age <= 90) {
//     console.log('Good')
// }
//     else {
//         console.log('Bad')
// }

// let userName = prompt("Кто там?", '');
// if (userName == 'Админ') {
//     let pass = prompt('Пароль?', '');
//     if (pass == 'Я главный') {
//         alert( 'Здравствуйте!' );
//     } else if (pass == '' || pass == null) {
//         alert( 'Отменено' );
//     } else {
//         alert( 'Неверный пароль' );
//     }
// } else if (userName == '' || userName == null) {
//     alert( 'Отменено' );
// } else {
//     alert( "Я вас не знаю" );
// }

/*                            26.04.23

 */

// let user;
// alert(user ?? "Аноним");
// let user = "Иван";
// alert(user ?? "Аноним");

// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//     console.log( i );
//     i++;
// }

// ['Мама', 'Мыла', 'Раму'];
// for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
//     alert(i);
// }
// let sum = 0;
// while (true) {
//     let value = +prompt("Введите число", '');
//     if (!value) break;
//     sum += value;
// }
// alert( 'Сумма: ' + sum );

// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0) continue;
//     alert(i);
// }
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0)
//     alert(i)
// }

// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }

// let num = 0;
// do {
//     num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);
// while (true) {
//     let value = +prompt('Введи число больше 100', '')
//     if (value < 100) alert('Введите число больше 100!');
//         else break;
// }

for (let n = 0; n <= 10; n++) {
    if (n % 2 == 0) continue;
    console.log(n)
}