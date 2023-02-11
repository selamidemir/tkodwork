import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    margin: 10,
    borderRadius: 5,
    padding: 5,
    borderColor: '#6A7152',
    borderWidth: 1,
  },
  title_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#233329',
    fontWeight: 'bold',
    fontSize: 19,
    marginLeft: 7,
    textDecorationLine: 'underline',
  },
  title_icon: {
    color: '#6a7152',
  },
  description: {
    color: '#000000',
    padding: 10,
    fontSize: 15,
    paddingLeft: 19,
  },
  footer_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  city: {
    paddingLeft: 17,
    fontSize: 17,
    color: '#233329',
  },
  job_title: {
    paddingRight: 19,
    fontSize: 17,
    color: '#6A7152',
  }
});
