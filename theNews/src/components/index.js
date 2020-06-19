import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Plataform, StyleSheet, Text, TextInput, TouchableOpacity }  from 'react-native';
import getRealm from '../services/realm';
import {
  Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText,
} from './styles';

export default function NewsList({ data, navigation }) {
  const [ author, setAuthor] = useState();

  useEffect(() => {
    async function authorName(){
      const realm = await getRealm();
      const authorId = realm.objects('Author').filtered(`id = "${data.authorID}"`)
      setAuthor(authorId[0].name)
    }

    authorName()
  },[]);


  return (
    <Container>
      <Name>{data.title}</Name>
      <Description>{data.text}</Description>

      <Stats>
        <Stat>
          <StatCount>{author}</StatCount>
        </Stat>
        <TouchableOpacity onPress={() => navigation.navigate('CreateNews', data)}>
          <Text>Ver mais...</Text>
        </TouchableOpacity>
      </Stats>
    </Container>
  );
}