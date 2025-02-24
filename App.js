import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeNavigation from './navigation/HomeNavigation'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { initializeDatabase } from './database/db'
import CustomStatusBar from './constant/CustomStatusBar'
import NoInternetModal from './components/NoInternetMessage'
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [isOffline,setOfflineStatus]=useState(false)
  useEffect(() => {
    initializeDatabase()
      .then(() => console.log('Database initialized'))
      .catch(err => console.error('Database initialization failed', err));
  }, []);

  useEffect(()=>{
    NetInfo.addEventListener((state) => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });
  },[isOffline])
  return (
    <View style={styles.conatiner}>
      <NavigationContainer>
      <Provider store={store}>
      <CustomStatusBar />
      <HomeNavigation />
      <NoInternetModal show={isOffline}/> 
    </Provider>
       
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  }
})