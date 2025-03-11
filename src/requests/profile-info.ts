import { cookies } from 'next/headers';

export const profileInfo = async () => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/info`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${accessToken?.value}`,
        },
    });
};
