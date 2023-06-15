alert('Hello, world!');

let a = 158;
let b = 2;
alert(a+b);

let name = prompt('Введите имя> ');
alert(`Привет, ${name}!`); // Объявление было отмечено как устаревшее

let name1 = prompt('Как Вас зовут?', 'Имя');
alert(`Привет, ${name1}!`);

let name2 = confirm('подтвердите имя или опровергните')
if (name2){
    alert('подтверждение')
}
else{
    alert('имя не подтверждено')
}

let age = parseInt(prompt('введите возраст '));
switch (age){
        case 18:
            alert('совершеннолетний');
            break;
        case 10:
            alert('учить уроки');
            break;
        case 30:
            alert('на работу');
            break;
        default:
            alert('что делать?');
            break;
}