import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.0625rem 0.25rem 0px;
  border-radius: 0.75rem;
  background-color: #ffffff;

  @media only screen and (min-width: 501px) {
    margin-bottom: unset;
  }
`;

export const Text = styled.p`
  text-align: left;

  strong {
    float: right;
  }
`;

export const Layout = styled.main`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 501px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 72rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 0px 1.5625rem;
  padding-bottom: 1.5rem;
`;

export const Button = styled.button`
  margin-top: 1rem;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  min-height: 3rem;
  min-width: 3rem;
  border-radius: 1.5rem;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: #f6f5f7;
    border: 0.0625rem solid #3d3b40;
  }
`;
