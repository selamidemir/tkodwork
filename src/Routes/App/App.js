import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import FavoritesProvider from '../../context/favoritesProvider';

import Favorites from '../../pages/Favorites';
import JobList from '../../pages/JobList';
import Job from '../../pages/Job/Job';
import useGetFavorites from '../../hooks/useGetFavorites';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function JobScreen({route}) {
  const params = route.params;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="JobPage"
        component={Job}
        options={{title: 'Job List'}}
        initialParams={{...params}}
      />
    </Stack.Navigator>
  );
}

function App() {

  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{unmountOnBlur: true}}>
          <Drawer.Screen
            name="JobsScreen"
            component={JobList}
            options={{title: 'Job List'}}
          />
          <Drawer.Screen
            name="FavoritesScreen"
            component={Favorites}
            options={{title: 'Favorites'}}
          />
          <Drawer.Screen
            name="JobScreen"
            component={JobScreen}
            options={{
              title: 'Job Information',
              drawerLabel: () => null,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}

export default App;
