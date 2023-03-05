<script lang="ts">
	import { Email } from '$components/svg';
	export let svgclass = 'block sm:hidden w-5 h-5';
	export let callback = () => {};
</script>

<ul>
	<li>
		<a href="/dashboard" on:click={callback}> <Email class={svgclass} /><span>Dashboard</span></a>
	</li>
	<li>
		<a href="/allocation" on:click={callback}> <Email class={svgclass} /><span>Allocation</span></a>
	</li>
	<li>
		<a href="/recommendations" on:click={callback}>
			<Email class={svgclass} /><span>Recommendations</span></a
		>
	</li>
</ul>
