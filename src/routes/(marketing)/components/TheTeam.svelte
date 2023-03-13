<script>
	import { orgChart, investors } from '../lib/data';

	console.log(investors);
</script>

<div class=" text-gray-500 sm:text-lg ">
	<h2 class="my-10 text-4xl tracking-tight font-bold text-gray-900">The Team</h2>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6"
	>
		{#each orgChart as person}
			<div class="relative flex flex-col items-center bg-slate-100 rounded-xl p-4 shadow-md">
				<img
					src={`images/team/${person.img}.png`}
					alt={person.name}
					class="w-24 h-24 sm:w-40 sm:h-40 rounded-full"
				/>
				<h3 class="mt-4 text-lg font-medium text-gray-900">{person.name}</h3>
				<p class="text-sm text-gray-500 pb-3">{person.title}</p>

				<p class="text-xs text-gray-500 text-center mb-8">{person.priorWork}</p>
				<p class="absolute bottom-4 font-bold text-xs text-gray-500 text-center">
					{person.companies}
				</p>
			</div>
		{/each}
	</div>

	<h2 class="my-10 text-4xl tracking-tight font-bold text-gray-900">Our Investors</h2>

	<div
		class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6"
	>
		{#each investors as investor, i}
			<div class="relative flex flex-col items-center bg-slate-100 rounded-xl p-4 shadow-md">
				<img
					src={`images/team/inv${i}.png`}
					alt={investor.name}
					class="w-24 h-24 sm:w-40 sm:h-40 rounded-full"
				/>
				<h3 class="mt-4 text-lg font-medium text-gray-900">{investor.name}</h3>
				<p class="text-sm text-gray-500 pb-3">{investor.areaOfFocus}</p>

				<p class="text-xs text-gray-500 text-center mb-8">{investor.description}</p>
			</div>
		{/each}
	</div>
</div>
