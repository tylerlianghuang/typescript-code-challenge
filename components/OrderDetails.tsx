import { useState } from 'react';
import { OrderDetailsType } from '../types/types';
import { Card, Stack, Text, Button, Inline, Category } from './styles';
import { useRouter } from 'next/router';
import { ProgressLoader } from './ProgressLoader';

const OrderDetails = (props: OrderDetailsType) => {
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <>
      {buttonClicked ? (
        <ProgressLoader />
      ) : (
        <Card>
          <Stack>
            <Text>
              Vendor:
              <strong data-testid="name">{props.vendor}</strong>
            </Text>
            <Text>
              Date:
              <strong data-testid="date">{props.date}</strong>
            </Text>
            <Text>
              Customer:
              <strong data-testid="customer">{props.customer}</strong>
            </Text>
            <Inline>
              {props.order.map((order) => (
                <Category key={order.item}>
                  <strong>{order.item}</strong>
                  <p>{`quantity: ${order.quantity}`}</p>
                  <p>{`price: ${order.price}`}</p>
                  <p>{`revenue: ${order.revenue}`}</p>
                </Category>
              ))}
            </Inline>
            <Button
              type="button"
              onClick={() => {
                setButtonClicked(true);
                router.push('/');
              }}
            >
              Back
            </Button>
          </Stack>
        </Card>
      )}
    </>
  );
};

export default OrderDetails;
