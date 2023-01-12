import getUrl from '$lib/getUrl';
import { handleLoad } from '$lib/handleLoad';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	return handleLoad(getUrl('/articles?populate=*&fields[0]=title&field[1]=image'), fetch);
}) satisfies PageLoad;
