export type LoginRequest = {
    account: string;
    signature: string;
    type: 'ETH' | 'SOL';
    message: string;
};

export type RefreshTokenRequest = {
    refresh_token: string;
};
