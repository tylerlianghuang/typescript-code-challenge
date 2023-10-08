import fsPromises from 'fs/promises';
import path from 'path';
import { CustomerDetailsType, OrderDetailsType, RawDataType } from '@/types/types';

export const getFormatResult = async () => {
  const formattedOrders = [] as Array<OrderDetailsType>;
  const formattedCustomers = [] as Array<CustomerDetailsType>;

  const filePath = path.join(process.cwd(), 'data/data.json');

  const jsonData = await fsPromises.readFile(filePath);

  const objectData = JSON.parse(jsonData.toString()) as Array<RawDataType>;

  for (const obj of objectData) {
    formattedCustomers.push(obj.customer);
    const orders = [];

    for (const [key, value] of Object.entries(obj.order) as [string, { quantity: number; price: number }][]) {
      orders.push({
        item: key,
        quantity: value.quantity,
        price: value.price,
        revenue: value.quantity * value.price
      });
    }

    formattedOrders.push({
      id: obj.id,
      vendor: obj.vendor,
      date: obj.date,
      customer: obj.customer.id,
      order: orders
    });
  }

  return {
    customers: formattedCustomers,
    orders: formattedOrders
  };
};
