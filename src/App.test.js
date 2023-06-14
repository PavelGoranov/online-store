import { render, screen } from '@testing-library/react';
import App from './App';
// TODO - add appropriate tests
test('renders all main page elements', () => {
  render(<App />);
  const header = screen.getByText(/Header/i);
  expect(header).toBeInTheDocument();

  const footer = screen.getByText(/Footer/i);
  expect(footer).toBeInTheDocument();

  const content = screen.getByText(/Content/i);
  expect(content).toBeInTheDocument();

  const sidebar = screen.getByText(/Sidebar/i);
  expect(sidebar).toBeInTheDocument();

  const navigation = screen.getByText(/Navigation/i);
  expect(navigation).toBeInTheDocument();
});
