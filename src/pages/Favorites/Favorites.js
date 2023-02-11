import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Favorites.style';

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const getData = async () => {
    console.log("Veri alınmaya başladı")
    try {
      const jsonValue = await AsyncStorage.getItem('@favorites');
      console.log('veri alındı');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log('Favoriler alınamadı.', e);
    }
  };

  useEffect(() => {
    console.log("favoriler sayfası başlatıldı")
    const data = getData();
    setFavorites(data);
    console.log(favorites)
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>Favorites</Text>
      {console.log(favorites)}
    </SafeAreaView>
  );
}

export default Favorites;
