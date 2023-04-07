import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import MapView, { AnimatedRegion, MarkerAnimated } from 'react-native-maps'
import { Marker } from 'react-native-maps';
import { image } from '../Helper/ImageHelper';

const TrackerScreen = () => {
    return (

        <View style={{ flex: 1 }}>
            <MapView
                zoomEnabled={true}
                scrollEnabled={true}
                style={StyleSheet.absoluteFill}
                initialRegion={{
                    latitude: 21.1702,
                    longitude: 72.8311,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    draggable
                    coordinate={{ latitude: 21.1702, longitude: 72.8311 }}
                    onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
                >
                    <Image
                        source={image.pin}
                        style={{ height: 35, width: 35 }}
                    />
                </Marker>
            </MapView>
        </View>

    )
}

export default TrackerScreen

const styles = StyleSheet.create({})