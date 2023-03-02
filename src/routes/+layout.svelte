<script lang="ts">
	import '../app.css';
	import { Navbar, Content } from '$components';
</script>

<container>
	<Navbar />
	<Content>
		<slot />
	</Content>
</container>

<svelte:head>
	<script>
		if (window) {
			const localTheme = window.localStorage.getItem('theme') || 'dark';
			document.documentElement.classList.add(localTheme);
		}
	</script>
</svelte:head>
