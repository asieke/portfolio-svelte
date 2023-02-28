<script lang="ts">
	import { sidebarCollapsed } from '$lib/stores';
	import { ChartPie, ArrowLeft, Gauge, Stack, Harvest, Rocket } from '$components/svg';
	import SidebarLink from '$components/SidebarLink.svelte';

	//toggle sidebarCollapsed
	const toggleCollapsed = () => {
		console.log($sidebarCollapsed);
		sidebarCollapsed.set(!$sidebarCollapsed);
	};

	//{!$sidebarCollapsed ? '' : '-ml-[176px]'}
</script>

<div class="sidebar {!$sidebarCollapsed ? '' : '-ml-[176px]'}">
	<div class="px-2 pt-4 pb-8">
		<ul class="space-y-2">
			<SidebarLink href="/dashboard" name="Dashboard" notifications={17}><Gauge /></SidebarLink>
			<SidebarLink href="/accounts" name="Accounts" notifications={0}><Stack /></SidebarLink>
			<SidebarLink href="/allocation" name="Asset Allocation" notifications={3}
				><ChartPie /></SidebarLink
			>
			<SidebarLink href="/taxes" name="Tax Loss Harvesting" notifications={3}
				><Harvest /></SidebarLink
			>
			<SidebarLink href="/planning" name="Planning" notifications={3}><Rocket /></SidebarLink>
		</ul>
	</div>
	<div class="profile">
		<button on:click={toggleCollapsed}
			><ArrowLeft class="{$sidebarCollapsed ? 'rotate-180' : ''} h-4 w-4" /></button
		>
	</div>
</div>

<style>
	button {
		@apply outline-none p-1 right-4 bottom-4 absolute;
		background-color: var(--bg-3);
		color: var(--text);
	}
</style>
