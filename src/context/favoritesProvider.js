import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import reducers from './reducers';

const FavoritesProvider = ({children}) => {
  const [initialState, setInitialState] = useState([]);
  const makeStore = async () => {
    const jsonValue = await AsyncStorage.getItem('favorites');
    const value = jsonValue !== null ? JSON.parse(jsonValue) : [];
    setInitialState({
        favorites: value,
    })
  };

  useEffect(() => {
    makeStore();
  }, []);
  return <Provider store={createStore(reducers, initialState)}>{children}</Provider>;
};

export default FavoritesProvider;
