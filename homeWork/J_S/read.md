в body:

	<script language="JavaScript">
		alert ("Привет, мир!");
	</script>

типы данных:

	присвоение любого типа данных:
	let n = 123;
	n = "строка";
	-------------------
	infinity математическая бесконечность
	alert(5/0);
	------------------
	NaN вычислительная ошибка
	alert("не число"/ 4 );
	------------------
	let name = "текст";
	alert(привет, ${name}!);
	-------------------
	alert(результат: ${2+2});
	------------------
	булевский тип: true false
	-------------------
	значение null
	let age = null;
	-------------
	значение undefined
	let age;
	alert(age); //вывод undefined
	------------------
	оператор typeof
	возвращает тип переменной

alert()
окно-ок-закрыли окно (уведомление)

let test = prompt("Test");
окно-принимает данные(присваиваются переменной Test)

let right = confirm("текст")
да-нет, булевское значение хранится в right


	<script language="JavaScript">
		let p = prompt("введите имя");
		alert (p);
	</script>


сложение +

вычетание -

умножение *

деление /

взятие остатка от деления %

возведение в степень **

	let number = parseInt(prompt("введите число"));//перевод строки в int
	alert(number + 1);
________________________

	<script language="JavaScript">
		let p = parseInt(prompt("введите число"));
		alert (p+5);
	</script>


## унарный +

	let x = 1;
	alert(+x);//1
_____________________
	alert(+true);//1
	alert(+"");//0

_____________
	if (year == 2022){
		alert("правильно");
		alert("nhfkzkzkzkz");
	}
_________

	let year = prompt("год:", "");
	if (year == 2022){
		alert("правильно");
	} else {
		alert("nhfkzkzkzkz");
	}
__________
	let dfdYjj = (age > 18) ? true:false;

_____	
	alert(true || true);
	______________________________
	if (1 || 0){
		alert("истина");
	}
	____________________________________
	&&
	! не   !!

_______
операторы присваивания сокращ

	x+=y
	x*=y
	x/=y
	x%=y

___________
	let i = 0;
	while(i < 3){
		alert(i);
		i++;
	}
_________
	let i = 0;
	do {
		alert(i);
		i++;
	} while(i < 3);
_________

	for (let i = 0; i < 3; i++){
		alert(i);
	}

______________
	let a = 2 + 2;
	switch (a){
		case 3:
			alert("dwefw");
			break;
		case 4:
			alert("dweffffw");
			break;
		case 5:
			alert("dwffddddfw");
			break;
		default:
			alert("defefedfw");
	}
__________
функции:

	function showMessage() {
		alert("текст");
	}
	showMessage()
	showMessage()
______________


	<script language="JavaScript">
		function sum(a,b) {
			return a + b;
		}
		let a = parseInt(prompt("введите число"));
		let b = parseInt(prompt("введите число"));
		alert (sum(a,b));
	</script>






















































































































