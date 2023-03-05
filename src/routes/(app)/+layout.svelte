<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Navbar, Content, Landing, SetupAccount } from '$components';

	import '$styles/app.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<container>
	{#if !$page.data.session || !$page.data.user}
		<Landing />
	{:else if !$page.data.user.accepted_tos}
		<SetupAccount />
	{:else}
		<Navbar />
		<Content>
			<slot />
		</Content>
	{/if}
</container>

<svelte:head>
	<script>
		if (window) {
			const localTheme = window.localStorage.getItem('theme') || 'dark';
			document.documentElement.classList.add(localTheme);
		}
	</script>
</svelte:head>
