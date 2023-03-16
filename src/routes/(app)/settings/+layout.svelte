<script>
	import { page } from '$app/stores';
	import { LinksSettings } from '$components';
	import { userStore } from '$lib/stores';

	const { user } = $page.data;

	$: url = $page.url.pathname;
</script>

<div class="grid min-w-0 min-h-0 grid-cols-1 sm:grid-cols-[200px_1fr] gap-6">
	<!-- <div class="title col-span-2">
		<h1 class="font-bold text-xl">{$userStore.full_name}</h1>
		<p class="text-sm">{user.email}</p>
		<p class="text-sm">{url}</p>
	</div> -->
	<div class="settings-sidebar left sm:flex hidden  py-2 px-3">
		<LinksSettings selected={url} />
	</div>
	<div class="right p-6"><slot /></div>
</div>

<style lang="postcss">
	.left,
	.right {
		@apply w-full ring-slate-200 shadow ring-1 rounded text-xs;
		color: var(--text);
	}

	/* .title {
		@apply col-span-2 pb-3;
		border-bottom: 1px solid #ccc;
	} */
</style>
