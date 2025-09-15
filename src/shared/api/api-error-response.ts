export type ApiError = {
    response?: {
        status: number;
        data?: {
            error?: string;
        };
    };
}
