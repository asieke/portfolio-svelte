<script lang="ts">
	import { sidebar } from '$lib/stores';
</script>

<div class="sidebar {$sidebar ? '-left-64' : 'left-0 shadow-right'}">
	Sidebar
	<div class="profile" />
</div>

<style>
	.shadow-right {
		box-shadow: 5px 0px 5px rgba(0, 0, 0, 0.3);
	}
</style>
