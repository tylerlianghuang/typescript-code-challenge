import Head from 'next/head';
import { CustomerListType } from '@/types/types';
import { connectToDatabase } from '../lib/db';
import CustomerList from '@/components/CustomerList';

export async function getStaticProps() {
  const client = await connectToDatabase();
  const db = client.db();

  const customers = db.collection('customers');

  const customersList = await customers.find().toArray();

  client.close();

  return {
    props: {
      customers: customersList.map((customer) => ({
        name: customer.name,
        address: customer.address,
        id: customer.id
      }))
    },
    revalidate: 1
  };
}

export default function Home(props: CustomerListType) {
  return (
    <>
      <Head>
        <title>Tyler&apos;s shop</title>
        <meta name="description" content="an upcoming online service company for order management" />
      </Head>
      <CustomerList customers={props.customers} />
    </>
  );
}
