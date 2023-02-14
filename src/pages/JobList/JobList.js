import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import { uid } from 'uid';

import {API_URL} from '@env';

import styles from './JobList.style';
import JobCard from '../../components/JobCard';

function JobList({navigation}) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
 
  const renderJob = ({item}) => {
    return <JobCard navigation={navigation} job={item} />;
  }
  const makeJobKey = () => uid();
  
  const getJobs = async () => {
    // const newJobs = await axios(API_URL);
    //   console.log(newJobs["page"])
    setLoading(true);
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // console.log(data.results[0])
      // setJobs(data.results);
      setLoading(false);
      setJobs(data.results);
    })
    .catch(e => console.log(e));

  }

  useEffect(() => {
    getJobs();
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={jobs} renderItem={renderJob} keyExtractor={makeJobKey} />
    </SafeAreaView>
  );
}

export default JobList;
