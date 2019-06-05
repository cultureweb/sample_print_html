import React from 'react'
import { cleanup, render } from '@testing-library/react'
import Header from './Header';

afterEach(cleanup)

describe('<Header />', () => {
  it('renders without crashing', () => {
    render(<Header />)
  })
})