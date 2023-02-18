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
	}
</script>

<div
	class="h-screen w-full overflow-hidden bg-slate-300 py-20 px-4 sm:pl-72 transition-all duration-500 ease-in-out"
>
	<button
		class="fixed bg-slate-900 z-50 opacity-100 top-0 left-0 sm:-left-32 h-12 w-12 p-2 m-2 rounded transition-all duration-500 ease-in-out text-white"
		on:click={() => toggleSidebar()}><Hamburger /></button
	>
	<div
		class="fixed flex flex-row z-50 top-0 -left-64 sm:left-0 h-16 w-64 py-2 px-5 transition-all duration-500 ease-in-out"
	>
		<img src="logo.png" alt="logo" />
		<div class="text-lg font-bold text-white items-center flex ml-1">Portfolio Lab</div>
	</div>
	<Navbar />
	<div
		class="fixed top-0 z-20 h-screen w-64 {sidebar
			? '-left-64'
			: 'left-0 shadow-right'} sm:left-0 bg-slate-800 transition-all duration-500 ease-in-out"
	>
		<div class="relative h-screen">
			<ul class="absolute top-20">
				<li>Link 1</li>
				<li>Link 1</li>
				<li>Link 1</li>
				<li>Link 1</li>
			</ul>

			<ul class="absolute bottom-4">
				<li>Link A</li>
				<li>Link 2</li>
				<li>Link 3</li>
				<li>Link 4</li>
			</ul>
		</div>
	</div>

	<slot />
</div>

<style lang="postcss">
	.shadow-right {
		box-shadow: 10px 0 10px -10px rgba(0, 0, 0, 0.5);
	}

	ul {
		@apply flex flex-col justify-center items-center w-full;
	}

	li {
		@apply w-5/6 bg-slate-600 rounded-md p-2 mb-2 cursor-pointer hover:bg-slate-700 drop-shadow-sm text-slate-200 text-sm;
	}

	/* create a ul/li class that is centered in the parent div, has rounded edges and looks like a sweet sidebar, has hover */
</style>
