<script lang="ts">
	import { Modal } from '$components';

	let modalShowing = false;

	const close = () => {
		modalShowing = false;
	};

	const open = () => {
		console.log('opening modal');
		modalShowing = true;
	};
</script>

<h1>Taxes</h1>

<button class="p-4 bg-black text-white" on:click|stopPropagation={open}>Show Modal</button>

{#if modalShowing}
	<Modal {close}>
		<h1>Modal</h1>
	</Modal>
{/if}
