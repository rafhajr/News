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
    <Container>
      <Name>{title}</Name>
      <Description>{news}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec gravida massa, eu molestie ex. Donec porta posuere purus sit amet feugiat. Fusce ac mi at lacus consectetur feugiat scelerisque at ipsum. Vestibulum finibus ligula vel velit dignissim gravida. Fusce consequat facilisis nibh et aliquet. Pellentesque iaculis vel risus ac tempor. Etiam ac leo nisl. Phasellus tincidunt convallis magna, eu tristique massa. Morbi et condimentum turpis. Vivamus sollicitudin dolor commodo vulputate luctus. Vestibulum tempus sollicitudin nibh, et varius magna tempor vitae.

Mauris suscipit placerat dolor, vel dignissim eros blandit id. Quisque ut lectus porttitor, auctor mi at, ornare lorem. Aenean malesuada facilisis libero, non pretium ante porta sed. Donec laoreet massa ligula, nec efficitur risus aliquam non. Integer scelerisque convallis sodales. Quisque ullamcorper in nulla quis varius. Suspendisse facilisis vehicula lectus sit amet auctor. Aenean et ligula porttitor, fermentum nunc eget, suscipit diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Sed in lacus ac mi malesuada efficitur in at dolor. Nam porttitor augue sit amet egestas rhoncus. 
Donec ac velit eleifend, euismod nisl et, ornare est. 
      </Description>
      <Stats>
        <Stat>
          <StatCount>{author}</StatCount>
        </Stat>
      </Stats>
      <TouchableOpacity onPress={() => navigation.navigate('EditNews',{ title, news, author, id})}>
          <Text>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ViewNews')}>
          <Text>Voltar</Text>
        </TouchableOpacity>
    </Container>{console.log(title)}
  </>
  )
}