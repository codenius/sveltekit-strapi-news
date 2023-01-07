import getUrl from '$lib/getUrl';

export async function load() {
	const json = await (await fetch(getUrl('/articles?populate=*'))).json();
	return json;
}
