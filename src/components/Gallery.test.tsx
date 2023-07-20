import "@testing-library/jest-dom"
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Gallery from './Gallery'

// App is rendered 
describe('Gallery', () => {
  test("Should be able to render the Gallery component", () => {
    const { debug } = render(<Gallery />);
    debug();
  })
})


