//-----------------burgerMenu------------------------------- 
const hamb = document.querySelector("#hamb");
const popup = document.querySelector(".popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
//-----------------burgerMenu------------------------------- 



//-----------------music-------------------------------
// try {
// 	const mute = document.querySelector('.mute__checkbox');
// 	const audio = new Audio('audio/18.25.15.mp4');


// 	const checkMute = () => {
// 		if (mute.checked) {
// 			audio.play().catch(() => {
// 				mute.checked = false;
// 			});
// 		} else {
// 			audio.pause();
// 		}
// 	};

// 	if (mute) {
// 		setTimeout(checkMute, 2000)
// 	}

// 	mute.addEventListener('change', checkMute)
// } catch {
// 	console.log('На этой странице нет музыки');
// }

//-----------------music-------------------------------


//-----------------Swiper-------------------------------
const swiper = new Swiper('.swiper', {
	
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	//   clickable: true, //На пагинации перемещение слайдов на нужный
	// },

	//автоматическое перелистывание
	// autoplay: {
	// 	delay: 2000,
	// },

// 	
effect: 'slider', //'slider'
slidesPerView: 'auto',
centeredSlides: true,
spaceBetween: 15,
speed: 700,
loop: true,
simulateTouch : true,
loopFillGroupWithBlank: false,
grabCursor: true,
//touchStartPreventDefault: false,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	 },
 
 });

 

//-----------------Swiper-------------------------------
