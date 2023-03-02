<script lang="ts">
</script>

<div class="content ">
	<slot />
</div>

<style>
	.content {
		@apply p-6 transition-all duration-150 ease-in-out min-w-full;
		/* background-color: var(--bg-4); */
		color: var(--text);
		margin-top: var(--navbar-height);
	}
</style>
