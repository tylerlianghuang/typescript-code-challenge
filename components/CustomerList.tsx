import { CustomerListType } from '../types/types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const CustomerList = (props: CustomerListType) => {
  return (
    <>
      {props.customers.map((customer) => (
        <Container key={customer.id}>
          <span>Customer name: {customer.name}</span>
          <span>Customer address: {customer.address}</span>
          <span>Customer id: {customer.id}</span>
        </Container>
      ))}
    </>
  );
};

export default CustomerList;
