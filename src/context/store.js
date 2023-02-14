import {createStore} from 'redux';

import useGetFavorites from '../hooks/useGetFavorites';

import reducers from './reducers';

const initialState = {
  favorites: [],
};

const store = createStore(reducers, initialState);

export default store;
