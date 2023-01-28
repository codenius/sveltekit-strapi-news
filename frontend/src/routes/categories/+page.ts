import getUrl from '$lib/getUrl';
import { handleLoad } from '$lib/handleLoad';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	return handleLoad(getUrl(`/categories`), fetch);
}) satisfies PageLoad;
