<script lang="ts">
	import { onMount } from 'svelte';
	import { menu } from '$lib/stores';
	import { fly } from 'svelte/transition';
</script>

{#if $menu}
	<div id="userMenu" class="container right-0" in:fly={{ y: -200, duration: 100 }}>
		<div class="px-6 py-4">
			<span class="">Bonnie Green</span>
			<span class="font-medium truncate">name@flowbite.com</span>
		</div>
		<ul class="py-2 space-y-2">
			<li><a href="/settings" on:click={() => menu.set(false)}>Settings</a></li>
			<li><a href="/profile" on:click={() => menu.set(false)}>Profile</a></li>
			<li><a href="/logout" on:click={() => menu.set(false)}>Logout</a></li>
		</ul>
	</div>
{/if}

<style>
	div.container {
		@apply fixed w-48 text-base list-none divide-gray-600 divide-y transition-all duration-150 ease-in-out;
		top: var(--nav-height);
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
