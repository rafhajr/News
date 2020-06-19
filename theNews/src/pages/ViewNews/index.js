import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Text, TextInput, TouchableOpacity }  from 'react-native';
import getRealm from '../../services/realm';
//import api from '../services/api';
import {
  Container, Title, Form, Input, Submit, List,
} from './styles';

import NewsPage from '../../components/'

export default function ViewNews({ navigation }){
  const [page, setPage] = useState(2);
  const [newsPage, setNewsPage] = useState([]);

  const title = navigation.getParam('title');
  const author = navigation.getParam('author');
  const news = navigation.getParam('news');



  function handleViewNews(type) {
    if(type === 1){
      setPage(0);
    } else if(type === 2){
      navigation.navigate('SearchNews');
    } else if(type === 3){
      navigation.navigate('CreateNews');
    } else if(type === 4){
      navigation.navigate('Menu');
    }
    //navigation.navigate('CreateNews');
  }



  useEffect(() => {
    if(title === undefined && author === undefined && news === undefined){
      console.log('Voce so veio atras de noticias');
      async function loadRepositories() {
        const realm = await getRealm();
    
        //console.tron.log(realm.path);

        const Page = realm.objects('News');
        const Author = realm.objects('Author');
        //setNewsPage(person)
        //setRepositories(data);
        console.log(Page);
        setNewsPage(Page)
      }
      loadRepositories();
      console.log(newsPage);
      setPage(2);
    } else if((title != undefined || author != undefined) && news === undefined){
      async function find(){
        const realm = await getRealm();
        var idAuthor = null;
        if(author != undefined && title === undefined){
          const authorExist = realm.objects('Author').filtered(`name = "${author}"`)
          idAuthor = authorExist[0].id;
          const Page = realm.objects('News').filtered(`authorID = ${idAuthor}`);
          setNewsPage(Page)
        } else if(author === undefined && title != undefined){
          const Page = realm.objects('News').filtered(`title = "${title}"`);
          setNewsPage(Page)
        }
      }
      find()
      setPage(2);
    } else if(title != undefined && author != undefined && news != undefined){
      console.log('Voce acabou de criar uma noticia')
      setPage(2);
    } else {
      console.log('Algo de errado nao esta certo')
      setPage(0);
    }
  }, []);
  return (
    <>
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
        enabled={Platform.OS === 'ios'}
      >
        {page === 0 &&(
          <>
            <Text style={styles.title}>Poxa, não existe nenhuma notícia ainda :(</Text>
              <TouchableOpacity onPress={() => handleViewNews(3)} style={styles.button}>
                <Text style={styles.buttonText}>Que tal criar uma notícia?</Text>
              </TouchableOpacity>
          </>
        )}
        {page === 1 && (
          <>
            <Text style={styles.title}>Poxa, não existe nenhuma notícia ainda com os termos que você buscou</Text>
                <TouchableOpacity onPress={() => handleViewNews(1)} style={styles.button}>
                  <Text style={styles.buttonText}>Que tal ver outras notícias?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleViewNews(2)} style={styles.button}>
                  <Text style={styles.buttonText}>Ou volte a procurar</Text>
                </TouchableOpacity>
          </>
        )}
        {page === 2 && (
            <List
              onPress={() => handleViewNews(4)}
              keyboardShouldPersistTaps="handled"
              data={newsPage}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <NewsPage data={item} navigation={navigation}/>
              )}
            />
        )}
        <TouchableOpacity onPress={() => handleViewNews(4)} style={styles.button}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </>
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

  news: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 20,
  },

  author: {
    color: '#ddd',
    fontWeight: 'bold',
    fontSize: 14,
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