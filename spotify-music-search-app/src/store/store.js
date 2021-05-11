import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../reducers/albums';
import artistsReducer from '../reducers/artists';
import playListReducer from '../reducers/playlist';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        albums: albumsReducer,
        artists: artistsReducer,
        playlist: playListReducer
    }),
    composeEnhacers(applyMiddleware(thunk))
);


export default store;