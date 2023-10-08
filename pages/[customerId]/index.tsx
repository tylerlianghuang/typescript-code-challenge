import { Fragment, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { OrderDetailsType } from '../../types/types';
import { connectToDatabase } from '../../lib/db';
import { Card, Inline, Stack, Text, Category, Button } from '../../components/styles';
import { ProgressLoader } from '../../components/ProgressLoader';

const OrderDetailsPage = (props: { orderDetails: OrderDetailsType }) => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const router = useRouter();
  const { orderDetails } = props;

  if (!orderDetails) {
    return <ProgressLoader />;
  }

  return (
    <Fragment>
      <Head>
        <title>{orderDetails.customer}</title>
        <meta
          name="description"
          content={`order creation date ${orderDetails.date} and its vendor ${orderDetails.vendor}`}
        />
      </Head>
      {buttonClicked ? (
        <ProgressLoader />
      ) : (
        <Card>
          <Stack>
            <Text>
              Vendor:
              <strong>{orderDetails.vendor}</strong>
            </Text>
            <Text>
              Date:
              <strong>{orderDetails.date}</strong>
            </Text>
            <Text>
              Customer:
              <strong>{orderDetails.customer}</strong>
            </Text>
            <Inline>
              {orderDetails.order.map((order) => (
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
                router.replace('/');
              }}
            >
              {buttonClicked ? 'Loading...' : 'Back'}
            </Button>
          </Stack>
        </Card>
      )}
    </Fragment>
  );
};

export const getStaticPaths = async () => {
  const client = await connectToDatabase();
  const db = client.db();

  const candidatesList = db.collection<OrderDetailsType>('orders');

  const candidates = await candidatesList.find({}, { projection: { customer: 1 } }).toArray();

  client.close();

  return {
    fallback: true,
    paths: candidates.map((candidate: { customer: string }) => ({
      params: { customerId: candidate.customer }
    }))
  };
};

export const getStaticProps = async (context: { params: { customerId: string } }) => {
  const customerId = context.params.customerId;

  const client = await connectToDatabase();
  const db = client.db();

  const candidatesList = db.collection<OrderDetailsType>('orders');

  const selectedCandidate = await candidatesList.findOne({
    customer: customerId.toString()
  });

  client.close();

  if (!selectedCandidate) {
    return { notFound: true };
  }

  return (
    selectedCandidate && {
      props: {
        orderDetails: {
          vendor: selectedCandidate.vendor,
          date: selectedCandidate.date,
          customer: selectedCandidate.customer,
          order: selectedCandidate.order
        }
      }
    }
  );
};

export default OrderDetailsPage;
