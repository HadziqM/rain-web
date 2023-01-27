export const loadArticle = (path1: string = '', path2: string = '') => {
	event!.stopPropagation();
	let href_path = `${path1}/${path2}`;
	location.pathname = href_path;
};

// slide open
const slideDown = (target: Element) => {
	if (target instanceof HTMLElement) {
		target.style.height = 'auto';
		const h = target.offsetHeight;
		const tabHeight: string = h + 'px';
		target.style.height = tabHeight;
		target.animate(
			{
				height: ['0', tabHeight]
			},
			{
				duration: 400,
				easing: 'ease'
			}
		);
	}
};

// slide close
const slideUp = (target: Element) => {
	if (target instanceof HTMLElement) {
		const h = target.offsetHeight;
		const tabHeight: string = h + 'px';
		target.style.height = tabHeight;
		target.animate(
			{
				height: [tabHeight, '0']
			},
			{
				duration: 400,
				easing: 'ease'
			}
		);
		target.style.height = '0';
	}
};

// toggle language selection field
export const toggleLangSel = (e: Event) => {
	const target = e.currentTarget;
	const lj = document.querySelector('.lang_sel_judge') as HTMLLIElement;
	const la = document.querySelector('.language_selectArea') as HTMLUListElement;
	if (target instanceof Element) {
		target.classList.toggle('langArrow_open');
		lj.classList.toggle('open');
		if (lj.classList.contains('open')) {
			slideDown(la);
		} else {
			slideUp(la);
		}
	}
};
