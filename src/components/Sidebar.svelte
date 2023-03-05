<script lang="ts">
	import { sidebar } from '$lib/stores';
	import { fly } from 'svelte/transition';
	import { LinksSettings, LinksMain } from '$components';

	let options = { duration: 250, opacity: 1, x: 256 };
</script>

{#if $sidebar}
	<div id="sidebar" class="sidebar sm:hidden" transition:fly={options}>
		<div class="content">
			<div class="top">
				<LinksMain callback={() => sidebar.set(false)} />
			</div>
			<div class="bottom">
				<LinksSettings callback={() => sidebar.set(false)} />
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.sidebar {
		@apply fixed z-40 right-0 w-64;
		/* make a 20px border shadow only on the left */
		box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5);

		height: calc(100vh - var(--navbar-height));
		top: --var(--navbar-height);
		background-color: var(--bg-3);
		color: var(--text);
	}

	.top {
		@apply absolute top-0 w-full pt-3;
	}

	.bottom {
		@apply absolute bottom-0 w-full pb-3;
	}
</style>
