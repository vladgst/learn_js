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

// for (let n = 0; n <= 10; n++) {
//     if (n % 2 == 0) continue;
//     console.log(n)
// }

// let a = 3 + 2;
// switch (a) {
//     case 3:
//         alert( 'Маловато' );
//         break;
//     case 4:
//         alert( 'В точку!' );
//         break;
//     case 5:
//         alert( 'Перебор' );
//         break;
//     default:
//         alert( "Нет таких значений" );
// }

// let arg = prompt("Введите число?");
// switch (arg) {
//     case '0':
//     case '1':
//         alert( 'Один или ноль' );
//         break;
//     case '2':
//         alert( 'Два' );
//         break;
//     case 3:
//         alert( 'Никогда не выполнится!' );
//         break;
//     default:
//         alert( 'Неизвестное значение' );
// }

// let browser = prompt('Введите название браузера:')
//     if (browser == 'Edge') {
//         alert('Edge browser')
//     }
//     else if (browser == 'Chrome' || browser ==  'Firefox' || browser ==  'Safari' || browser ==  'Opera') {
//         alert('Best browser')
//     }
//     else {
//         alert('Any browser')
//     }

// const number = +prompt('Число между 0 и 3')
// switch (number) {
//     case 0:
//         alert('Число 0')
//         break;
//     case 1:
//         alert('Число 1')
//         break;
//     case 2:
//     case 3:
//         alert('2 или 3')
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }
//
// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }

// function showMin (a, b){
//     if (a < b) {
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(showMin(3, 13))

// function showPow (x, n) {
//     return x ** n;
// }
// console.log(showPow(2,6))

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = prompt("x?", '');
// let n = prompt("n?", '');
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//     alert( pow(x, n) );
// }

