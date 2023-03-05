<script lang="ts">
	import { page } from '$app/stores';
	import { supabase } from '$lib/supabaseClient';

	const { user } = $page.data;

	let formUser = {
		id: user.id,
		full_name: user.full_name,
		username: user.username,
		dob: user.dob,
		accepted_tos: user.accepted_tos
	};

	const checkForm = async () => {
		try {
			let { error } = await supabase.from('profiles').upsert(formUser);

			if (error) throw error;
			else {
				location.reload();
			}
		} catch (error) {
			if (error instanceof Error) {
				alert(error.message);
			}
		}
	};
</script>

<form on:submit|preventDefault={checkForm}>
	<div class="main">
		<div class="form">
			<div class="left"><img src="/signup.svg" alt="signup" /></div>
			<div class="right">
				<div class="mb-10">
					<h1 class="font-bold text-3xl text-center">REGISTER</h1>
					<p class="text-center">Enter your information to register</p>
					<!-- Create a grid system with 2 columns -->
					<div class="grid grid-cols-2 gap-4 mt-5">
						<div class="col-span-2 flex flex-col">
							<label for="" class="">email</label>
							<span class="opacity-50 text-sm p-1">{user.email}</span>
						</div>
						<div class="col-span-2">
							<label for="" class="">Full Name</label>
							<input
								type="text"
								placeholder="Alex Sieke"
								bind:value={formUser.full_name}
								required
							/>
						</div>
						<div class="col-span-2">
							<label for="" class="">username</label>
							<input type="text" placeholder="batman142" bind:value={formUser.username} required />
						</div>
						<div class="col-span-2">
							<label for="" class="">Date of Birth</label>
							<input type="date" placeholder="Doe" bind:value={formUser.dob} required />
						</div>
						<div class="col-span-2 flex flex-row items-center">
							<input
								type="checkbox"
								id="terms"
								name="terms"
								bind:checked={formUser.accepted_tos}
								required
							/>
							<span class="text-xs opacity-70 ml-1">I agree to Portfolio Labs Terms of service</span
							>
						</div>
						<div class="col-span-2">
							<button type="submit">Complete Registration</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</form>

<style lang="postcss">
	.main {
		@apply m-0;
		padding: 5% 10% 10% 10%;
		height: 100vh;
		width: 100vw;
		background-color: var(--bg-nav);
	}

	label {
		@apply text-xs font-semibold px-1;
	}

	input[type='checkbox'] {
		@apply h-5 w-5 ml-1;
	}

	input[type='text'],
	input[type='date'] {
		@apply w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 text-slate-600;
	}

	.form {
		@apply w-full h-full rounded-l-2xl rounded-r-2xl flex flex-row shadow-xl;
		color: var(--text);
	}

	.left {
		@apply w-1/2 hidden md:flex rounded-l-2xl p-16 align-middle justify-center;
		background-color: var(--brand);
	}
	.right {
		@apply w-full md:w-1/2 rounded-l-2xl md:rounded-l-none rounded-r-2xl p-8;
		background-color: var(--bg-3);
	}
	p {
		opacity: 0.7;
	}
	button {
		@apply w-full p-3 rounded-lg border-2 border-gray-200 outline-none text-white font-semibold text-sm;
		background-color: var(--brand);
	}
</style>
