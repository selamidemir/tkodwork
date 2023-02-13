import AsyncStorage from '@react-native-async-storage/async-storage';

export default async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('favorites');
    const value = jsonValue !== null ? JSON.parse(jsonValue) : [];
    return value;
  } catch (e) {
    console.log('Favoriler alınamadı.', e);
  }
};
