<script lang="ts">
	import { onMount } from 'svelte';

	export let data: any = [];
	let sortedColumn: string = '';
	let sortDirection: number = 1;

	$: temp = data;

	const sortData = (column: string) => {
		if (sortedColumn === column) {
			sortDirection = -sortDirection;
		} else {
			sortedColumn = column;
			sortDirection = 1;
		}
		data.sort((a: any, b: any) => (a[column] > b[column] ? sortDirection : -sortDirection));
		temp = data;
	};
</script>

<table>
	<thead>
		<tr>
			{#each Object.keys(data[0]) as header}
				<th
					class="p-3 {sortedColumn === header ? 'bg-blue-500' : ''}"
					on:click={() => sortData(header)}
				>
					<span>{header}</span>
				</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each temp as item}
			<tr>
				{#each Object.values(item) as value}
					<td>{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		@apply border-collapse border border-gray-400 w-full text-sm;
	}

	td,
	th {
		@apply p-2 border-collapse border text-left;
	}
</style>
