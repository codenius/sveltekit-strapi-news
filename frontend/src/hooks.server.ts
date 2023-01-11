import type { HandleFetch } from '@sveltejs/kit';
import { PUBLIC_CMS_BASE_URL } from '$env/static/public';

export const handleFetch = (({ request, fetch }) => {
	let returnPromise: Promise<Response>;
	if (request.url.startsWith(PUBLIC_CMS_BASE_URL)) {
		returnPromise = timeoutFetch(9000, request, fetch);
	} else {
		returnPromise = fetch(request);
	}

	return returnPromise;
}) satisfies HandleFetch;

function timeoutFetch(
	timeout: number,
	fetchOptions: Request,
	fetchInstanz: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<Response> {
	return new Promise((resolve, reject) => {
		const timer = setTimeout(() => {
			resolve(
				new Response(null, {
					statusText: 'CustomTimeout',
					status: 408,
					headers: { 'Access-Control-Allow-Origin': '*' }
				})
			);
		}, timeout);

		fetchInstanz(fetchOptions)
			.then((value) => {
				clearTimeout(timer);
				resolve(value);
			})
			.catch((reason) => {
				clearTimeout(timer);
				reject(reason);
			});
	});
}
