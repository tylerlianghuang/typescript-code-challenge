export type CustomerDetailsType = {
  name: string;
  id: string;
  address: string;
};

export type Order = {
  item: string;
  quantity: number;
  price: number;
  revenue: number;
};

export type OrderDetailsType = {
  vendor: string;
  date: string;
  customer: string;
  order: Array<Order>;
};

export interface CustomerListType {
  customers: Array<CustomerDetailsType>;
}
