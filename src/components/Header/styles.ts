import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: var(--primary-black);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1200px;

  .logo {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      margin-left: 8px;
      color: var(--primary-white);
      font-size: 16px;
    }
  }

  h1 {
    margin: 8px 0;
    font-size: 36px;
    font-weight: bold;
    color: var(--primary-white);
  }

  img {
    width: 140px;
  }
`;

export const Nav = styled.nav`
  ul {
    li {
      a {
        text-decoration: none;
        color: var(--primary-white);
      }
    }
  }
`;
