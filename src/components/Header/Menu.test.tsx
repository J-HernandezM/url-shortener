import { render, screen } from '@testing-library/react'
import Menu from './Menu'
import '@testing-library/jest-dom'

describe('<Menu />', () => {
  test('Should render correctly', () => {
    render(<Menu />)
    const ul = screen.getByTestId('menu-ul')
    expect(ul).toBeInTheDocument()
  })
})
