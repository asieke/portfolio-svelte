<script lang="ts">
	import '../app.css';
	import { Hamburger, Logo } from '$components/svg/';
	import Sidebar from '$components/Sidebar.svelte';
	import Navbar from '$components/Navbar.svelte';
	import { sidebar } from '$lib/stores';

	function toggleSidebar() {
		sidebar.set(!$sidebar);
	}

	//write a function that takes the current theme and sets the css variables to the values in themeColors
</script>

<div class="main">
	<Navbar />
	<div class="w-full flex flex-row">
		<Sidebar />
		<div class="content {$sidebar ? '' : 'pl-0'}">
			<slot />
		</div>
	</div>
</div>

<svelte:head>
	<script>
		const theme = window.localStorage.getItem('theme') || 'dark';
		document.documentElement.classList.add(theme);
	</script>
</svelte:head>
