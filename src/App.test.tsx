import "@testing-library/jest-dom"
import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

// App is rendered 
describe('App', () => {
  test("renders App component", () => {
    // // const { getByText } = render(<App />);
    const { debug } = render(<App />);
    debug();
    // // expect(getByText("")).toBeInTheDocument();
  })
})


