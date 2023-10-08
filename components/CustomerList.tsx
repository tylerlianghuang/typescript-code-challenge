import { useState } from 'react';
import { CustomerListType } from '../types/types';
import { Layout, Card, Stack, Text, Button } from './styles';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { ProgressLoader } from './ProgressLoader';

const StyledH2 = styled.h2`
  padding: 1.5rem 0px 1rem;
`;

const CustomerList = (props: CustomerListType) => {
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      {buttonClicked ? (
        <ProgressLoader />
      ) : (
        <Layout>
          {props.customers.map((customer) => (
            <Card key={customer.id}>
              <StyledH2 data-testid="name">Name: {customer.name}</StyledH2>
              <Stack>
                <Text>
                  Customer address:
                  <strong data-testid="address">{customer.address}</strong>
                </Text>
                <Text>
                  Customer id:
                  <strong data-testid="id">{customer.id}</strong>
                </Text>
                <Button
                  onClick={() => {
                    setButtonClicked(true);
                    router.push(`/${customer.id}`);
                  }}
                >
                  Order details
                </Button>
              </Stack>
            </Card>
          ))}
        </Layout>
      )}
    </>
  );
};

export default CustomerList;
