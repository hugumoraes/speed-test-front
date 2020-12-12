import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Center, Nav } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Center>
        <div className="logo">
          <img
            src="https://westpoint.io/imgs/logos/westpoint_logo.svg"
            alt=""
          />
          <span>SpeedTest</span>
        </div>

        <Nav>
          <ul>
            <li>
              <Link to="/">Score</Link>
            </li>
          </ul>
        </Nav>
      </Center>
    </Container>
  );
};

export default Header;
