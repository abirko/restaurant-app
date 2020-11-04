import { Dishes } from './reducer/dishiesReducer';
import { Comments } from './reducer/commentsReducer';
import { Promotions } from './reducer/promotionsReducer';
import { Leaders } from './reducer/leadersReducer';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}