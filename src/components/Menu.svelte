<script lang="ts">
	import { page } from '$app/stores';
	import { menu } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import { supabase } from '$lib/supabaseClient';

	import { userStore } from '$lib/stores';

	const signOut = async () => {
		menu.set(false);
		try {
			await supabase.auth.signOut();
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		}
	};
</script>

{#if $menu}
	<div id="userMenu" class="container right-0" in:fly={{ y: -200, duration: 100 }}>
		<div class="px-6 py-4">
			<span class="">{$userStore?.full_name || ''}</span>
			<span class="font-medium truncate">{$userStore?.email || ''}</span>
		</div>
		<ul class="py-2 space-y-2">
			<li><a href="/settings" on:click={() => menu.set(false)}>Settings</a></li>
			<li><a href="/settings/profile" on:click={() => menu.set(false)}>Profile</a></li>
			<li><button on:click={signOut}>Logout</button></li>
		</ul>
	</div>
{/if}

<style>
	div.container {
		@apply fixed w-48 z-40 text-base list-none divide-gray-600 divide-y transition-all duration-150 ease-in-out;
		top: var(--nav-height);
		background-color: var(--bg-2);
		color: var(--text);
	}
	span {
		@apply block text-sm;
		color: var(--text);
	}
	a,
	button {
		@apply block px-4 py-2 text-sm w-full text-left;
	}

	a:hover,
	button:hover {
		background-color: var(--bg-1);
	}
</style>
