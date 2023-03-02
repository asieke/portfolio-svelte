<script lang="ts">
	import { menu } from '$lib/stores';

	const closeMenu = () => {
		menu.set(false);
	};
</script>

<div id="userMenu" class="container {$menu ? 'right-0' : '-right-48'}">
	<div class="px-6 py-4">
		<span class="">Bonnie Green</span>
		<span class="font-medium truncate">name@flowbite.com</span>
	</div>
	<ul class="py-2 space-y-2">
		<li><a href="/settings" on:click={closeMenu}>Settings</a></li>
		<li><a href="/profile" on:click={closeMenu}>Profile</a></li>
		<li><a href="/logout" on:click={closeMenu}>Logout</a></li>
	</ul>
</div>

<style>
	div.container {
		@apply fixed z-40 w-48 top-12 text-base list-none divide-gray-600 divide-y transition-all duration-150 ease-in-out;
		background-color: var(--bg-2);
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
		background-color: var(--bg-1);
	}
</style>
