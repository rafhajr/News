import React, { useState } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Alert, Text, TextInput, TouchableOpacity }  from 'react-native';
import getRealm from '../../services/realm';
//import api from '../services/api';

export default function CreateNews({ navigation }){
  const [title, setTitle] = useState(null);
  const [news, setNews] = useState(null);
  const [author, setAuthor] = useState(null);
  const [newAuthor, setNewAuthor] = useState(true);

  async function Delete(){
    const realm = await getRealm();
    const id = realm.objects('News').max("id");
    const delet = realm.objects('News');
    
    realm.write(() => {
      realm.delete(delet.filtered('id = 1'));
    });
  }

  async function idNews(){
    const realm = await getRealm();
    console.log(author)
    const filtered = `name = ${author}`;
    const authorExist = realm.objects('Author').filtered(`name = "${author}"`);
    const newsID = realm.objects('News').max("id");
    const authorID = realm.objects('Author').max("id")
    var nID = 0;
    var aID = 0;
    if(authorExist[0] === undefined){
      if(authorID === null){
        aID = 1;
      } else {
        aID = authorID + 1;
      }
    } else {
      console.log(authorExist[0].id)
      aID = authorExist[0].id; 
      setNewAuthor(false)
    }

    if(newsID === null){
      nID = 1;
    } else {
      nID = newsID + 1;
    }

    saveNews(nID, aID);
  }
  async function saveNews(nID, aID){
    const realm = await getRealm();
    const dataNews = {
      id: nID,
      title: title,
      text: news,
      authorID: aID,
    }
    realm.write(() => {
      realm.create('News', dataNews);
    });

    if(newAuthor === false){
     const dataAuthor = {
       id: aID,
       name: author,
     }
     realm.write(() => {
       realm.create('Author', dataAuthor);
     });
    }
  }


  async function handleCreateNews(page) {
    if(page === 1){
      if(title === null || news === null || author === null){
        Alert.alert(
          'Nada selecionado',
          'Por favor, preencha todos os campos',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      } else if (title != null && news != null && author != null){
        console.log(`vou criar a noticia ${news} com o titulo ${title} e voce ${author} como autor`)
        try {
          await idNews();

          setAuthor('')
        } catch (err) {
          console.log('vvvvvv erro vvvvv');
          console.log(err);
          Alert.alert(
            'Error',
            'Deu erro',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
          );
        }
        // navigation.navigate('ViewNews', { title, author, news });
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
  }
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <Text style={styles.title}>Criar notícias</Text>
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
        placeholder="Notícia" 
        placeholderTextColor="#999" 
        style={styles.input}
        value={news}
        onChangeText={setNews}  
      />
      <TextInput
        autoCorrect={false} 
        placeholder="Autor" 
        placeholderTextColor="#999" 
        style={styles.input}
        value={author}
        onChangeText={setAuthor}  
      />
      <TouchableOpacity onPress={() => handleCreateNews(1)} style={styles.button}>
        <Text style={styles.buttonText}>Criar notícia</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCreateNews(2)} style={styles.button}>
        <Text style={styles.buttonText}>Home</Text>
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