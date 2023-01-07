import { redirect } from '@sveltejs/kit';
import { PUBLIC_CMS_BASE_URL } from '$env/static/public';

export function GET() {
    throw redirect(308, `${PUBLIC_CMS_BASE_URL}/admin`);
}