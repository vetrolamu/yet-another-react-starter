import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();
const isDevelopment = process.env.NODE_ENV === 'development';

export default function configureStore({preloadedState, isClient}) {
    const middlewares = [thunkMiddleware];

    if (isDevelopment && isClient) {
        middlewares.push(loggerMiddleware);
    }

    return createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware.apply(this, middlewares),
            isDevelopment && isClient && typeof window !== 'undefined' && window.devToolsExtension
                ? window.devToolsExtension()
                : f => f
        )
    );
}
