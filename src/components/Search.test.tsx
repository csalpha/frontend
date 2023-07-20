import "@testing-library/jest-dom"
import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import Search from './Search'

// App is rendered 
describe('Input', () => {
  test("Should be able to render the search input", () => {
    const {debug} = render(<Search />);
    debug();
    // // const { getByTestId } = render(<Search />);
    // // expect(getByTestId(inputTestId)).ToBeInTheDocument();
  })
})


