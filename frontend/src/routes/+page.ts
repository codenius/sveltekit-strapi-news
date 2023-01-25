import getUrl from '$lib/getUrl';
import { handleLoad } from '$lib/handleLoad';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	return handleLoad(
		getUrl(
			'/articles?populate=*&sort[0]=createdAt:desc&field[0]=title&field[1]=image&field[2]=createdAt&field[3]=summary'
		),
		fetch
	);
}) satisfies PageLoad;
