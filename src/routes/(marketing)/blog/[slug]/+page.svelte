<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data: any;

	const date = new Date(data.date);
	const readableDate = date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
</script>

<div class="blog-post">
	<time datetime={data.date} class="text-slate-500 font-light">{readableDate}</time>
	<h1 class="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl mt-2 mb-4">
		{data.title}
	</h1>
	<div class="flex flex-row mt-3 mb-8">
		<img src="/images/team/ceo.png" alt="author" class="w-12 h-12 rounded-full" />
		<div class="flex flex-col ml-3">
			<span class="text-slate-700 font-semibold">Alex Sieke</span>
			<span class="text-blue-400 font-light text-sm">@asieke</span>
		</div>
	</div>

	<div class="md">
		{@html data.html}
	</div>
</div>

<style>
	.blog-post {
		@apply max-w-3xl mx-auto p-8;
	}
</style>
