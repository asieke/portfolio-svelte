<script lang="ts">
	import { Email, Rocket, Sun, Star } from '$components/svg';
	export let callback = () => {};
</script>

<ul>
	<li><a href="/settings" on:click={callback}><Email /><span>Settings</span></a></li>
	<li><a href="/settings/profile" on:click={callback}><Rocket /><span>Profile</span></a></li>
	<li><a href="/settings/accounts" on:click={callback}><Sun /><span>Accounts</span></a></li>
	<li>
		<a href="/settings/assets" on:click={callback}><Email /><span>Asset Classification</span></a>
	</li>
	<li><a href="/settings/tax" on:click={callback}><Star /><span>Tax Settings</span></a></li>
</ul>
