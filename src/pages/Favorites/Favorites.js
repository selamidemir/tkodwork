
import {SafeAreaView, FlatList, Text} from 'react-native';
import { useSelector } from 'react-redux';
import JobCard from '../../components/JobCard';
import useGetFavorites from '../../hooks/useGetFavorites';

import styles from './Favorites.style';

function Favorites({navigation}) {
  const favorites = useSelector(s => s.favorites);

  const renderJob = ({item}) => <JobCard navigation={navigation} job={item} />;

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
