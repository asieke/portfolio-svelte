<script lang="ts">
	import { sidebar } from '$lib/stores';
	import theme from '$lib/stores/themeStore';

	function toggleTheme() {
		if ($theme === 'dark') {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			theme.set('light');
		} else {
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			theme.set('dark');
		}
	}
</script>

<div
	class="sidebar {$sidebar
		? '-left-64'
		: 'left-0'} sm:left-0 transition-all duration-500 ease-in-out"
>
	Sidebar
	<div class="profile">
		<button on:click={() => toggleTheme()}>Theme</button>
	</div>
</div>
