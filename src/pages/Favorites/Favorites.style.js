import {StyleSheet, Dimensions} from 'react-native';

const deviceSizes = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63d471',
  },
  job_list: {},
  no_job: {
    color: 'red',
    fontSize: 21,
    textAlign: 'center',
    paddingBottom: deviceSizes.height / 2,
  }
});
