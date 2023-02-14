import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import WebView from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Job.style';
import useGetFavorites from '../../hooks/useGetFavorites';
import { useDispatch, useSelector } from 'react-redux';

function Job({navigation, route}) {
  const [inFavorites, setInFavorites] = useState();
  const {job} = route.params;
  const dispatch = useDispatch();
  const favorites = useSelector(selector => selector.favorites);

  const init = async () => {
    let isInFavorites = favorites.findIndex(item => item.id === job.id);
    isInFavorites = isInFavorites < 0 ? false : true;
    setInFavorites(isInFavorites);
  };

  const handleFavorites = async () => {
    try {
      // let jsonValue = null;
      // if (inFavorites) {
      //   // İşi favorilerden çıkar
      //   const newFavorites = favorites.filter(item => item.id !== job.id);
      //   jsonValue = JSON.stringify(newFavorites);
      // } else {
      //   // İşi favorilere kayıt et
      //   jsonValue = JSON.stringify([...favorites, job]);
      // }
      // AsyncStorage.clear()
      if (!inFavorites) {
        dispatch({type: 'ADD_TO_FAVORITES', payload: { job: job}})
      } else {
        dispatch({type: 'REMOVE_FROM_FAVORITES', payload: { jobID: job.id}})
      }
      
      // await AsyncStorage.setItem('favorites', jsonValue);
      setInFavorites(!inFavorites);
    } catch (e) {
      console.log('İş favorilere eklenmedi.', e);
    }
  };

  useEffect(() => {
    init();
  }, [inFavorites, favorites]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{job.name}</Text>
      <WebView
        style={styles.description}
        originWhitelist={['*']}
        source={{html: job.contents}}
      />
      <View style={styles.footer_container}>
        <Text style={styles.city}>{job.locations[0].name}</Text>
        <Text style={styles.job_title}>
          {job.categories.length && job.categories[0].name}
        </Text>
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
