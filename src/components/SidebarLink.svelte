<script lang="ts">
	import { setDocumentClass } from '$lib/shared/globals';
	import { sidebarCollapsed, sidebarShowing, mobile } from '$lib/stores';

	const toggleSidebarOnlyOnMobile = () => {
		if ($mobile) {
			sidebarShowing.set(false);
			setDocumentClass($sidebarShowing, $sidebarCollapsed, $mobile);
		}
	};

	export let href: string;
	export let name: string;
	export let notifications = 0;
</script>

<li class="relative flex h-12 justify-end">
	<a {href} on:click={toggleSidebarOnlyOnMobile} data-sveltekit-preload-code>
		<div class="icon">
			<slot />
		</div>
		<div class="name">
			{name}
		</div>
		<div class="notif">{notifications}</div>
	</a>
</li>

<style>
	a {
		@apply flex rounded cursor-pointer font-normal;
		width: var(--link-width);
		color: var(--text);
	}
	a:hover {
		background-color: var(--bg-1);
	}

	.name {
		@apply absolute left-10 h-full flex items-center transition-all duration-150 ease-in-out;
		opacity: var(--item-opacity);
	}

	.icon {
		@apply absolute h-full flex items-center transition-all duration-150 ease-in-out;
		left: var(--icon-left);
	}

	.notif {
		@apply bg-sky-500 text-gray-100 font-bold px-2 py-1 text-xs rounded-full absolute right-0 h-6 my-3 mr-3 transition-all duration-150 ease-in-out;
		opacity: var(--item-opacity);
	}
</style>
