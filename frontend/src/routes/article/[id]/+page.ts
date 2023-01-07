import getUrl from '$lib/getUrl';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const json = await (await fetch(getUrl(`/articles/${params.id}?populate=*`))).json();
	return json;
}) satisfies PageLoad;
