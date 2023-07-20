import "@testing-library/jest-dom"
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Body from './Body'

// App is rendered 
describe('Body', () => {
  test("Should be able to render the Body component", () => {
    const { debug } = render(<Body />);
    debug();
  })
})