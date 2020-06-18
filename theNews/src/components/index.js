import React from 'react';

import {
  Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText,
} from './styles';

export default function Repository({ data }) {
  return (
    <Container>
      <Name>{data.title}</Name>
      <Description>{data.text}</Description>

      <Stats>
        <Stat>
          <StatCount>{data.authorID}</StatCount>
        </Stat>
      </Stats>
    </Container>
  );
}