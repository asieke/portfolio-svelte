<script lang="ts">
	import '../app.css';
	import Hamburger from '$components/svg/Hamburger.svelte';
	import Logo from '$components/svg/Logo.svelte';
	import Navbar from '$components/Navbar.svelte';

	/* look up in the dom what the left position of sidebar is */
	/* if it's -64, then it's closed, if it's 0, then it's open */

	let sidebar = true;

	function toggleSidebar() {
		sidebar = !sidebar;
		console.log(sidebar);
	}
</script>

<div class="main">
	<div class="nav">
		<div class="transition-all duration-500 ease-in-out sm:-mr-24 m-0">
			<button on:click={() => toggleSidebar()}><Hamburger /></button>
		</div>
	</div>
	<div class="w-full flex flex-row">
		<div
			class="sidebar {sidebar
				? '-left-64'
				: 'left-0'} sm:left-0 bg-slate-800 transition-all duration-500 ease-in-out"
		>
			Sidebar
			<div class="profile" />
		</div>
		<div class="content {sidebar ? '' : 'pl-0'} sm:pl-64 transition-all duration-500 ease-in-out">
			<slot />
		</div>
	</div>
</div>

<style>
	.main {
		@apply h-screen w-full overflow-hidden bg-red-700;
	}

	.nav {
		@apply h-16 w-full bg-blue-500 flex flex-row-reverse;
		height: 48px;
	}

	.nav button {
		@apply p-3 bg-green-700 text-white w-12;
	}

	.nav button:hover {
		@apply bg-green-800;
	}

	.main {
		@apply h-screen w-full overflow-hidden bg-red-700;
	}

	.sidebar {
		@apply w-64 bg-green-500 fixed;
		height: calc(100vh - 48px);
	}

	.content {
		@apply bg-yellow-500 w-full;
		height: calc(100vh - 48px);
	}

	.profile {
		@apply bottom-0 w-full h-32 absolute bg-black;
	}
</style>
