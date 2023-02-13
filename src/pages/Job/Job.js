import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Job.style';
import useGetFavorites from '../../hooks/useGetFavorites';

function Job({navigation, route}) {
  const [inFavorites, setInFavorites] = useState();
  const [favorites, setFavorites] = useState([]);
  const {job} = route.params;

  const init = async () => {
    setFavorites(await useGetFavorites());
    console.log(favorites);
    let isInFavorites = favorites.findIndex(item => item.id === job.id);
    isInFavorites = isInFavorites < 0 ? false : true;
    setInFavorites(isInFavorites);
    console.log('In favorites : ', inFavorites);
  };

  const handleFavorites = async () => {
    try {
      let jsonValue = null;
      if (inFavorites) {
        // İşi favorilerden çıkar
        const newFavorites = favorites.filter(item => item.id !== job.id);
        jsonValue = JSON.stringify(newFavorites);
      } else {
        // İşi favorilere kayıt et
        jsonValue = JSON.stringify([...favorites, job]);
      }

      await AsyncStorage.setItem('favorites', jsonValue);
      setInFavorites(!inFavorites);
    } catch (e) {
      console.log('İş favorilere eklenmedi.', e);
    }
  };

  useEffect(() => {
    init();
  }, [inFavorites]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.description}>{job.description}</Text>
      <View style={styles.footer_container}>
        <Text style={styles.city}>{job.city}</Text>
        <Text style={styles.job_title}>{job.jobTitle}</Text>
      </View>
      <View style={styles.btn_add}>
        <Button
          title={!inFavorites ? 'Add Favorites' : 'Remove Favorites'}
          onPress={handleFavorites}
        />
      </View>
      <View style={styles.btn_go_back}>
        <Button title="Job List" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

export default Job;
