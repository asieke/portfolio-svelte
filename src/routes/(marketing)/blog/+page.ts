import { error } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data, error: supabaseError } = await supabase
		.from('blog')
		.select('*')
		.order('date', { ascending: false });

	if (supabaseError || !data) {
		throw error(404, 'Not found');
	}

	return {
		data: data.map((post) => {
			const date = new Date(post.date);
			const readableDate = date.toLocaleDateString('en-US', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				timeZone: 'UTC'
			});
			return { ...post, readableDate };
		})
	};
}
