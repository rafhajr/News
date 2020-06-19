import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Text, TextInput, TouchableOpacity }  from 'react-native';
import getRealm from '../../services/realm';
//import api from '../services/api';
import {
  Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText,
} from './styles';


export default function ViewNews({ navigation }){
  const title = navigation.getParam('title');
  const author = navigation.getParam('author');
  const news = navigation.getParam('text');
  const id = navigation.getParam('newsID');


  return(
  <>
    <Container style={styles.container}>
      <Name>{title}</Name>
      <Description>{news}</Description>
      <Stats>
        <Stat>
          <StatCount>{author}</StatCount>
        </Stat>
      </Stats>
      <TouchableOpacity style={styles.button}onPress={() => navigation.navigate('EditNews',{ title, news, author, id})}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button} onPress={() => navigation.navigate('ViewNews')}>
          <Text>Voltar</Text>
        </TouchableOpacity>
    </Container>{console.log(title)}
  </>
  )
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