import { MongoClient } from 'mongodb';

export const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    'mongodb+srv://jackhe232:UQKlk1nRLcIvwKg@tyler-shop.s9dguhk.mongodb.net/?retryWrites=true&w=majority'
  );

  return client;
};
