<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let close: () => void;
	export let width = 50;
	export let height = 50;
	export let dismissable = true;

	const dismiss = () => {
		if (dismissable) {
			close();
		}
	};

	let style = `width: ${width}%; height: ${height}%; top: ${(100 - height) / 4}%;`;
</script>

<button class="modalScreen" on:click={dismiss} in:fade={{ duration: 200 }} />
<div id="modal" {style} in:fade={{ duration: 200, delay: 50 }}>
	<button class="close" on:click={dismiss}>x</button>
	<slot />
</div>

<style lang="postcss">
	#modal {
		@apply fixed rounded p-6 shadow-xl z-50 transition-all duration-150 ease-in-out;
		background-color: var(--bg-3);
		left: 50%;
		transform: translate(-50%, 0%);
	}

	.modalScreen {
		@apply fixed top-0 left-0 w-full h-full bg-black z-50 opacity-80 transition-all duration-150 ease-in-out cursor-default;
	}

	.close {
		@apply absolute top-0 right-0 m-6 p-2 w-8 h-8 flex items-center justify-center font-bold opacity-80 hover:opacity-100 rounded-md;
		background-color: var(--bg-1);
		color: var(--text);
	}
</style>
