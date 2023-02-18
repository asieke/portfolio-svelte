<script lang="ts">
	let showing = false;

	const toggle = () => {
		showing = !showing;
		console.log(showing);
	};
</script>

<div class="fixed top-0 left-0 z-10 h-16 w-full bg-slate-700 flex flex-row-reverse">
	<div class="fixed right-4 top-4 flex items-center">
		<button
			type="button"
			on:click={toggle}
			class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
		>
			<img class="w-8 h-8 rounded-full" src="logo.png" alt="user" />
		</button>
	</div>
</div>

<div
	class="fixed {showing
		? 'top-14'
		: '-top-64'} right-4 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
>
	<div class="px-4 py-3">
		<span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
		<span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
			>name@flowbite.com</span
		>
	</div>
	<ul class="py-2">
		<li>
			<a href="#">Dashboard</a>
		</li>
		<li>
			<a href="#">Settings</a>
		</li>
		<li>
			<a href="#">Earnings</a>
		</li>
		<li>
			<a href="#" class="">Sign out</a>
		</li>
	</ul>
</div>

<style lang="postcss">
	a {
		@apply block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white;
	}

	div {
		@apply transition-all duration-100 ease-in-out;
	}
</style>
