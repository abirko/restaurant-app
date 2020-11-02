import {createStore, combineReducers} from 'redux';
import { Dishes } from './reducer/dishiesReducer';
import { Comments } from './reducer/commentsReducer';
import { Promotions } from './reducer/promotionsReducer';
import { Leaders } from './reducer/leadersReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        })
    );

    return store;
}