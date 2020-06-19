import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Text, TextInput, TouchableOpacity }  from 'react-native';
import getRealm from '../../services/realm';
//import api from '../services/api';
import {
  Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText,
} from './styles';import styled from 'styled-components/native';


export default function ViewNews({ navigation }){
  const title = navigation.getParam('title');
  const author = navigation.getParam('author');
  const news = navigation.getParam('text');
  const id = navigation.getParam('newsID');


  return(
  <>
  <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
    <Container>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{news}</Text>
      <Text style ={styles.author}>{author}</Text>
    </Container>
    <TouchableOpacity onPress={() => navigation.navigate('EditNews',{ title, news, author, id})} style={styles.button}>
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ViewNews')} style={styles.button}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    fontSize: 30,
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
  },
  author: {
    color: '#00db7d',
    fontWeight: 'bold',
    fontSize: 20,
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

})