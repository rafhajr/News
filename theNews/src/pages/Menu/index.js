import React, { useState } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Text, TextInput, TouchableOpacity }  from 'react-native';

//import api from '../services/api';

export default function Menu( {navigation} ){

  function handleMenu(page){
    if(page === 1){
      navigation.navigate('ViewNews');
    } else if(page === 2){
      navigation.navigate('SearchNews');
    } else {
      navigation.navigate('CreateNews');
    }
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <Text style={styles.title}>The News</Text>
      <TouchableOpacity onPress={() => handleMenu(1)} style={styles.button}>
        <Text style={styles.buttonText}>Ver notícias</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenu(2)} style={styles.button}>
        <Text style={styles.buttonText}>Pesquisar notícias</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleMenu(3)} style={styles.button}>
        <Text style={styles.buttonText}>Criar notícias</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#120046',
    justifyContent: 'center',
    alignItems: 'center',
    padding:30
  },

  title: {
    color: '#00db7d',
    fontWeight: 'bold',
    fontSize: 50,
    padding: 20,
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignItems: 'center',
    alignSelf:'stretch',
    backgroundColor: '#f5f5',
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center',
  },

  buttonText: {
    color: '#ddd',
    fontWeight: 'bold',
    fontSize: 16,
  },

});