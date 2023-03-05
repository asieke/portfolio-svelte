<script lang="ts">
	let tempClass = '';
	export { tempClass as class };
</script>

<div class={tempClass}>
	<slot />
</div>

<style>
	div {
		@apply rounded-lg w-full;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
	}
</style>
