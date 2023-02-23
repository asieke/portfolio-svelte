<script lang="ts">
	import { sidebar } from '$lib/stores';
	import theme from '$lib/stores/themeStore';
	import UserDropdown from '$components/UserDropdown.svelte';

	import { Hamburger, NightMode } from '$components/svg/';

	function toggleSidebar() {
		sidebar.set(!$sidebar);
	}

	function toggleTheme() {
		console.log('HELLO');
		if ($theme === 'dark') {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			theme.set('light');
		} else {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			theme.set('dark');
		}
	}
</script>

<div class="nav">
	<div class="hidden sm:block transition-all duration-500 ease-in-out">
		<div class="flex align-middle p-2">
			<img src="/logo.png" alt={'logo'} height={32} width={32} />
			<span class="m-1 font-bold">Portfolio Labs</span>
		</div>
	</div>
	<div class="block sm:hidden transition-all duration-500 ease-in-out">
		<button on:click={() => toggleSidebar()}><Hamburger /></button>
	</div>
	<div class="flex flex-row">
		<button on:click={() => toggleTheme()}><NightMode /></button>
		<UserDropdown />
	</div>
	<!-- <div class="flex align-middle p-2">
		<img src="/logo.png" alt={'logo'} />
		<span class="m-1 font-bold">Portfolio Labs</span>
	</div>

	<div class="flex flex-row-reverse relative">
		<div class="transition-all duration-500 ease-in-out mr-12 sm:m-0 fixed">
			<button on:click={() => toggleTheme()}><NightMode /></button>
		</div>
		<div class="transition-all duration-500 ease-in-out  m-0 sm:-mr-24 fixed">
			<button on:click={() => toggleSidebar()}><Hamburger /></button>
		</div>
	</div> -->
</div>

<style>
	button {
		height: 40px;
		width: 40px;
		margin: 4px;
		padding: 6px;
	}
</style>
