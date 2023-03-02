<script lang="ts">
	import { DataTable, Block } from '$components';

	const data = [
		{ name: 'John', age: 32, email: 'john@example.com', selected: false },
		{ name: 'Jane', age: 28, email: 'jane@example.com', selected: false },
		{ name: 'Bob', age: 45, email: 'bob@example.com', selected: false }
	];
</script>

<!-- <div class="flex flex-col flex-wrap">
	<Block>
		<DataTable {data} />
	</Block>
	<Block>
		<DataTable {data} />
	</Block>
</div> -->

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
	<div class="col-span-2 sm:col-span-1 ">
		<Block>
			<DataTable {data} />
		</Block>
	</div>
	<div class="col-span-2 sm:col-span-1 ">
		<Block>
			<DataTable {data} />
		</Block>
	</div>
	<div class="col-span-2 ">
		<Block>
			<DataTable {data} />
		</Block>
	</div>
</div>
