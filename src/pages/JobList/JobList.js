import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import { uid } from 'uid';

import styles from './JobList.style';
import jobs from '../../assets/jobsData';
import JobCard from '../../components/JobCard';

function JobList({navigation}) {
  const renderJob = ({item}) => {
    return <JobCard navigation={navigation} job={item} />;
  }
  const makeJobKey = () => uid();
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={jobs} renderItem={renderJob} keyExtractor={makeJobKey} />
    </SafeAreaView>
  );
}

export default JobList;
