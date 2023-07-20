import "@testing-library/jest-dom"
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Logo from './Logo'

// App is rendered 
describe('Logo', () => {
  test("Should be able to render the Logo", () => {
    const {debug} = render(<Logo />);
    debug();
  })
})
