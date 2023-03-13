<script lang="ts">
	import { page } from '$app/stores';
	/** @type {import('./$types').PageData} */
	export let data: any;

	//Get the params from the url

	const { data: posts } = data;
	// const tag = $page.params.tag;
	// extract the value between the ? and the = in the url
	const query = decodeURIComponent($page.url.search.split('=')[1]);
	// replace special url characters

	const tags = posts.map((post: any) =>
		post.tags.map(
			(tag: string) => `<a class='mx-1 hover:underline' href="/blog?tag=${tag}">${tag}</a>`
		)
	);

	console.log(tags);
</script>

<div class="max-w-3xl mx-auto p-3 rounded-md ">
	<h1 class="font-extrabold mt-8 tracking-tight text-5xl text-center text-slate-900">
		Portfolio Labs Blog
	</h1>
	<p class="font-light text-slate-700 text-center m-8 pb-8">
		Get a handle on your finances with our expert advice and insights into the world of financial
		services. Discover the latest trends, strategies, and solutions to achieve your financial goals
		and secure your future.
	</p>

	{#each posts as post, i}
		<article class="p-8 bg-white rounded-lg border-gray-200 mb-8">
			<div class="flex justify-between items-center mb-5 text-gray-500">
				<span
					class="bg-primary-100 -ml-3 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
					>{@html tags[i].join(' | ')}</span
				>
				<span class="text-sm">{post.readableDate}</span>
			</div>
			<h2 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 ">
				<a href={`/blog/${post.id}`}>{post.title}</a>
			</h2>
			<p class="mb-5 font-light text-gray-500 dark:text-gray-400 leading-7">
				Static websites are now used to bootstrap lots of websites and are becoming the basis for a
				variety of tools that even influence both web designers and developers influence both web
				designers and developers.
			</p>
			<div class="flex justify-between items-center">
				<div class="flex items-center space-x-4">
					<img class="w-7 h-7 rounded-full" src="/images/team/ceo.png" alt="Jese Leos avatar" />
					<span class="font-medium">{post.author}</span>
				</div>
				<a
					href={`/blog/${post.id}`}
					class="inline-flex items-center font-medium text-primary-600 hover:underline"
				>
					Read more →
				</a>
			</div>
		</article>
	{/each}
</div>

<style>
</style>
