<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	import { Sidebar, Navbar, Content, UserDropdown } from '$components';
	import { resizeListener } from '$lib/shared/globals';

	onMount(() => {
		window.addEventListener('resize', resizeListener);
	});
</script>

<div class="w-full h-screen m-0 p-0 fixed overflow-hidden">
	<Navbar />
	<UserDropdown />

	<div class="main">
		<Sidebar />
		<Content>
			<slot />
		</Content>
	</div>
</div>

<svelte:head>
	<script>
		if (window) {
			const localTheme = window.localStorage.getItem('theme') || 'dark';
			document.documentElement.classList.add(localTheme);
			//if the screen size is <640 then set the .sidebar "left" to -256px
			if (window.innerWidth < 640) {
				document.documentElement.classList.add('sidebarHidden');
			} else {
				document.documentElement.classList.add('sidebarShowing');
			}
		}
	</script>
</svelte:head>
