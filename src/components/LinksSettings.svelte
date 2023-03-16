<script lang="ts">
	import { Email, Rocket, Sun, Star } from '$components/svg';
	export let callback = () => {};
	export let selected: string;

	const hrefs = [
		'/settings',
		'/settings/profile',
		'/settings/accounts',
		'/settings/assets',
		'/settings/tax'
	];

	$: classes = hrefs.map((href) => (selected === href ? 'selected' : ''));
</script>

<ul class="w-full mt-2">
	<li>
		<a href={hrefs[0]} class={classes[0]} on:click={callback}><Email /><span>Settings</span></a>
	</li>
	<li>
		<a href={hrefs[1]} class={classes[1]} on:click={callback}><Rocket /><span>Profile</span></a>
	</li>
	<li>
		<a href={hrefs[2]} class={classes[2]} on:click={callback}><Sun /><span>Accounts</span></a>
	</li>
	<li>
		<a href={hrefs[3]} class={classes[3]} on:click={callback}
			><Email /><span>Asset Classification</span></a
		>
	</li>
	<li>
		<a href={hrefs[4]} class={classes[4]} on:click={callback}><Star /><span>Tax Settings</span></a>
	</li>
</ul>

<style>
	.selected {
		background-color: var(--accent);
	}
</style>
