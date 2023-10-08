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
  id: string;
  vendor: string;
  date: string;
  customer: string;
  order: Array<Order>;
};

export interface CustomerListType {
  customers: Array<CustomerDetailsType>;
}

export interface RawDataType {
  id: string;
  vendor: string;
  date: string;
  customer: CustomerDetailsType;
  order: {
    [key: string]: {
      quantity: number;
      price: number;
    };
  };
}
