//create a props interface for card that has a title and a description
export type CardProps = {
	title: string;
	description: string;
	img: string;
	href: string;
	linkText: string;
};

export type UserProps = {
	id?: string | null;
	updated_at?: string | null;
	username?: string | null;
	full_name?: string | null;
	avatar_url?: string | null;
	website?: string | null;
	dob?: string | null;
	accepted_tos?: boolean | null;
	email: string | null | undefined;
};
