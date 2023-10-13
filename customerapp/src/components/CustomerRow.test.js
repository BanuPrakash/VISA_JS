import { fireEvent, render, screen } from '@testing-library/react';
import CustomerRow from './CustomerRow';

// test suite
describe("testing <CustomerRow />", () => {
    // mock object
    let customer = {
        id: 22,
        firstName: 'Harry',
        lastName: 'Potter'
    }

    // mock function
    let callback = jest.fn();
    // test spec
    it("<CustomerRow /> created", () => {
        render(<CustomerRow customer={customer}
            key={customer.id}
            delEvt={(id) => callback(id)} />);

        let elem = screen.getByText(/Harry/i);
        screen.debug();
        expect(elem).toBeInTheDocument();
    });

    it('<CustomerRow /> delete', () => {
        render(<CustomerRow
            delEvt={(id) => callback(id)}
            customer={customer}
            key={customer.id} />);

        let btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(22);
    })
});