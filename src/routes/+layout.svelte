<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { mobileWidth, setDocumentClass } from '$lib/shared/globals';
	import { sidebarCollapsed, sidebarShowing, mobile } from '$lib/stores';

	import { Sidebar, Navbar, Content, UserDropdown } from '$components';

	const onScreenClick = () => {
		sidebarShowing.set(false);
		setDocumentClass($sidebarShowing, $sidebarCollapsed, $mobile);
	};

	onMount(() => {
		// if screen size < mobileWidth then set sidebarCollapsed to true
		if (window.innerWidth <= mobileWidth) {
			sidebarShowing.set(false);
			mobile.set(true);
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth <= mobileWidth && $mobile === false) {
				mobile.set(true);
				sidebarShowing.set(false);
				setDocumentClass(false, $sidebarCollapsed, $mobile);
			}
			if (window.innerWidth > mobileWidth && $mobile === true) {
				mobile.set(false);
				sidebarShowing.set(true);
				setDocumentClass(true, $sidebarCollapsed, $mobile);
			}
		});
	});
</script>

<div class="w-full h-screen m-0 p-0 z-40 overflow-hidden">
	<Navbar />
	<UserDropdown />

	<Content>
		<slot />
	</Content>
	<Sidebar />
	<div class="screen" />
</div>

<svelte:head>
	<script>
		if (window) {
			const localTheme = window.localStorage.getItem('theme') || 'dark';
			document.documentElement.classList.add(localTheme);
			//if the screen size is <640 then set the .sidebar "left" to -256px
			if (window.innerWidth < 640) {
				document.documentElement.classList.add('mobile');
				document.documentElement.classList.add('sidebarHidden');
			} else {
				document.documentElement.classList.add('sidebarShowing');
			}
		}
	</script>
</svelte:head>
