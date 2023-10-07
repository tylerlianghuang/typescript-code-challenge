import { Fragment } from 'react';
import Head from 'next/head';

import { OrderDetailsType } from '../../types/types';
import { connectToDatabase } from '../../lib/db';

const OrderDetailsPage = (props: { orderDetails: OrderDetailsType }) => {
  return (
    <Fragment>
      <Head>
        <title>{props.orderDetails.customer}</title>
        <meta
          name="description"
          content={`order creation date ${props.orderDetails.date} and its vendor ${props.orderDetails.vendor}`}
        />
      </Head>
      <span>{props.orderDetails.vendor}</span>
      <span>{props.orderDetails.date}</span>
      <span>{props.orderDetails.customer}</span>
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
    fallback: 'blocking',
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

  return (
    selectedCandidate && {
      props: {
        orderDetails: {
          vendor: selectedCandidate.vendor,
          date: selectedCandidate.date,
          customer: selectedCandidate.customer
        }
      }
    }
  );
};

export default OrderDetailsPage;
