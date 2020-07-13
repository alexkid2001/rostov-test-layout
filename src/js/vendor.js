import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

const initConnect = () => {
	const lastConnectors = document.querySelectorAll('.connect--last');
	const firstConnectors = document.querySelectorAll('.connect--first');
	const middleConnectors = document.querySelectorAll('.connect--middle');

	lastConnectors.forEach(item => {
		const prevElem = item.previousElementSibling;
		const parent = item.parentElement.parentElement;
		if (prevElem.classList.contains('point')) {
			const top = prevElem.offsetTop; // prevElem.getBoundingClientRect().top;
			const height = prevElem.getBoundingClientRect().height;
			const parentHeight = parent.getBoundingClientRect().height;
			const center = height / 2 + top;
			item.style.top = center + 'px';
			// item.style.height = parentHeight - center + 32 + 'px';
			item.style.height = parseInt((parentHeight - center + 32)/7) * 7 + 'px';
		}
	})

	firstConnectors.forEach(item => {
		const nextElem = item.nextElementSibling;
		const parent = item.parentElement.parentElement;
		if (nextElem.classList.contains('point')) {
			const top = nextElem.offsetTop;
			const height = nextElem.getBoundingClientRect().height;
			const center = height / 2 + top;
			// item.style.height = parentHeight - center + 32 + 'px';
			item.style.height = center + 22 - 5 + 'px';
		}
	})

	middleConnectors.forEach(item => {
		const prevElem = item.previousElementSibling;
		const nextElem = item.nextElementSibling;
		if (prevElem.classList.contains('point') && nextElem.classList.contains('point')) {
			const prevTop = prevElem.offsetTop;
			const prevHeight = prevElem.getBoundingClientRect().height;
			const nextTop = nextElem.offsetTop;
			const nextHeight = nextElem.getBoundingClientRect().height;
			const prevCenter = prevTop + prevHeight / 2;
			const nextCenter = nextTop + nextHeight / 2;
			item.style.top = prevCenter + 'px';
			item.style.height = nextCenter - prevCenter - 4 + 'px';
		}

	})
}

initConnect();

window.addEventListener('resize', () => {
	initConnect();
})
