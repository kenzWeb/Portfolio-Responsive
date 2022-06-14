const menu = document.querySelector('.header-burger');
const burgerModal = document.querySelector('.burger-menu__nav');
const burgerLink = document.querySelectorAll('.burger-menu-link');

menu.addEventListener('click', () => {
	menu.classList.toggle('click-burger');
	burgerModal.classList.toggle('modalActive');

})

// burgerLink.forEach(item => {
// 	item.addEventListener('click', () => {
// 		burgerModal.style.left = `150vh`
// 		menu.classList.toggle('click-burger')
// 	})
// });

// Прокрутка

const menuLinks = document.querySelectorAll('.nav-link[data-goto]');
if(menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if(menu.classList.contains('click-burger')) {
				menu.classList.remove('click-burger');
				burgerModal.classList.remove('modalActive');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}

}