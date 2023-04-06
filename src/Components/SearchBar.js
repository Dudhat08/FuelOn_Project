
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { image } from '../Helper/ImageHelper';



const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    
    return (
        <View style={styles.container} >
            <Image source={image.search} style={{height:30,width:30,margin: 10 }} />
            <TextInput 
              autoCorrect = {false}
              style = {styles.inputStyle}
              placeholder='search'  
              value={term}
              onChangeText ={onTermChange}
              onEndEditing={onTermSubmit}    
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a3c2c2',
        height : 50,
        borderRadius : 6,
        margin : 15,
        flexDirection : 'row',

    },
    inputStyle:{
        fontSize : 20,
        flex: 1,
        
    }

});


export default SearchBar;
