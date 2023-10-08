import styled from 'styled-components';

export const Card = styled.div`
  text-align: center;
  margin: 1.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 0.0625rem 0.25rem 0px;
  border-radius: 0.75rem;
  background-color: #ffffff;
`;

export const Text = styled.p`
  text-align: left;

  strong {
    float: right;
  }
`;

export const Layout = styled.main`
  margin-top: 5rem;
  margin-bottom: 5rem;
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

export const Inline = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row:
  justify-content: center;
  align-items: flex-start;
  padding: 1rem 0px;

  border-top: 1px solid #E5E3E8;

  div:last-child {
    border-right: unset;
  }
`;

export const Category = styled.div`
  border-right: 1px solid #e5e3e8;
  width: 100%;
`;
