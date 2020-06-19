import React, { useState } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Text, TextInput, Alert, TouchableOpacity }  from 'react-native';

//import api from '../services/api';

export default function SearchNews({ navigation }){
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);

  

  function handleSearch(page) {
    if(page === 1){
      if(title === null && author === null){
        Alert.alert(
          'Nada selecionado',
          'Por favor, escolha uma forma de filtro',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      } else if( title != null && author != null){
        navigation.navigate('ViewNews', { title, author });
        console.log(`vou te trazer todas as noticias com o titulo ${title} que tem esse autor aqui ${author}`)
      } else if ( title != null){
        console.log(`vou te trazer todas as noticias com o titulo ${title}`)
        navigation.navigate('ViewNews', { title });
      } else if ( author != null){
        console.log(`vou te trazer todas as noticias com o Autor ${author}`)
        navigation.navigate('ViewNews', { author });
      } else {
        Alert.alert(
          'Error',
          'Ops, algo deu errado',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      }
    } else if(page === 2){
      navigation.navigate('Menu');
    }
    //navigation.navigate('ViewNews');
  }
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <Text style={styles.title}>Como você quer Pesquisar?</Text>
      <TextInput 
        autoCorrect={false} 
        placeholder="Título da notícia" 
        placeholderTextColor="#999" 
        style={styles.input}
        value={title}
        onChangeText={setTitle}  
      />
      <TextInput
        autoCorrect={false} 
        placeholder="Autor" 
        placeholderTextColor="#999" 
        style={styles.input}
        value={author}
        onChangeText={setAuthor}  
      />
      <TouchableOpacity onPress={() => handleSearch(1)} style={styles.button}>
        <Text style={styles.buttonText}>Pesquisar notícias</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSearch(2)} style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
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