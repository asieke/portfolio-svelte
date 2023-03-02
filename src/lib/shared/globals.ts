export const mobileWidth = 640;

export const generateClickHandler = (id: string, func: () => void) => {
	return (event: Event) => {
		const target = event.target as HTMLElement;
		if (!target.closest(`#${id}`)) {
			func();
		}
	};
};
