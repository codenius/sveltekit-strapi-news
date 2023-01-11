import { error } from '@sveltejs/kit';

export async function handleLoad(
	url: RequestInfo | URL,
	fetchInstanz: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>,
	fetchOptions?: RequestInit
) {
	const res = await fetchInstanz(url, fetchOptions); // url for testing of timeout https://nghttp2.org/httpbin/delay/20
	let data;
	if (res.statusText == 'CustomTimeout') {
		throw error(408, 'Waking up server...');
	} else if (res.ok) {
		let payload: Object;
		try {
			payload = await res.json();
		} catch {
			payload = { data: await res.text() };
		}
		data = { ...payload, status: 'ok' };
	} else {
		throw error(res.status, res.statusText);
	}
	return { ...data, response: res };
}
