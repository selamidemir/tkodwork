import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = (state, action) => {
  const {favorites} = state;
  let newFavorites = [];
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const {job} = action.payload;
      newFavorites = [...favorites, job]
      async () => await AsyncStorage.setItem('favorites', newFavorites);
      return {...state, favorites: newFavorites};
      break;

    case 'REMOVE_FROM_FAVORITES':
      const {jobID} = action.payload;
      newFavorites = favorites.filter(item => item.id !== jobID);
      async () => await AsyncStorage.setItem('favorites', newFavorites);
      return {...state, favorites: newFavorites};
      break;

    default:
      return state;
      break;
  }
};

export default reducers;