<script lang="ts">
	import { sidebar } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import { ChartPie, ArrowLeft, Gauge, Stack, Harvest, Rocket } from '$components/svg';

	let options = { duration: 250, opacity: 1, x: 256 };
</script>

{#if $sidebar}
	<div id="sidebar" class="sidebar sm:hidden" transition:fly={options}>
		<div class="content">
			<div class="top">
				<a href="/dashboard" on:click={() => sidebar.set(false)}><Gauge /><span>Dashboard</span></a>
				<a href="/allocation" on:click={() => sidebar.set(false)}
					><ChartPie /><span>Allocation</span></a
				>
				<a href="/recommendations" on:click={() => sidebar.set(false)}
					><Rocket /><span>Recommendations</span></a
				>
			</div>
			<div class="bottom">
				<a href="/settings" on:click={() => sidebar.set(false)}><Stack /><span>Settings</span></a>
				<a href="/profile" on:click={() => sidebar.set(false)}><Gauge /><span>Profile</span></a>
				<a href="/logout" on:click={() => sidebar.set(false)}><Harvest /><span>Logout</span></a>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.sidebar {
		@apply fixed z-40 right-0 w-64 p-4;
		/* make a 20px border shadow only on the left */
		box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5);

		height: calc(100vh - var(--navbar-height));
		top: --var(--navbar-height);
		background-color: var(--bg-3);
		color: var(--text);
	}
	.content {
		@apply relative  h-full;
	}
	.top {
		@apply absolute top-0 w-full space-y-1;
	}
	.bottom {
		@apply absolute bottom-0 w-full pt-3 space-y-0;
		border-top: 1px solid #ccc;
	}
	.top,
	.bottom {
		@apply flex flex-col;
	}

	a {
		@apply p-3  w-full flex flex-row items-center font-semibold rounded-lg;
	}
	a:hover {
		background-color: var(--bg-1);
	}
	span {
		@apply ml-2;
	}
</style>
