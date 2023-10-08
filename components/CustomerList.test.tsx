import CustomerList from './CustomerList';
import '@testing-library/jest-dom';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';

const mockCustomer = {
  customers: [{ name: 'tyler', id: '1', address: 'test address 1' }]
};

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

const pushMock = jest.fn();

(useRouter as jest.Mock).mockReturnValue({
  push: pushMock
});

describe('Customer card', () => {
  it('renders basic details', () => {
    render(<CustomerList {...mockCustomer} />);

    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.getByTestId('address')).toBeInTheDocument();
    expect(screen.getByTestId('id')).toBeInTheDocument();
  });

  it('should redirect to order details page with a dynamic customer id in the url WHEN order details button is clicked', async () => {
    render(<CustomerList {...mockCustomer} />);

    const button = screen.getByRole('button', {
      name: 'Order details'
    });

    fireEvent.click(button);

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith(`/${mockCustomer.customers[0].id}`);
    });
  });
});
