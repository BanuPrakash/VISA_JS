import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

it('renders title', () => {
  render(<App />);
  const h1Element = screen.getByText(/Customer Application/i);
  expect(h1Element).toBeInTheDocument();
});


it("renders customers", () => {
  render(<App />);
  const btns = screen.getAllByRole('button'); //form elements
  expect(btns.length).toBe(6);
});


it("renders customers 2", () => {
  let {container} = render(<App />);
  const cards = container.querySelectorAll('.card');
  expect(cards.length).toBe(6);
});

it("delete a customer", () => {
  render(<App/>);
  let btns = screen.getAllByRole('button');
  fireEvent.click(btns[3]);
  btns = screen.getAllByRole('button');
  expect(btns.length).toBe(5);
});



it("filter customers", () => {
  render(<App/>);
  let txtBox = screen.getByPlaceholderText('search by name');
  fireEvent.change(txtBox, {"target":{"value": "Geller"}});
  let btns = screen.getAllByRole('button');
  expect(btns.length).toBe(2);
});