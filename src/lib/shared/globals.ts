export const mobileWidth = 640;

export const resizeListener = () => {
	if (window.innerWidth < mobileWidth) {
		document.documentElement.classList.add('sidebarHidden');
		document.documentElement.classList.remove('sidebarShowing');
	}
	if (window.innerWidth >= mobileWidth) {
		document.documentElement.classList.remove('sidebarHidden');
		document.documentElement.classList.add('sidebarShowing');
	}
};

export const toggleSidebar = () => {
	console.log('TOGGLING');
	document.documentElement.classList.toggle('sidebarShowing');
	document.documentElement.classList.toggle('sidebarHidden');
	return true;
};
