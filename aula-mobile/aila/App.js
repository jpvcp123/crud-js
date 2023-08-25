import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text, Image} from 'react-native';

const TextInputExample = () => {
  const [text, setText] = useState('');
  const [characters, setCharacters] = useState([])



  const getData = async (searchedName) => {
    setText(searchedName)
    var req = await axios.get(`https://rickandmortyapi.com/api/character/`)
    setCharacters(req.data)
  }


  useEffect( () => {

    getData()
    
  }, [])

  return (
    <SafeAreaView>
      <Image
      style={stylesimg.input}
      ></Image>

      <Text style= {stylestxt.input} >
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={getData}
        value={text}
      />

      <Text style= {stylestxt.input} >
        {characters}
      </Text>
      
            
    </SafeAreaView>
  );
};
const stylesimg = StyleSheet.create({
  input: {
    height: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
const stylestxt = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
  },
});

export default TextInputExample;