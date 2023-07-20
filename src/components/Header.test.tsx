import "@testing-library/jest-dom"
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Header from './Header'

// App is rendered 
describe('Header', () => {
  test("Should be able to render the Header component", () => {
    const { debug } = render(<Header />);
    debug();
  })
})


