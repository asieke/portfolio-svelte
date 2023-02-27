<script lang="ts">
	import { sidebarCollapsed } from '$lib/stores';
</script>

<div class="content {$sidebarCollapsed ? 'sm:pl-24' : 'sm:pl-[290px]'} pl-6">
	<slot />
</div>
