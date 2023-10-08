import { FC } from 'react';
import styled from 'styled-components';
import PaloAltoSvg from '../data/PaloAltoSvg';

const StyledHeader = styled.header`
  width: 100%;
  background-color: #000000;

  svg {
    margin: 1rem;
  }

  div {
    display: flex;
    height: 5rem;

    span {
      padding-top: 1.5rem;
      padding-left: 5.5rem;
    }
  }
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Header: FC = () => {
  return (
    <Container>
      <StyledHeader>
        <PaloAltoSvg />
      </StyledHeader>
    </Container>
  );
};

export default Header;
