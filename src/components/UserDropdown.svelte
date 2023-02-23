<script lang="ts">
	let dropdown = true;

	const toggleDropdown = () => {
		dropdown = !dropdown;
	};
</script>

<button type="button" class="m-2 w-8 h-8 p-1 -ml-1 rounded-full" on:click={toggleDropdown}>
	<img class="w-full h-full rounded-full" src="/profile.png" alt="user" />
</button>

<div class="container {dropdown ? 'right-0' : '-right-48'}">
	<div class="px-4 py-3">
		<span class="">Bonnie Green</span>
		<span class="font-medium truncate">name@flowbite.com</span>
	</div>
	<ul class="py-2">
		<li><a href="dashboard/">Dashboard</a></li>
		<li><a href="dashboard/">Settings</a></li>
		<li><a href="dashboard/">Profile</a></li>
		<li><a href="dashboard/">Logout</a></li>
	</ul>
</div>

<style lang="postcss">
	button {
		@apply m-2 w-8 h-8 p-1 -ml-1 rounded-full;
		background-color: var(--bg-main);
	}
	div.container {
		@apply fixed z-40 w-48 top-12 text-base list-none divide-gray-600 divide-y transition-all duration-500 ease-in-out;
		background-color: var(--bg-sidebar);
		color: var(--text);
	}
	span {
		@apply block text-sm;
		color: var(--text);
	}
	a {
		@apply block px-4 py-2 text-sm;
	}

	a:hover {
		background-color: var(--bg-nav);
	}
</style>
