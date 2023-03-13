<script>
	import { handleLogin } from '$lib/supabaseClient';
	let email = '';
	let submitted = false;

	const onClick = async () => {
		handleLogin(email);
		submitted = true;
	};
</script>

<div class="isolate">
	<main>
		<div class="relative px-6 lg:px-8">
			<div class="mx-auto max-w-2xl pt-16 sm:py-32 lg:py-48">
				<div class="text-center">
					<div class="flex flex-row justify-center items-center pb-16">
						<img src="/logo.png" class="w-12" alt="Portfolio Labs Logo" />
						<span class="text-3xl tracking-tight font-bold text-gray-900 ">Portfolio Labs</span>
					</div>
					<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
						Professional Grade Portfolio Insights
					</h1>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Get the insights you need to make better investment decisions.
					</p>
					<div class="mt-10 flex flex-col items-center justify-center gap-x-6">
						{#if !submitted}
							<input
								type="text"
								bind:value={email}
								placeholder="Email"
								class="w-96 p-4 border text-center border-blue-100 text-slate-600 font-semibold text-lg rounded-lg shadow-sm"
							/>
							<button
								on:click={onClick}
								class="rounded-md bg-indigo-600 w-96 mt-6 px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Get started</button
							>
						{:else}
							<p class="text-lg text-gray-600">Check your email for a login link.</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</main>
</div>
