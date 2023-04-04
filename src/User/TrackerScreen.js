import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'

const TrackerScreen = () => {
    return (

        <View style={{ flex: 1 }}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: 21.1702,
                    longitude: 72.8311,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>

    )
}

export default TrackerScreen

const styles = StyleSheet.create({})