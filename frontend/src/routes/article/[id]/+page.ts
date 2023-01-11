import getUrl from '$lib/getUrl';
import { handleLoad } from '$lib/handleLoad';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	return handleLoad(getUrl(`/articles/${params.id}?populate=*`), fetch);
}) satisfies PageLoad;
