<script lang="ts">
	export let href: string;
	export let name: string;
	export let notifications = 0;
	export let selected = false;

	$: bg = selected ? 'bg-slate-900 text-blue-600' : 'bg-transparent text-gray-500';
</script>

<li>
	<a {href}>
		<span class="container">
			<slot />
			<span>{name}</span>
		</span>
		{#if notifications > 0}
			<span class="notif">{notifications}</span>
		{/if}
	</a>
</li>

<style>
	a {
		@apply flex items-center justify-between py-1.5 px-4 rounded cursor-pointer font-normal;
		color: var(--text);
	}
	a:hover {
		background-color: var(--bg-sidebar-item);
	}

	span.container {
		@apply flex items-center space-x-2;
	}

	span.notif {
		@apply bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg;
	}
</style>
