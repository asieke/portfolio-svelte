<script lang="ts">
	import theme from '$lib/stores/themeStore';
	import { Hamburger, Sun } from '$components/svg/';
	import { mobileWidth, setDocumentClass } from '$lib/shared/globals';
	import { sidebarCollapsed, sidebarShowing, mobile, menu } from '$lib/stores';

	const toggleTheme = () => {
		document.documentElement.classList.toggle('light');
		document.documentElement.classList.toggle('dark');
		theme.set($theme === 'dark' ? 'light' : 'dark');
	};

	//toggle sidebarCollapsed
	// const toggleSidebar = () => {
	// 	sidebarShowing.set(!$sidebarShowing);
	// 	setDocumentClass($sidebarShowing, $sidebarCollapsed, $mobile);
	// };

	const toggleSidebar = () => {
		const sidebarListener = (event: Event) => {
			// Use type assertion to tell TypeScript that event.target is an Element
			const target = event.target as Element;

			console.log('sidebar Listener... click', target);

			// Use the closest method on the Element to find the closest matching ancestor
			if (!target.closest('#sidebar')) {
				console.log('you did not click on the sidebar');
				sidebarShowing.set(false);
				setDocumentClass($sidebarShowing, $sidebarCollapsed, $mobile);
				document.removeEventListener('click', sidebarListener);
			}
		};

		if (!$sidebarShowing) {
			document.addEventListener('click', sidebarListener);
			sidebarShowing.set(true);
		} else {
			document.removeEventListener('click', sidebarListener);
			sidebarShowing.set(false);
		}
		setDocumentClass($sidebarShowing, $sidebarCollapsed, $mobile);
	};

	const toggleMenu = () => {
		if (!$menu) {
			document.addEventListener('click', (event: Event) => {
				// Use type assertion to tell TypeScript that event.target is an Element
				const target = event.target as Element;

				// Use the closest method on the Element to find the closest matching ancestor
				if (!target.closest('#userMenu')) {
					menu.set(false);
				}
			});
			menu.set(true);
		} else {
			menu.set(false);
		}
	};
</script>

<div class="nav">
	<div class="logo">
		<div class="flex align-middle items-center p-2">
			<img src="/logo.png" alt={'logo'} height={32} width={32} />
			<span class="m-1 font-bold">Portfolio Labs</span>
		</div>
	</div>
	<div class="hamburger">
		<button on:click|stopPropagation={toggleSidebar}><Hamburger class="h-6 w-6" /></button>
	</div>
	<div class="flex flex-row mr-4 space-x-2">
		<button on:click={toggleTheme}><Sun /></button>
		<button
			type="button"
			class="border-2 border-gray-300 h-7 w-7"
			on:click|stopPropagation={toggleMenu}
		>
			<img class="rounded-full" height={32} width={32} src="/profile.png" alt="user" />
		</button>
	</div>
</div>

<style lang="postcss">
	button {
		@apply outline-none p-0 rounded-full;
		margin: 10px 0px;
	}
	.logo {
		@apply hidden sm:block transition-all duration-150 ease-in-out;
	}
	.hamburger {
		@apply sm:hidden flex items-center transition-all duration-150 ease-in-out;
		margin-left: var(--hamburger-left);
	}
</style>
