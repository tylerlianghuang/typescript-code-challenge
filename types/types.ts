export type CustomerDetailsType = {
  name: string;
  id: string;
  address: string;
};

export interface CustomerListType {
  customers: Array<CustomerDetailsType>;
}
