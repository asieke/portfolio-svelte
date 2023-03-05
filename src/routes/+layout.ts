import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabase } from '$lib/supabaseClient';
import { userStore } from '$lib/stores';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);
	//get the user details from supabase
	if (session) {
		try {
			const { data: user } = await supabase.from('profiles').select('*').eq('id', session.user.id);
			if (user && user[0]) {
				const temp = { ...user[0], email: session.user.email, id: session.user.id };
				userStore.set(temp);
				return { session, user: temp };
			}
		} catch (error) {
			console.log(error);
		}
	}
	return { session };
};
