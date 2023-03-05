<script lang="ts">
	import theme from '$lib/stores/themeStore';
	import { Hamburger, Sun } from '$components/svg/';
	import { menu, sidebar } from '$lib/stores';
	import { Menu, Sidebar, LinksMain } from '$components';

	const toggleTheme = () => {
		document.documentElement.classList.toggle('light');
		document.documentElement.classList.toggle('dark');
		theme.set($theme === 'dark' ? 'light' : 'dark');
	};
</script>

<div class="nav">
	<a class="logo" href="/">
		<img src="/logo.png" alt={'logo'} height={32} width={32} />
		<span class="m-1 font-bold">Portfolio Labs</span>
	</a>
	<div class="links sm:flex hidden">
		<LinksMain />
	</div>
	<div class="profile">
		<button class="" on:click={toggleTheme}><Sun /></button>
		<button class="block sm:hidden" on:click|stopPropagation={() => sidebar.set(!$sidebar)}
			><Hamburger class="h-6 w-6" /></button
		>
		<button class="hidden sm:block picture" on:click|stopPropagation={() => menu.set(!$menu)}>
			<img class="rounded-full" height={32} width={32} src="/profile.png" alt="user" />
		</button>
	</div>
</div>
<Menu />
<Sidebar />

<style lang="postcss">
	.nav {
		@apply fixed w-full flex justify-between top-0 left-0 z-50 items-center text-sm;
		height: var(--navbar-height);
		background-color: var(--bg-nav);
		color: var(--text-nav);
	}

	.logo {
		@apply flex pl-4;
	}

	.picture {
		@apply border-2 border-gray-300 h-7 w-7;
	}

	a:hover,
	button:hover {
		color: var(--info);
		border-color: var(--info);
	}

	.profile {
		@apply flex space-x-2 pr-4;
	}

	button {
		@apply outline-none p-0 rounded-full;
		margin: 10px 0px;
	}
</style>
