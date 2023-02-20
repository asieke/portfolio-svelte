<script lang="ts">
	import '../app.css';
	//if theme = dark then import dark theme

	import theme from '$lib/shared/stores/themeStore';
	import Hamburger from '$components/svg/Hamburger.svelte';
	import Logo from '$components/svg/Logo.svelte';
	import Navbar from '$components/Navbar.svelte';

	/* look up in the dom what the left position of sidebar is */
	/* if it's -64, then it's closed, if it's 0, then it's open */

	console.log($theme);

	let sidebar = true;

	function toggleSidebar() {
		sidebar = !sidebar;
		console.log(sidebar);
	}

	function toggleTheme() {
		$theme === 'dark' ? theme.set('light') : theme.set('dark');
		console.log($theme);
	}
</script>

<div class="main {$theme}">
	<div class="nav {$theme}">
		<div class="transition-all duration-500 ease-in-out sm:-mr-24 m-0">
			<button on:click={() => toggleSidebar()}><Hamburger /></button>
		</div>
	</div>
	<div class="w-full flex flex-row">
		<div
			class="sidebar {$theme} {sidebar
				? '-left-64'
				: 'left-0'} sm:left-0 bg-slate-800 transition-all duration-500 ease-in-out"
		>
			Sidebar
			<div class="profile {$theme}">
				<button on:click={() => toggleTheme()}>Theme</button>
			</div>
		</div>
		<div
			class="content {$theme} {sidebar
				? ''
				: 'pl-0'} sm:pl-64 transition-all duration-500 ease-in-out"
		>
			<slot />
		</div>
	</div>
</div>

<style lang="postcss">
	.nav {
		@apply h-16 w-full flex flex-row-reverse;
		height: 48px;
	}

	.nav.dark {
		@apply bg-black;
	}

	.nav.light {
		@apply bg-slate-500;
	}

	.nav button {
		@apply p-3 bg-green-700 text-white w-12;
	}

	.nav button:hover {
		@apply bg-green-800;
	}

	.main {
		@apply h-screen w-full overflow-hidden;
	}

	.sidebar {
		@apply w-64 bg-green-500 fixed;
		height: calc(100vh - 48px);
	}
	.sidebar.light {
		@apply bg-slate-300;
	}
	.sidebar.dark {
		@apply bg-slate-900;
	}

	.content {
		@apply bg-yellow-500 w-full;
		height: calc(100vh - 48px);
	}

	.content.light {
		@apply bg-slate-200;
	}

	.content.dark {
		@apply bg-slate-800;
	}

	.profile {
		@apply bottom-0 w-full h-32 absolute bg-black;
	}

	.profile button {
		@apply bg-white;
	}
</style>
