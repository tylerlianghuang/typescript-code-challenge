import { CustomerListType } from '../types/types';
import { Layout, Card, Stack, Text, Button } from './styles';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledH2 = styled.h2`
  padding: 1.5rem 0px 1rem;
`;

const CustomerList = (props: CustomerListType) => {
  const router = useRouter();

  const showOrderDetailsHandler = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <Layout>
      {props.customers.map((customer) => (
        <Card key={customer.id}>
          <StyledH2>Name: {customer.name}</StyledH2>
          <Stack>
            <Text>
              Customer address:
              <strong>{customer.address}</strong>
            </Text>
            <Text>
              Customer id:
              <strong>{customer.id}</strong>
            </Text>
            <Button onClick={() => showOrderDetailsHandler(customer.id)}>Order details</Button>
          </Stack>
        </Card>
      ))}
    </Layout>
  );
};

export default CustomerList;
