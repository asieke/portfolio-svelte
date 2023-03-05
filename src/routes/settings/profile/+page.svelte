<script lang="ts">
	import { page } from '$app/stores';
	import { Spinner } from '$components/svg';
	import { supabase } from '$lib/supabaseClient';
	import { userStore } from '$lib/stores';

	$: loading = false;

	let formUser = {
		id: $userStore.id,
		full_name: $userStore.full_name,
		username: $userStore.username,
		dob: $userStore.dob
	};

	const checkForm = async () => {
		try {
			loading = true;
			let { error } = await supabase.from('profiles').upsert(formUser);
			if (error) throw error;

			let merged = Object.assign({}, $userStore, formUser);
			userStore.set(merged);
		} catch (error) {
			if (error instanceof Error) {
				console.error(error.message);
			}
		} finally {
			loading = false;
		}
	};
</script>

<form on:submit|preventDefault={checkForm}>
	<div class="form ">
		<!-- Create a grid system with 2 columns -->

		<div class="">
			<label for="" class="flex flex-col">Full Name</label>
			<input type="text" placeholder="Alex Sieke" bind:value={formUser.full_name} required />
		</div>
		<div class="flex flex-col">
			<label for="" class="">username</label>
			<input type="text" placeholder="batman142" bind:value={formUser.username} required />
		</div>
		<div class="flex flex-col">
			<label for="" class="">Date of Birth</label>
			<input type="date" placeholder="Doe" bind:value={formUser.dob} required />
		</div>
		<div class="col-span-2">
			<button
				type="submit"
				class="flex flex-row space-x-1 justify-center {loading ? 'opacity-100' : 'opacity-90'}"
				disabled={loading}
			>
				{#if loading}
					<Spinner /><span>saving</span>
				{:else}
					<span>Save Profile</span>
				{/if}
			</button>
		</div>
	</div>
</form>

<style lang="postcss">
	.form {
		@apply flex flex-col w-full;
		color: var(--text);
	}

	label {
		@apply text-xs font-semibold px-1 pb-2;
	}

	input[type='text'],
	input[type='date'] {
		@apply w-80 p-2 mb-4 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-slate-600;
	}

	button {
		@apply p-3 rounded-lg border-2 border-gray-200 outline-none text-white font-semibold text-sm mt-6;
		background-color: var(--brand);
		width: 50%;
	}
</style>
