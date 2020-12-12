import React from 'react';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Scoreboard from '../../components/Scoreboard';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Scoreboard />
      </Content>
    </Container>
  );
};

export default Home;
