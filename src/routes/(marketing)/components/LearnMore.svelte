<script lang="ts">
	type Data = {
		title: string;
		paragraphs: string[];
		href: string;
	};

	export let data: Data = {
		title: '',
		paragraphs: [],
		href: ''
	};

	const { title, paragraphs, href } = data;
</script>

<div class="max-w-screen-lg text-gray-500 sm:text-lg ">
	<h2 class="my-10 text-4xl tracking-tight font-bold text-gray-900">
		{title}
	</h2>
	{#each paragraphs as paragraph}
		<p class="mb-4 font-light">{paragraph}</p>
	{/each}
	<a {href} class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800">
		Learn more >
	</a>
</div>
