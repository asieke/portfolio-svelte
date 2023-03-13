<script lang="ts">
	const links: { [key: string]: string } = {
		'about/': 'About Us',
		'blog/': 'Blog',
		'about/privacy': 'Privacy Policy',
		'about/terms': 'Terms of Service',
		'about/faq': 'FAQs'
	};
</script>

<footer class="p-4 bg-gray-800 md:p-8 lg:p-10 bottom-0 w-full">
	<div class="mx-auto max-w-screen-xl text-center">
		<a href="/" class="flex justify-center items-center text-2xl font-semibold text-white">
			<img src="/logo.png" alt="logo" class="w-8 h-8 mr-2" />
			<span>Portfolio Labs</span>
		</a>
		<p class="my-6 text-gray-400">Open Framework for Financial Analysis</p>
		<ul class="flex flex-wrap justify-center items-center mb-6 text-white">
			{#each Object.keys(links) as href}
				<li><a {href}>{links[href]}</a></li>
			{/each}
		</ul>
		<span class="text-sm sm:text-center text-gray-400"
			>© 2022-2023 <a href="/" class="hover:underline">Portfolio Labs™</a>. All Rights Reserved.</span
		>
	</div>
</footer>

<style lang="postcss">
	li > a {
		@apply mr-4 hover:underline md:mr-6;
	}
</style>
