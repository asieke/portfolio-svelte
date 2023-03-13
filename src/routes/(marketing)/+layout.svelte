<script lang="ts">
	import '$styles/marketing.css';
	import { Banner, Footer } from './components';
</script>

<div class="marketing-container flex flex-col min-h-screen">
	<Banner />
	<main class="flex-grow">
		<slot />
	</main>
	<footer class="mt-auto">
		<Footer />
	</footer>
</div>

<style>
	.marketing-container {
		z-index: 1;
		backdrop-filter: blur(100px);
	}

	.marketing-container::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/bg.png');
		opacity: 0.1;
		@apply blur-3xl;
		z-index: -1;
	}
</style>
