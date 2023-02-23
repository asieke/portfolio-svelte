<script lang="ts">
	import { sidebar } from '$lib/stores';
	import { Dashboard, Star } from '$components/svg';
	import SidebarLink from '$components/SidebarLink.svelte';
</script>

<div class="sidebar {$sidebar ? '-left-64' : 'left-0 shadow-right'}">
	<div class="px-2 pt-4 pb-8 ">
		<ul class="space-y-2">
			<SidebarLink href="/stars" name="Dashboard" notifications={17} selected><Star /></SidebarLink>
			<SidebarLink href="/dashboard" name="Dashboard" notifications={3}><Dashboard /></SidebarLink>
			<SidebarLink href="/dashboard" name="Dashboard" notifications={3}><Dashboard /></SidebarLink>
		</ul>
	</div>
	<div class="profile">
		<div class="p-2 ">
			<ul class="space-y-2">
				<SidebarLink href="/stars" name="Log Out"><Star /></SidebarLink>
			</ul>
		</div>
	</div>
</div>

<style>
	.shadow-right {
		box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.3);
	}
</style>
