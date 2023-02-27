<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	import Sidebar from '$components/Sidebar.svelte';
	import Navbar from '$components/Navbar.svelte';
	import Content from '$components/Content.svelte';
	import UserDropdown from '$components/UserDropdown.svelte';

	onMount(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth < 640) {
				document.documentElement.classList.add('sidebarHidden');
				document.documentElement.classList.remove('sidebarShowing');
			}
			if (window.innerWidth >= 640) {
				document.documentElement.classList.remove('sidebarHidden');
				document.documentElement.classList.add('sidebarShowing');
			}
		});
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
