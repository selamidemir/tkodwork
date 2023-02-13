import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#63d471',
    flex: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
  },
  description: {
    backgroundColor: 'lightgray',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    minHeight: 155,
    fontWeight: 'bold',
  },
  footer_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#233329',
    padding: 5,
    borderRadius: 5,
    marginBottom: 10,
  },
  city: {
    color: 'gray',
    padding: 5,
  },
  job_title: {
    color: 'gray',
    padding: 5,
  },
  btn_add: {
    marginTop: 10,
  },
  btn_go_back: {
    marginTop: 10,
  },
});
