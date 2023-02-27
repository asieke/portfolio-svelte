<script lang="ts">
	import { sidebarCollapsed } from '$lib/stores';

	export let href: string;
	export let name: string;
	export let notifications = 0;
</script>

<li class="relative flex h-12 justify-end">
	<a {href} class={$sidebarCollapsed ? 'w-16' : 'w-full'}>
		<div class="icon {$sidebarCollapsed ? 'left-[196px]' : 'left-2'}">
			<slot />
		</div>
		<div class="name {$sidebarCollapsed ? 'opacity-0' : 'opacity-100'}">
			{name}
		</div>
		<div class="notif {$sidebarCollapsed ? 'opacity-0' : 'opacity-100'}">{notifications}</div>
	</a>
</li>

<style>
	a {
		@apply flex rounded cursor-pointer font-normal;
		color: var(--text);
	}
	a:hover {
		background-color: var(--bg-sidebar-item);
	}

	.name {
		@apply absolute left-10 h-full flex items-center transition-all duration-300 ease-in-out;
	}

	.icon {
		@apply absolute h-full flex items-center transition-all duration-500 ease-in-out;
	}

	.notif {
		@apply bg-sky-500 text-gray-100 font-bold px-2 py-1 text-xs rounded-full absolute right-0 h-6 my-3 mr-3 transition-all duration-300 ease-in-out;
	}
</style>
