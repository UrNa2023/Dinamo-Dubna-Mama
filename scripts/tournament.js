//Хранение состояния спойлера, свёрнут он или развёрнут
let spoilerState = false;

function onHeaderClick() {
	spoilerState = !spoilerState;
	if(spoilerState) 
		this.parentElement.classList.add('opened');
	else
		this.parentElement.classList.remove('opened')
}

function createSpoiler(element, state = false, decoration = '') {
	// Поиск заголовка спойлера
	const header = element.querySelector('h6');
	// Привязываем к внешнему блоку стилевой класс spoiler, задающий оформление спойлера
	element.classList.add('spoiler');
	// Заносим заданное во втором параметре изначальное состояние в переменную spoilerState
	spoilerState = !state;
	// Если спойлер должен быть изначально развёрнутым-дополнительно привязываем к внешнему блоку стилевой класс opened
	if (spoilerState)
		element.classList.add('opened');
	// Если в третьем параметре указан дополнительный стилевой класс-привязываем также и его
	if(decoration)
		element.classList.add('decoration');
	// Напоследок указываем в качестве обработчика события click, возникающего в заголовке спойлера, раннее объявленную функцию onHeaderClick()
	header.addEventListener('click', onHeaderClick);
}
	

