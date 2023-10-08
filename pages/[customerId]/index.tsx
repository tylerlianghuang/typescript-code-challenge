import { Fragment } from 'react';
import Head from 'next/head';

import { OrderDetailsType } from '../../types/types';
import { connectToDatabase } from '../../lib/db';
import { ProgressLoader } from '../../components/ProgressLoader';
import OrderDetails from '@/components/OrderDetails';

const OrderDetailsPage = (props: { orderDetails: OrderDetailsType }) => {
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
      <OrderDetails {...orderDetails} />
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
