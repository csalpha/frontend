import "@testing-library/jest-dom"
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Footer from './Footer'

// App is rendered 
describe('Footer', () => {
  test("Should be able to render the Footer component", () => {
    const { debug } = render(<Footer />);
    debug();
  })
})


