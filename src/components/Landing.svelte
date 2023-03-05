<script lang="ts">
	import { Auth, Modal } from '$components';
	import { page } from '$app/stores';

	$: showing = false;

	const close = () => {
		showing = false;
	};
	const open = () => {
		showing = true;
	};
</script>

<div class="p-8 space-y-5">
	<h1 class="text-3xl">Hello there this is the landing page</h1>
	<button on:click={open} class="bg-blue-300 p-4">Open Modal</button>
</div>

{#if showing}
	<Modal {close} width={40} height={30}>
		<Auth />
	</Modal>
{/if}
