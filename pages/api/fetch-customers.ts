import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/db';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const client = await connectToDatabase();
    const db = client.db();

    const customers = db.collection('customers');

    const customersList = (await customers.find().toArray()).map((customer) => ({
      name: customer.name,
      address: customer.address,
      id: customer.id
    }));

    client.close();

    res.status(200).json({ customers: customersList });
  }
};

export default handler;
