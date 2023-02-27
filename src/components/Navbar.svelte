<script lang="ts">
	import { onMount } from 'svelte';

	import { menu } from '$lib/stores';
	import theme from '$lib/stores/themeStore';

	import { Hamburger, Sun } from '$components/svg/';

	function toggleSidebar() {
		document.documentElement.classList.toggle('sidebarShowing');
		document.documentElement.classList.toggle('sidebarHidden');
	}

	function toggleTheme() {
		document.documentElement.classList.toggle('light');
		document.documentElement.classList.toggle('dark');
	}
</script>

<div class="nav">
	<div class="hidden sm:block transition-all duration-500 ease-in-out">
		<div class="flex align-middle items-center p-2">
			<img src="/logo.png" alt={'logo'} height={32} width={32} />
			<span class="m-1 font-bold">Portfolio Labs</span>
		</div>
	</div>
	<div class="sm:hidden flex items-center transition-all duration-500 ease-in-out">
		<button on:click={() => toggleSidebar()}><Hamburger class="h-6 w-6 ml-3" /></button>
	</div>
	<div class="flex flex-row mr-4 space-x-2">
		<button on:click={() => toggleTheme()}><Sun /></button>
		<button
			type="button"
			class="border-2 border-gray-300 h-7 w-7"
			on:click|stopPropagation={() => menu.set(!$menu)}
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
</style>
