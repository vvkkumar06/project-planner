export interface Response<T> {
    data?: T;
    error?: any;
    message?: string;
    status?: number
}