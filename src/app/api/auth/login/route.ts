import { LoginRequest } from '@/types';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const cookieStore = await cookies();
    try {
        const body = (await request.json()) as LoginRequest;

        // 1. Validate request body
        if (!body.account || !body.signature || !body.type || !body.message) {
            return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
        }

        // 2. Call external auth API
        const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        // If external API response is not OK, return error
        if (!apiResponse.ok) {
            const errorData = await apiResponse.json();
            return NextResponse.json(
                { message: errorData?.message || 'Authentication failed' },
                { status: 401 },
            );
        }

        // 3. Parse the external API response
        // Expected shape: { access_token: string, refresh_token: string }
        const data = await apiResponse.json();

        // Ensure we have both tokens
        if (!apiResponse.ok || !data.access_token || !data.refresh_token) {
            return NextResponse.json(
                { message: apiResponse.statusText },
                { status: apiResponse.status },
            );
        }

        // 4. Create NextResponse & set both cookies
        const response = NextResponse.json(
            { success: true },
            {
                status: 200,
            },
        );

        //  — Access Token Cookie —
        cookieStore.set('access_token', data.access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only over HTTPS in prod
            sameSite: 'strict',
        });

        //  — Refresh Token Cookie (longer lifespan) —
        cookieStore.set('refresh_token', data.refresh_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch (error) {
        console.error('POST /api/login error:', error);

        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 },
        );
    }
}
