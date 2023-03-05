<script lang="ts">
	import { supabase } from '$lib/supabaseClient';
	import { Email } from '$components/svg';

	let loading = false;
	let submitted = false;
	let email: string;
	let errorMessage: null | string = null;

	const handleLogin = async () => {
		loading = true;
		const { data, error } = await supabase.auth.signInWithOtp({
			email,
			options: {
				// set emailRedirectTo environment variable for app URL

				emailRedirectTo: `${window.location.origin}/dashboard`
			}
		});
		loading = false;
		submitted = true;
	};
</script>

<div class="form">
	{#if !submitted}
		<form class="row flex-center flex" on:submit|preventDefault={handleLogin}>
			<div class="space-y-4 w-full">
				<h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl ">
					Sign in to your account
				</h1>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium ">Your email</label>
					<input
						class="inputField  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
						type="email"
						name="email"
						id="email"
						placeholder="Your email"
						minlength="7"
						bind:value={email}
					/>
				</div>
				<div>
					<input
						type="submit"
						disabled={loading}
						value={loading ? 'Loading' : 'Send magic link'}
						class="inputButton w-full text-white bg-blue-500 hover:bg-blue-700 cursor-pointer focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
					/>
					{#if errorMessage}<div class="error">Please check email and try again</div>{/if}
				</div>
			</div>
		</form>
	{:else}
		<div class="w-full text-center flex flex-col justify-center items-center">
			<h1 class="text-xl font-semibold">Check your email</h1>
			<div class="wiggle h-8 w-8 mt-4">
				<Email class="h-8 w-8" />
			</div>
			<p class="mt-4 leading-7">We are sending a Magic Link to asieke@gmail.com</p>
		</div>
	{/if}
</div>

<style lang="postcss">
	.form {
		color: var(--text);
	}

	.inputField {
		background-color: var(--bg-5);
	}

	.inputButton {
		background-color: var(--info);
	}

	.error {
		@apply text-sm font-medium pt-3;
		color: var(--accent);
	}

	@keyframes wiggle {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(5deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-5deg);
		}
		100% {
			transform: (-5deg);
		}
	}

	.wiggle {
		animation: wiggle 1s infinite;
	}
</style>
