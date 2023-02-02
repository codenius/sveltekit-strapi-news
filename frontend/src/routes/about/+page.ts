import getUrl from '$lib/getUrl';
import { handleLoad } from '$lib/handleLoad';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	return handleLoad(getUrl('/authors?filters[isSiteAuthor][$eq]=true'), fetch);
}) satisfies PageLoad;
