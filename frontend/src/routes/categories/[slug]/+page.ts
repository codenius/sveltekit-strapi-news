import getUrl from '$lib/getUrl';
import { handleLoad } from '$lib/handleLoad';
import type { PageLoad } from './$types';

export const load = (async ({ params, fetch }) => {
	return handleLoad(
		getUrl(
			`/categories?filters[slug][$eqi]=${params.slug}&populate[articles][populate][image]=true&populate[articles][fields][0]=title&populate[articles][fields][1]=summary`
		),
		fetch
	);
}) satisfies PageLoad;
