<script lang="ts">
	import Lorem from '$components/Lorem.svelte';
	let temp = '';
	for (let i = 0; i < 1000; i++) {
		temp += i + ', ';
	}
</script>

<h1>The Accounts</h1>
{temp}
