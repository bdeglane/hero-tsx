export const logger = (store: any) => {
    return (next: any) => {
        return (action: any) => {
            console.group(action.type);
            console.info('dispatching', action);
            // store dispatch
            let result = next(action);
            console.log('next state', store.getState());
            console.groupEnd();
            return result
        };
    };
};