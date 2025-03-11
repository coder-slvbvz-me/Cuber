export const dynamic = 'force-static';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token');

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/info`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken?.value}`,
        },
    });

    const data = await response.text();

    if (response.status === 200) {
        const parsedData = JSON.parse(data);
        return NextResponse.json(parsedData, { status: response.status });
    }

    return NextResponse.json(
        { message: response.statusText },
        { status: response.status },
    );
}
