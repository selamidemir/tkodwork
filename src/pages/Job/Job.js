import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './Job.style';

import jobsData from '../../assets/jobsData';

function Job({route}) {
  const {jobID} = route.params;
  const [job, setJob] = useState({});

  const handleAddFavorites = async () => {
    console.log('İşlem başladı');
    try {
      await AsyncStorage.setItem('@favorites', JSON.stringify(job));
      console.log('veri eklendi', job);
    } catch (e) {
      console.log('İş favorilere eklenmedi.', e);
    }
  };

  useEffect(() => {
    setJob(jobsData.find(item => item.id === jobID));
  }, [jobID]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.description}>{job.description}</Text>
      <View style={styles.footer_container}>
        <Text style={styles.city}>{job.city}</Text>
        <Text style={styles.job_title}>{job.jobTitle}</Text>
      </View>
      <Button
        style={styles.btn_add}
        title="Add Favorites"
        onPress={() => handleAddFavorites()}
      />
    </SafeAreaView>
  );
}

export default Job;
