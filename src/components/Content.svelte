<script lang="ts">
</script>

<div class="content ">
	<slot />
</div>

<style lang="postcss">
	.content {
		@apply py-8 px-6 sm:px-12 transition-all duration-150 ease-in-out max-w-5xl mx-auto;
		color: var(--text);
		margin-top: var(--navbar-height);
	}
</style>
