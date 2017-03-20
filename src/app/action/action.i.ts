export interface Action<T> {
    type: string;
    text: string;
    payload?: T;
    error?: boolean;
    meta?: any;
}