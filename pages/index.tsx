import Head from 'next/head';
import { CustomerListType } from '@/types/types';
import { connectToDatabase } from '../lib/db';
import CustomerList from '@/components/CustomerList';
import { getFormatResult } from '../util/dataTransformation';
import { ProgressLoader } from '../components/ProgressLoader';

export async function getStaticProps() {
  const formattedResult = await getFormatResult();

  console.log(`formattedJSON is ${JSON.stringify(formattedResult)}`);

  const client = await connectToDatabase();
  const db = client.db();

  const customers = db.collection('customers');
  const orders = db.collection('orders');

  customers.drop();
  orders.drop();

  for (let i = 0; i < formattedResult.customers.length; i++) {
    await customers.insertOne(formattedResult.customers[i]);
  }

  for (let i = 0; i < formattedResult.orders.length; i++) {
    await orders.insertOne(formattedResult.orders[i]);
  }

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
  const { customers } = props;

  if (!customers) {
    return <ProgressLoader />;
  }

  return (
    <>
      <Head>
        <title>Tyler&apos;s shop</title>
        <meta name="description" content="an upcoming online service company for order management" />
      </Head>
      <CustomerList customers={customers} />
    </>
  );
}
