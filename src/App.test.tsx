import "@testing-library/jest-dom"
import { describe, test, expect } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'
import Gallery from "./components/Gallery"
import Body from "./components/Body"

// App is rendered 
describe('App', () => {
  test("renders App component", () => {
    const { debug } = render(<App />);
    debug();
  })
})

// App is rendered 
describe('App', () => {
  test("Should be able to renders the initial text on screen", () => {
    const { getByText } = render(<App />);
    
    expect(getByText('No images found')).toBeInTheDocument();
  })
})

describe('App', () => {
  test("Should be able to renders the Body on the on screen", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("body")).toBeInTheDocument();
  })
})


