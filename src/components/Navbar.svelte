<script lang="ts">
	import { sidebar } from '$lib/stores';
	import { Hamburger, Logo } from '$components/svg/';

	function toggleSidebar() {
		sidebar.set(!$sidebar);
	}
</script>

<div class="nav">
	<div class="transition-all duration-500 ease-in-out sm:-mr-24 m-0">
		<button on:click={() => toggleSidebar()}><Hamburger /></button>
	</div>
</div>
