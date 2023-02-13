import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import JobCard from '../../components/JobCard';
import useGetFavorites from '../../hooks/useGetFavorites';

import styles from './Favorites.style';

function Favorites({navigation}) {
  const [favorites, setFavorites] = useState([]);

  const getData = async () => {
    const data = await useGetFavorites();
    setFavorites(data);
  };

  const renderJob = ({item}) => <JobCard navigation={navigation} job={item} />;

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {(
        <FlatList
          data={favorites}
          renderItem={renderJob}
          style={styles.job_list}
        />
      )}
      {
        !favorites.length && <Text style={styles.no_job}>Favorilere ekli hiç bir iş bulunmuyor.</Text>
      }
    </SafeAreaView>
  );
}

export default Favorites;
