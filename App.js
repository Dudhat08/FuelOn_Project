import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import StackNavigation from './src/Navigators/StackNavigation'
import BottomNavigation from './src/Navigators/BottomNavgation'
import { Provider } from 'react-redux'
import { store } from './src/Redux/Store'

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  )
}

export default App;

const styles = StyleSheet.create({})