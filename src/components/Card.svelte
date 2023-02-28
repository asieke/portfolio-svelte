<script lang="ts">
	import type { CardProps } from '$lib/shared/types';

	export let card: CardProps;

	const { title, href, linkText, description, img: src } = card;
</script>

<div class="container">
	<img class="rounded-t-lg" {src} alt="" />
	<div class="p-5">
		<a {href}>
			<h5 class="mb-2 text-2xl font-bold tracking-tight ">HEYYYY</h5>
		</a>
		<p class="mb-3 font-normal ">
			{description}
		</p>
		<a
			{href}
			class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>
			{linkText}
			<svg
				aria-hidden="true"
				class="w-4 h-4 ml-2 -mr-1"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</a>
	</div>
</div>

<style>
	.container {
		@apply bg-white rounded-lg shadow;
		color: var(--text);
		background-color: var(--bg-5);
	}

	p,
	h5 {
		color: var(--text);
	}
</style>
