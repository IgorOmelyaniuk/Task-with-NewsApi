import reducer from './reducer';

const createStore = reducer => {
    let state;
    const listeners = [];
    const store = {
        getState: () => state,

        dispatch: action => {
            state = reducer(state, action);
            listeners.forEach(listener => {
                return listener()});
        },

        //Observer pattern
        subscribe: listener => {
            listeners.push(listener);
            return () => {
                this.listeners = this.listener.filter(handler => handler !== listener); 
            }
        }
    }

    return store;
}

const store = createStore(reducer);

export default store;