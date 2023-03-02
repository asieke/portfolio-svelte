export const mobileWidth = 640;

export const setDocumentClass = (showing: boolean, collapsed: boolean, mobile: boolean) => {
	if (mobile) {
		document.documentElement.classList.add('mobile');
	} else {
		document.documentElement.classList.remove('mobile');
	}

	if (!showing) {
		document.documentElement.classList.add('sidebarHidden');
		document.documentElement.classList.remove('sidebarShowing');
		document.documentElement.classList.remove('sidebarCollapsed');
	}
	if (showing && collapsed) {
		document.documentElement.classList.add('sidebarCollapsed');
		document.documentElement.classList.remove('sidebarShowing');
		document.documentElement.classList.remove('sidebarHidden');
	}
	if (showing && !collapsed) {
		document.documentElement.classList.add('sidebarShowing');
		document.documentElement.classList.remove('sidebarCollapsed');
		document.documentElement.classList.remove('sidebarHidden');
	}
};
