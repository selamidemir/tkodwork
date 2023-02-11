import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import jobsData from '../../assets/jobsData';

import styles from './JobCard.style';

function JobCard({navigation, jobID}) {
  const job = jobsData.find(item => item.id === jobID);
  const goToJob = () => {
    navigation.navigate('JobScreen', {jobID: job.id});
  }
  
  return (
    <TouchableOpacity onPress={goToJob}>
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Icon name="chevron-right-box" style={styles.title_icon} />
          <Text style={styles.title}>{job.title.slice(0, 35)}</Text>
        </View>
        <Text style={styles.description}>{job.title}</Text>
        <View style={styles.footer_container}>
          <Text style={styles.city}>{job.city}</Text>
          <Text style={styles.job_title}>{job.jobTitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default JobCard;
