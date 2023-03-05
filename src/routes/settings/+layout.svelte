<script>
	import { page } from '$app/stores';
	import { LinksSettings } from '$components';
	import { userStore } from '$lib/stores';

	const { user } = $page.data;
</script>

<div class="grid min-w-0 min-h-0 grid-cols-1 sm:grid-cols-[200px_1fr] py-3 px-8">
	<div class="title col-span-2">
		<h1 class="font-bold text-3xl">{$userStore.full_name}</h1>
		<p class="">{user.email}</p>
	</div>
	<div class="settings-sidebar left sm:flex hidden pt-2 bg-green-400">
		<LinksSettings />
	</div>
	<div class="right mt-4"><slot /></div>
</div>

<style lang="postcss">
	.left {
		@apply w-full;
		color: var(--text);
		background-color: var(--bg-4);
	}
	.right {
		@apply w-full;
		background-color: var(--bg-4);
	}

	.title {
		@apply col-span-2 pb-3;
		border-bottom: 1px solid #ccc;
	}
</style>
