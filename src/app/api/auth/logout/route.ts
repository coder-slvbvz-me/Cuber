import { cookies } from 'next/headers';

export async function POST() {
    const cookieStore = await cookies();

    cookieStore.delete('access_token');
    cookieStore.delete('refresh_token');

    return new Response(null, {
        status: 204,
    });
}
