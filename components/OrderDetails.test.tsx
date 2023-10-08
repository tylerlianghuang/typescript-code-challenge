import OrderDetails from './OrderDetails';
import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

const mockCustomer = {
  orderDetails: {
    id: '1234',
    vendor: 'tyler',
    date: '2022',
    customer: '123',
    order: [{ item: 'test', quantity: 1, price: 0.5, revenue: 0.5 }]
  }
};

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const pushMock = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: pushMock
});

describe('Order Details', () => {
  it('renders basic details', () => {
    render(
      <OrderDetails
        id={mockCustomer.orderDetails.id}
        vendor={mockCustomer.orderDetails.vendor}
        date={mockCustomer.orderDetails.date}
        customer={mockCustomer.orderDetails.customer}
        order={mockCustomer.orderDetails.order}
      />
    );

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('date')).toBeInTheDocument();
    expect(screen.getByTestId('customer')).toBeInTheDocument();
    expect(screen.getByText(`quantity: ${mockCustomer.orderDetails.order[0].quantity}`)).toBeInTheDocument();
    expect(screen.getByText(`price: ${mockCustomer.orderDetails.order[0].price}`)).toBeInTheDocument();
    expect(screen.getByText(`revenue: ${mockCustomer.orderDetails.order[0].revenue}`)).toBeInTheDocument();
  });

  it('should redirect to homepage WHEN back button is clicked', async () => {
    render(
      <OrderDetails
        id={mockCustomer.orderDetails.id}
        vendor={mockCustomer.orderDetails.vendor}
        date={mockCustomer.orderDetails.date}
        customer={mockCustomer.orderDetails.customer}
        order={mockCustomer.orderDetails.order}
      />
    );

    const button = screen.getByRole('button', {
      name: 'Back'
    });

    fireEvent.click(button);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/');
    });
  });
});
