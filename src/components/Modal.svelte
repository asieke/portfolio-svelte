<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let close: () => void;

	// onmount add a handler that closes the component whenever the user clicks outside
	onMount(() => {
		const handleClick = (event: Event) => {
			console.log('handling the click');
			const target = event.target as HTMLElement;
			//if the click is not in id=modal then call close
			if (!target.closest('#modal')) {
				close();
			}
		};

		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
</script>

<div class="modalScreen" transition:fade={{ duration: 200 }} />
<div id="modal" transition:fade={{ duration: 500, delay: 200 }}>
	<button class="close" on:click={close}>x</button>
	<slot />
</div>

<style>
	#modal {
		@apply fixed w-3/4 h-1/2 rounded p-6 shadow-xl z-50 transition-all duration-150 ease-in-out;
		background-color: var(--bg-3);
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.modalScreen {
		@apply fixed top-0 left-0 w-full h-full bg-black z-50 opacity-80 transition-all duration-150 ease-in-out;
	}

	.close {
		@apply absolute top-0 right-0 m-6 p-2 bg-blue-600 w-8 h-8 flex items-center justify-center font-bold;
	}
</style>
