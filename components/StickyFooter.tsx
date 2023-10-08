import { FC } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  background-color: #000000;
  color: #ffffff;

  div {
    display: flex;
    height: '5rem';

    span {
      padding: 1.5rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer: FC = () => {
  return (
    <Container>
      <StyledFooter>
        <div>
          <span>© Tyler&apos;s shop . 2023. All rights reserved. Sitemap </span>
        </div>
      </StyledFooter>
    </Container>
  );
};

export default Footer;
