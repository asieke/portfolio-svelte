<script lang="ts">
	import { LearnMore, TheTeam } from '../components';

	let temp = {
		title: 'Open Financial Models for All',
		paragraphs: [
			`At Portfolio Labs, we're passionate about democratizing access to powerful financial tools and insights. We believe that everyone should have the ability to manage their investmentswith transparency, accuracy, and efficiency.`,
			`We understand that the financial landscape can be complex and intimidating, which is why we've made it our mission to simplify the process and empower our users with the tools they need to succeed.`
		],
		href: '/'
	};
</script>

<section class="bg-white w-11/12 mx-auto py-4">
	<LearnMore data={temp} />
	<TheTeam />
</section>
