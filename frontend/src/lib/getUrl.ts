import { PUBLIC_CMS_BASE_URL } from '$env/static/public';

export default function getUrl(path: string, nonApi = false): string {
	return `${PUBLIC_CMS_BASE_URL}${!nonApi ? '/api' : ''}${path}`;
}
